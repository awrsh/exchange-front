import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "../services/utils/axios";
import { getUser } from "../services/auth";
import useAuthStore from "../stores/user-store";

const useVerifyAuth = () => {
    const {setUser} = useAuthStore()
    const [cookies] = useCookies(["token"]);
    useEffect(() => {
        if (cookies.token) {
            const verifyUser = async () => {
                // setAuthLoading(true);
                axios.defaults.headers.common["Authorization"] = `Token ${cookies.token}`;
                try {
                    const user = await getUser();
                    setUser({ user });
                } catch (error: any) {
                    if (error?.response?.status === 401) {
                        // delete axios.defaults.headers.common["Authorization"];
                        // removeCookies("token", { path: "/" });
                    }
                } finally {
                    // setAuthLoading(false);
                }
            };
            verifyUser();
        } else {
            // delete axios.defaults.headers.common["Authorization"];
            // removeCookies("token", { path: "/" });
            // removeUser();
        }
    }, [cookies.token]);
};

export default useVerifyAuth;

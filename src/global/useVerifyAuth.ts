import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "../services/utils/axios";
import { getUser } from "../services/auth";
import useAuthStore from "../stores/user-store";
import { useNavigate } from "react-router-dom";

const useVerifyAuth = () => {
    const navigate = useNavigate()
    const {setUser} = useAuthStore()
    const [cookies,_,removeCookies] = useCookies(["token"]);
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
                        delete axios.defaults.headers.common["Authorization"];
                        removeCookies("token", { path: "/" });
                        navigate("/auth")
                    }
                } finally {
                    // setAuthLoading(false);
                }
            };
            verifyUser();
        } else {
           
        }
    }, [cookies.token]);
};

export default useVerifyAuth;

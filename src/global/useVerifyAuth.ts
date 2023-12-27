import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import axios from "../services/utils/axios";

const useVerifyAuth = () => {
    // const setAuthLoading = useAuthStore((s) => s.setAuthLoading);
    // const setUser = useAuthStore((s) => s.setUser);
    const [cookies, _, removeCookies] = useCookies(["token", "role"]);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/auth") return;
        if (cookies.token) {
            const verifyUser = async () => {
                // setAuthLoading(true);
                axios.defaults.headers.common["Authorization"] = `Bearer ${cookies.token}`;
                try {
                    // const { user } = await getUser();
                    // setUser({ user });
                } catch (error: any) {
                    if (error?.response?.status === 401) {
                        delete axios.defaults.headers.common["Authorization"];
                        removeCookies("token", { path: "/" });
                        removeCookies("role", { path: "/" });
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

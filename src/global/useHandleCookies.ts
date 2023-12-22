import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "../../services/utils/axios";
import useAuthStore from "../../store/auth-store";

const useHandleCookies = () => {
    const { removeUser } = useAuthStore();
    const [cookies, _, removeCookies] = useCookies(["token", "jwt"]);

    useEffect(() => {
        if (!cookies.token) {
            delete axios.defaults.headers.common["Authorization"];
            removeCookies("token", { path: "/" });
            removeUser();
        }
    }, [cookies.token]);
};

export default useHandleCookies;

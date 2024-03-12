import { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "../services/utils/axios";
import useAuthStore from "../stores/user-store";
import { useNavigate } from "react-router-dom";


const useHandleCookies = () => {
    const [cookies,_,removeCookies] = useCookies(["token"]);
    const { removeUser } = useAuthStore();
   const navigate = useNavigate()
    useEffect(() => {
        if (!cookies.token) {
            delete axios.defaults.headers.common["Authorization"];
            removeCookies("token", { path: "/" });
            removeUser();
            navigate("/auth")
        }
    }, [cookies.token]);
};

export default useHandleCookies;

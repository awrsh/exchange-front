import { useEffect } from "react";
import { useCookies } from "react-cookie";



const useHandleCookies = () => {
    const [cookies,] = useCookies(["token"]);
    useEffect(() => {
        if (!cookies.token) {
            // delete axios.defaults.headers.common["Authorization"];
            // removeCookies("token", { path: "/" });
            // removeUser();
            // navigate("/auth")
        }
    }, [cookies.token]);
};

export default useHandleCookies;

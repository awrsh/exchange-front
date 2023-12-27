import { useEffect } from "react";
import { useCookies } from "react-cookie";


const useHandleCookies = () => {
    // const { removeUser } = useAuthStore();
    const [cookies,] = useCookies(["token", "jwt"]);

    useEffect(() => {
        if (!cookies.token) {
            // delete axios.defaults.headers.common["Authorization"];
            // removeCookies("token", { path: "/" });
            // removeUser();
        }
    }, [cookies.token]);
};

export default useHandleCookies;

import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const WithTokenCkeck = () => (WrappedComponent: any) => {
    const WithTokenCkeck = (props: any) => {
        const [cookies] = useCookies(["token", "role"]);
        if (cookies.token) {
            return <WrappedComponent {...props} />
        } else {
            return <Navigate to={`/auth`} />
        }
    };

    return WithTokenCkeck;
};

export default WithTokenCkeck;

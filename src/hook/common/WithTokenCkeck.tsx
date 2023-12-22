import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const WithTokenCkeck = () => (WrappedComponent: any) => {
    const WithTokenCkeck = (props: any) => {
        const [cookies] = useCookies(["token", "role"]);
        if (!cookies.token && !cookies.role) {
            return <WrappedComponent {...props} />
        } else {
            if (cookies?.role === "user") {
                return <Navigate to={`/user/home`} />;
            } else if (cookies?.role === "admin") {
                return <Navigate to={`/admin/home`} />;
            } else {
                return <Navigate to={`/company/home`} />;
            }
        }
    };

    return WithTokenCkeck;
};

export default WithTokenCkeck;

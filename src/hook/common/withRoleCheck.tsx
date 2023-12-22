import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const withRoleCheck = (allowedRoles: any) => (WrappedComponent: any) => {
    const WithRoleCheck = (props: any) => {
        const [cookies] = useCookies(["token", "role"]);
        // Get the user's role from the authentication system or global state
        const userRole = cookies?.role; // Replace with your actual logic to get the user's role
        if (!cookies.token) return <Navigate to={"/login"} />
        if (allowedRoles.includes(userRole)) {
            return <WrappedComponent {...props} />;
        } else {
            if (cookies?.role === "user") {
                return <Navigate to={`/user`} />;
            } else if (cookies?.role === "admin") {
                return <Navigate to={`/admin/home`} />;
            } else if (cookies?.role === "company") {
                return <Navigate to={`/company/home`} />;
            } else {
                <Navigate to={"/login"} />
            }
        }
    };

    return WithRoleCheck;
};

export default withRoleCheck;

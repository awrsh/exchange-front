import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/user-store";

const CheckStatusUserVerifyAccount = () => (WrappedComponent: any) => {
    const CheckStatusUserVerifyAccount = (props: any) => {
        const {user} = useAuthStore()
        if (user?.authentication_status !== "pending") {
            return <WrappedComponent {...props} />
        } else {
            return <Navigate to={`/`} />;
        }
    };

    return CheckStatusUserVerifyAccount;
};

export default CheckStatusUserVerifyAccount;

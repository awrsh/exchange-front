import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const WithoutToken = () => (WrappedComponent: any) => {
    const WithoutTokenCkeck = (props: any) => {
        const [cookies] = useCookies(["token"]);
        if (!cookies.token) {
            return <WrappedComponent {...props} />
        } else {

            return <Navigate to={`/`} />;
        }
    };

    return WithoutTokenCkeck;
};

export default WithoutToken;

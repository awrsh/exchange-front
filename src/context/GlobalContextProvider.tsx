import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { Toaster } from 'react-hot-toast';
import useConfigureQueryClient from "../hook/common/useConfigureQueryClient";
import useVerifyAuth from "../global/useVerifyAuth";
import Sidebar from "../componets/common/Sidebar";
import VerifyAuth from "../componets/common/VerifyAuth";
import { useCookies } from "react-cookie";

interface GlobalContextProviderProps {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const queryClient = useConfigureQueryClient();
    const [cookies] = useCookies(["token"]);

    useVerifyAuth();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {
                !location.pathname.startsWith("/auth") && cookies.token &&
                <Sidebar />
            }
            {
                
            }
            <VerifyAuth/>
            <Toaster position="top-center" toastOptions={{ duration: 9000 }} />
        </QueryClientProvider>
    );
};

export default GlobalContextProvider;

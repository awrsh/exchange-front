import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { Toaster } from 'react-hot-toast';
import useConfigureQueryClient from "../hook/common/useConfigureQueryClient";
import useVerifyAuth from "../global/useVerifyAuth";
import Sidebar from "../componets/common/Sidebar";

interface GlobalContextProviderProps {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const queryClient = useConfigureQueryClient();

    // useHandleCookies();
    useVerifyAuth();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <Sidebar />
            <Toaster position="top-center" toastOptions={{ duration: 9000 }} />
        </QueryClientProvider>
    );
};

export default GlobalContextProvider;

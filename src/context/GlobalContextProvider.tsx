import { ReactNode } from "react";
import { QueryClientProvider } from "react-query";
import { MuiRtl } from "../theme/MuiRtl";
import { Toaster } from 'react-hot-toast';
import useConfigureQueryClient from "../hook/common/useConfigureQueryClient";
import useVerifyAuth from "../global/useVerifyAuth";

interface GlobalContextProviderProps {
    children?: ReactNode;
}

const GlobalContextProvider = ({ children }: GlobalContextProviderProps) => {
    const queryClient = useConfigureQueryClient();

    // useHandleCookies();
    useVerifyAuth();

    return (
        <QueryClientProvider client={queryClient}>
            <MuiRtl>{children}</MuiRtl>
            <Toaster position="top-center" toastOptions={{duration:9000}} />
        </QueryClientProvider>
    );
};

export default GlobalContextProvider;

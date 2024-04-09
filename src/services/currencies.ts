import { routes } from "../helpers/api/routes";
import { getRoute } from "../helpers/utils/services";
import { Currency } from "../types/Currencies";
import client from "./utils/client";
import client_bitpin from "./utils/client-bitpin";


export const listCurrencies = async () => {
    const url = getRoute({ route: routes.currencies });
    return await client_bitpin<Currency[]>({ url });
};

export const getCurrency = async (show_in_dashboard?:boolean) => {
    const url = getRoute({ route: `/currencies/?${show_in_dashboard?"for_dashboard=true":""}` });
    return await client<{objects:Currency[]}>({ url });
};
export const getNetwork = async () => {
    const url = getRoute({ route: "/currencies/networks" });
    return await client<{objects:Currency[]}>({ url });
};
export const getWalletAddress = async (data:{currency_code:string,network_code:string}) => {
    const url = getRoute({ route: `/currencies/wallets/?currency_code=${data.currency_code}&network_code=${data.network_code}` });
    return await client<{objects:{address:string}[]}>({ url });
};
export const craeteWalletAddress = async (data:{currency_code:string,network_code:string}) => {
    const url = getRoute({ route: `/currencies/wallets/` });
    return await client<{objects:{address:string}[]}>({ url ,method:"POST",data});
};
export const createTransactionCrypto = async (data:any) => {
    const url = getRoute({ route: `/transactions/crypto/` });
    return await client<{objects:{address:string}[]}>({ url,method:"POST",data});
};

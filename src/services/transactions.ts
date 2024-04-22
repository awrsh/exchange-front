import { getRoute } from "../helpers/utils/services";
import { AuthorityLevels } from "../types/Authority/ResponseGetAuthorityLevels";
import { Ticket } from "../types/Ticket";
import { TransactionCrypto } from "../types/Transaction";
import client from "./utils/client";




export const calculateCommission = async (data:{currency_code:string,network_code:string}) => {
    const url = getRoute({ route: "/transactions/crypto/calculate-commission/" });
    return await client<AuthorityLevels[]>({ url,method:"POST",data });
};
export const getTransactionCrypto = async () => {
    const url = getRoute({ route: "/transactions/crypto/" });
    return await client<{objects:TransactionCrypto[]}>({ url });
};
export const getTickets = async () => {
    const url = getRoute({ route: "/tickets" });
    return await client<{objects:Ticket[]}>({ url });
};

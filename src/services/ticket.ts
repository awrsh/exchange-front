import { getRoute } from "../helpers/utils/services";
import { PayloadTicket } from "../types/Ticket";
import { TransactionCrypto } from "../types/Transaction";
import client from "./utils/client";





export const getTickets = async () => {
    const url = getRoute({ route: "/tickets" });
    return await client<{objects:TransactionCrypto[]}>({ url });
};
export const createTickets = async (data:PayloadTicket) => {
    const url = getRoute({ route: "/tickets/" });
    return await client<{objects:TransactionCrypto[]}>({ url,method:"POST",data });
};

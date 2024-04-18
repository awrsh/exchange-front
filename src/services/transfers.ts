import { getRoute } from "../helpers/utils/services";
import { ResponseTransfers } from "../types/Transfers";
import client from "./utils/client";


export const addTransfers = async (data:{}) => {
    const url = getRoute({ route: `/transfers/` });
    return await client<{message:string}>({ url,data,method:"POST" });
};
export const getTransfers = async () => {
    const url = getRoute({ route: `/transfers/` });
    return await client<ResponseTransfers>({ url, });
};

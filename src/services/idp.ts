import { getRoute } from "../helpers/utils/services";
import { Rial } from "../types/Idp";
import client from "./utils/client";


export const getDepositRialHistory = async () => {
    const url = getRoute({ route: `/transactions/rial/deposit/` });
    return await client<{object:Rial[]}>({ url ,method:"GET",});
};
export const getWithdrawRialHistory = async () => {
    const url = getRoute({ route: `/transactions/rial/withdraw/` });
    return await client<{object:Rial[]}>({ url ,method:"GET",});
};
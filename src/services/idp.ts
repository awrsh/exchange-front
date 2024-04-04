import { getRoute } from "../helpers/utils/services";
import { Rial } from "../types/Idp";
import client from "./utils/client";


export const getRialHistory = async () => {
    const url = getRoute({ route: `/idp/payment/history/` });
    return await client<{object:Rial[]}>({ url ,method:"GET",});
};
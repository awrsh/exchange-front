import { getRoute } from "../helpers/utils/services";
import client from "./utils/client";




export const getOrder = async () => {
    const url = getRoute({ route: "/transactions/crypto/" });
    return await client<{objects:any[]}>({ url });
};




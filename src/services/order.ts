import { getRoute } from "../helpers/utils/services";
import { Order } from "../types/Order";
import client from "./utils/client";




export const getOrder = async () => {
    const url = getRoute({ route: "/transactions/crypto/" });
    return await client<{objects:any[]}>({ url });
};

export const newOrder = async (data:Order) => {
    const url = getRoute({ route: "/orders/" });
    return await client<{objects:any[]}>({ url,data,method:"POST" });
};




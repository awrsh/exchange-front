import { getRoute } from "../helpers/utils/services";
import client from "./utils/client";




export const createRialPayment = async (data:{card_number:string,amount:number}) => {
    const url = getRoute({ route: "/idp/create_rial_payment/" });
    return await client<{url:string}>({ url,method:"POST",data });
};
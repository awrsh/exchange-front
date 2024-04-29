import { getRoute } from "../helpers/utils/services";
import client from "./utils/client";




export const createRialPayment = async (data:{card_number:string,amount:number}) => {
    const url = getRoute({ route: "/transactions/rial/deposit/new/" });
    return await client<{url:string}>({ url,method:"POST",data });
};
export const otpTransactionRial = async () => {
    const url = getRoute({ route: "/transactions/rial/withdraw/otp/" });
    return await client<{url:string}>({ url,method:"POST" });
};
export const otpTransactionCrypto = async () => {
    const url = getRoute({ route: "/transactions/crypto/otp/" });
    return await client<{url:string}>({ url,method:"POST" });
};
export const withdreawPayment = async (data:{card_number:string,amount:number}) => {
    const url = getRoute({ route: "/transactions/rial/withdraw/" });
    return await client<{url:string}>({ url,method:"POST",data });
};

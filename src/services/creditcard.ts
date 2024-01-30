import { routes } from "../helpers/api/routes";
import { getRoute } from "../helpers/utils/services";
import { TypeAddCreditcard } from "../types/Creditcard";
import { ResponseAllCreditcard } from "../types/Creditcard/ResponseAllCreditcard";
import client from "./utils/client";


export const getCrditcard = async () => {
    const url = getRoute({ route: `${routes.creditcard}` });
    return await client<ResponseAllCreditcard>({ url ,method:"GET",});
};
export const addCreditcard = async (data:TypeAddCreditcard) => {
    const url = getRoute({ route: `${routes.creditcard}` });
    return await client<ResponseAllCreditcard>({ url ,method:"POST",data});
};
export const deleteCreditcard = async (id:number) => {
    const url = getRoute({ route: `${routes.creditcard}${id}/` });
    return await client<ResponseAllCreditcard>({ url ,method:"DELETE"});
};
export const updateCreditcard = async ({id,data}:{id:number,data:TypeAddCreditcard}) => {
    const url = getRoute({ route: `${routes.creditcard}${id}/` });
    return await client<ResponseAllCreditcard>({ url ,method:"PATCH",data});
};
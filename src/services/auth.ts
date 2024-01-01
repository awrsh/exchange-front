import { routes } from "../helpers/api/routes";
import { getRoute } from "../helpers/utils/services";
import { typeLogin, typeRegister, typeVerify } from "../types/Auth";
import { ResponseVerify } from "../types/Auth/ResponseVerify";
import client from "./utils/client";


export const getUser = async () => {
    const url = getRoute({ route: routes.auth.me });
    return await client<any>({ url });
};
export const register = async (data:typeRegister) => {
    const url = getRoute({ route: routes.auth.register });
    return await client<any>({ url ,method:"POST", data});
};
export const login = async (data:typeLogin) => {
    const url = getRoute({ route: routes.auth.login });
    return await client<any>({ url ,method:"POST", data});
};
export const verify = async (data:typeVerify) => {
    const url = getRoute({ route: routes.auth.verify });
    return await client<ResponseVerify>({ url ,method:"POST", data});
};
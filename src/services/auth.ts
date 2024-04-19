import { routes } from "../helpers/api/routes";
import { generateFormData, getRoute } from "../helpers/utils/services";
import { PayloadForgetPassword, PayloadResetPassword, User, typeLogin, typeRegister, typeVerify } from "../types/Auth";
import { ResponseVerify } from "../types/Auth/ResponseVerify";
import client from "./utils/client";


export const getUser = async () => {
    const url = getRoute({ route: routes.auth.me });
    return await client<any>({ url });
};
export const getUserHistory = async () => {
    const url = getRoute({ route: "/users/history/" });
    return await client<{user_id:User,successful:boolean,reason:null | string,create_date:string}[]>({ url });
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
export const verifyAccount = async (data:any) => {
    const formData = generateFormData(data)
    const url = getRoute({ route: `${routes.auth.verify_account}` });
    return await client<ResponseVerify>({ url ,method:"PUT", ...formData});
};
export const forgetPasswordOtp = async (data:{mobile:string}) => {
    const url = getRoute({ route: `/users/forget-password/otp/` });
    return await client<ResponseVerify>({ url ,method:"POST", data});
};
export const forgetPassword = async (data:PayloadForgetPassword) => {
    const url = getRoute({ route: `/users/forget-password/` });
    return await client<ResponseVerify>({ url ,method:"POST", data});
};
export const resetPassword = async (data:PayloadResetPassword) => {
    const url = getRoute({ route: `/users/reset-password/` });
    return await client<ResponseVerify>({ url ,method:"POST", data});
};
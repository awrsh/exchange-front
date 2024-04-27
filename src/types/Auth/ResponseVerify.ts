export type ResponseVerify = {
    expiry: string,
    token: string,
    result: "error",
    error:{
        description:string
        message:string
    }
}
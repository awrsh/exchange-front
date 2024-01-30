export type typeRegister = {
    "mobile": string,
    "password": string,
    "first_name": string,
    "last_name": string
}
export type typeLogin = {
    "mobile": string,
    "password": string,
}
export type typeVerify = {
    "mobile": string,
    "otp": number,
}

    export interface User {
    id: number;
    approved_rule_ids:number[]
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    date_joined: string;
    uid: string;
    mobile: string;
    user_level:number;
    authentication_status: "level_0" | "level_1" | "level_2" | "level_3" | "pending" ;
    national_code: string;
    gender: string;
    birth_date: string;
    national_card_image: string;
    birth_card_image: string;
    avatar_image: string;
    last_login: string;
}
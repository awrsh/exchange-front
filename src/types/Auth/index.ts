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
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    date_joined: string;
    uid: string;
    mobile: string;
    authentication_status: string;
    national_code: string;
    gender: string;
    birth_date: string;
    national_card_image: string;
    birth_card_image: string;
    avatar_image: string;
    last_login: string;
}
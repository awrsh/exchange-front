import { User } from "../Auth"

export type PayloadTransfers = {
    "currency_code": string,
    "amount": number,
    "mobile": string
}

export type ResponseTransfers = {
    objects: {
        amount: number,
        currency_id: {
            code: string,
            id: string,
            title: string,
            title_fa:string
        },
        successful: boolean,
        create_date: string,
        user_id: User,

    }[]
}
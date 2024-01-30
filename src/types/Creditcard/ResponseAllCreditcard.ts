
export type Card = {
    approved:boolean
    card_number:string
    create_date:string
    iban:string
    id:number
    write_date:string
}

export type ResponseAllCreditcard = {
    objects: Card[]
    result: "success"
}
export type PayloadTicket = {
    title: string,
    message: string,
    department: string
}


export type Ticket = {
    title: string,
    department: string,
    status: "pending",
    messages:{message:string}[],
    create_date:string
}
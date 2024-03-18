import { useState } from "react"
import Button from "../componets/common/Button"
import Layout from "../componets/common/Layout"
import Table from "../componets/common/Table"
import CreateTickets from "../componets/tickets/CreateTickets"
import WithTokenCkeck from "../hook/common/WithTokenCkeck"

const Tickets = () => {
    const [open, setOpen] = useState(false)
    return (
        <Layout>
            <div className="w-[95%] mx-auto">
                <div className="flex mt-6 items-center justify-between">
                    <h1 className="text-xl font-bold">تیکت‌ها</h1>
                    <Button onClick={()=>setOpen(!open)} containerClass="!w-[120px]" name="تیکت جدید" />
                </div>
                <div className="mt-10">
                    <Table length={0} header={["#", "عنوان تیکت", "تاریخ", "اهمیت", "وضعیت", "جزئیات"]} />
                </div>
            </div>
            <CreateTickets open={open} setOpen={setOpen} />
        </Layout>
    )
}

export default WithTokenCkeck()(Tickets) 
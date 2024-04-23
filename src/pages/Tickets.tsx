import { useState } from "react"
import Button from "../componets/common/Button"
import Layout from "../componets/common/Layout"
import Table from "../componets/common/Table"
import CreateTickets from "../componets/tickets/CreateTickets"
import WithTokenCkeck from "../hook/common/WithTokenCkeck"
import useGetTicketsQuery from "../hook/query/ticket/useGetTicketsQuery"
import { StyledTableCell, StyledTableRow } from "../helpers/utils/mui"

const Tickets = () => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    const [open, setOpen] = useState(false)
    const { data, isLoading } = useGetTicketsQuery()
    return (
        <Layout>
            <div className="w-[95%] mx-auto">
                <div className="flex mt-6 items-center justify-between">
                    <h1 className="text-xl font-bold">تیکت‌ها</h1>
                    <Button onClick={() => setOpen(!open)} containerClass="!w-[120px] !bg-int" name="تیکت جدید" />
                </div>
                <div className="mt-10">
                    <Table isLoaidng={isLoading} length={data?.objects.length} header={["#", "عنوان تیکت", "تاریخ", "نوع پیام", "وضعیت"]} >
                        {
                            data?.objects.map((message, idx) => (
                                <StyledTableRow key={idx}>
                                    <StyledTableCell className="!font-num" align="center">{idx + 1}</StyledTableCell>
                                    <StyledTableCell align="center">{message.title}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        {/* @ts-ignore */}
                                        {new Date(message.create_date).toLocaleDateString("fa-IR", options)}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{message.department === "finance" ? "مالی" : message.department === "support" ? "پشتیبانی" : "مدیریت"}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <span className={`font-bold ${message.status === "pending" ? "text-yellow-500" : ""}`}>{message.status === "pending" ? "در انتظار" : ""}</span>
                                    </StyledTableCell>
                                    
                                </StyledTableRow>
                            ))
                        }
                    </Table>
                </div>
            </div>
            <CreateTickets open={open} setOpen={setOpen} />
        </Layout>
    )
}

export default WithTokenCkeck()(Tickets) 
import { StyledTableCell, StyledTableRow } from '../../helpers/utils/mui'
import useGetTicketsQuery from '../../hook/query/ticket/useGetTicketsQuery'
import Table from '../common/Table'

const SupportTickets = () => {
    let options = { year: "numeric", month: "long", day: "numeric" };

    const { data, isLoading } = useGetTicketsQuery()
    return (
        <div className="bg-white bg-dark flex  flex-col rounded-xl p-3">
            <p className="font-bold text-xl border-b border-neutral-200 pb-3">تیکت های پشتیبانی</p>
            <div className="mt-8">
                <Table isLoaidng={isLoading} length={data?.objects.length} header={["", "عنوان تیکت", "تاریخ", "وضعیت"]} >
                    {data?.objects.map((ticket, idx) => (
                        <StyledTableRow key={idx}>
                            <StyledTableCell align='center'>{idx + 1}</StyledTableCell>
                            <StyledTableCell align='center'>{ticket.title}</StyledTableCell>
                            <StyledTableCell align='center'>
                                {/* @ts-ignore */}
                                {new Date(ticket.create_date).toLocaleDateString("fa-IR", options)}
                            </StyledTableCell>
                            <StyledTableCell align='center'>{ticket.status === "pending"?"در حال بررسی":""}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </Table>
            </div>
        </div>
    )
}

export default SupportTickets
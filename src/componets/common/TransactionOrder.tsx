import { StyledTableCell, StyledTableRow } from '../../helpers/utils/mui'
import useGetOrderQuery from '../../hook/query/order/useGetOrderQuery'
import Table from './Table'

const TransactionOrder = ({ type }: { type: string }) => {
    let options = { year: "numeric", month: "long", day: "numeric" };

    const { data, isLoading } = useGetOrderQuery()
    return (
        <Table isLoaidng={isLoading} length={data?.objects.length} header={["نوع", "نام ارز", "تاریخ ثبت", "تعداد ارز", "شماره فاکتور", "وضعیت"]} >
            {
                data?.objects.filter((option) => option.type === type).map((row, idx) => (
                    <StyledTableRow key={idx}>
                        <StyledTableCell align='center'>
                            {
                                row.type === "sell" ? <span className='text-red-500  rounded-lg p-2 px-4 text-[13px]'>فروش</span> : <span className='text-green-600 rounded-lg p-2 px-4 text-[13px]'>خرید</span>
                            }
                        </StyledTableCell>
                        <StyledTableCell width={200} align="center">
                            <div className="flex items-center  justify-center  gap-2">
                                <img src={row.currency_id.image} className="w-8 h-8  rounded-full" />
                                <p className="font-bold text-start w-[100px]">{row.currency_id.title}</p>
                            </div>
                        </StyledTableCell>
                        <StyledTableCell align='center'>
                            {
                                // @ts-ignore
                                new Date(row.create_date).toLocaleDateString("fa-IR", options)
                            }
                        </StyledTableCell>
                        <StyledTableCell align='center'>
                            {
                                row?.amount
                            }
                        </StyledTableCell>
                        <StyledTableCell align='center'>
                            {
                                row?.factor_number
                            }
                        </StyledTableCell>
                        <StyledTableCell align='center'>
                            {
                                row?.status === "approve" ?
                                    <span className='bg-green-600 text-white text-[11px] rounded-lg px-3 py-2'>تائید شده</span> :
                                    row?.status === "pending" ? <span className='bg-yellow-600 text-white text'>در حال انتظار</span> :
                                        row?.status === "cancel" ? <span className='bg-red-600 text-white text'>کنسل شده</span> :
                                            row?.status === "reject" ? <span className='bg-red-600 text-white text'>رد شده</span> :
                                                null
                            }
                        </StyledTableCell>
                    </StyledTableRow>
                ))
            }
        </Table>
    )
}

export default TransactionOrder
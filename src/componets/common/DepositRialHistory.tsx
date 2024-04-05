import { formatCardNumber } from "../../helpers/utils/fun"
import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import useDepositRialPaymentHistory from "../../hook/query/idp/useDepositRialPaymentHistory"
import Table from "./Table"

const DepositRialHistory = () => {
    const {isLoading,data}  = useDepositRialPaymentHistory()
    // @ts-ignore
    const sortedData = data?.object.sort((a:any, b:any) => new Date(b.write_date) - new Date(a.write_date));

    return (
        <Table isLoaidng={isLoading} length={data?.object?.length} header={["ردیف","نوع", "تاریخ‌وزمان", "مبلغ(تومان)", "شناسه تراکنش", "کارت پرداختی", "وضعیت"]}  >
            {
                sortedData?.map((crypto, idx) => (
                    <StyledTableRow key={idx}>
                        <StyledTableCell className="dark:!text-white" align="center"><span className="font-num">{idx+1}</span></StyledTableCell>
                        <StyledTableCell className="dark:!text-white" align="center">واریز</StyledTableCell>
                        <StyledTableCell className="dark:!text-white" align="center">{new Date(crypto.write_date).toLocaleString("fa-IR")}</StyledTableCell>
                        <StyledTableCell align="center" className="!font-num dark:!text-white">{Number(crypto.amount).toLocaleString()} <span className="text-[10px]">تومان</span></StyledTableCell>
                        <StyledTableCell align="center" className="!font-num dark:!text-white">{crypto.factor_number}</StyledTableCell>
                        <StyledTableCell align="center" className="!font-num dark:!text-white">{formatCardNumber(crypto.card_number)}</StyledTableCell>
                        <StyledTableCell className="dark:!text-white" align="center" >{crypto.status === "success" ? <span className="text-green-500 font-bold">تکمیل شده</span> : crypto.status === "pending" ? <span className="text-yellow-500 font-bold">در انتظار پرداخت</span> :crypto.status === "cancel" ? <span className="text-red-500 font-bold">کنسل شده</span>: <span className="text-red-500 font-bold">ناموفق</span>} </StyledTableCell>
                    </StyledTableRow>
                ))
            }
        </Table>
    )
}

export default DepositRialHistory
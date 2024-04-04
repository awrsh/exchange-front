import { formatCardNumber } from "../../helpers/utils/fun"
import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import useIdpRialPaymentHistory from "../../hook/query/idp/useIdpRialPaymentHistory"
import Table from "../common/Table"

const RialHistory = () => {
    const {isLoading,data}  = useIdpRialPaymentHistory()
    return (
        <Table isLoaidng={isLoading} length={data?.object?.length} header={["نوع", "تاریخ‌وزمان", "مبلغ(تومان)", "شناسه تراکنش", "کارت پرداختی", "وضعیت"]}  >
            {
                data?.object.map((crypto, idx) => (
                    <StyledTableRow key={idx}>
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

export default RialHistory
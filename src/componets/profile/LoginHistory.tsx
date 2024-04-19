import { StyledTableCell, StyledTableRow } from "../../helpers/utils/mui"
import useUserHistoryQuery from "../../hook/query/user/useUserHistoryQuery"
import Table from "../common/Table"

const LoginHistory = () => {
    const { data } = useUserHistoryQuery()
    let options = { year: "numeric", month: "long", day: "numeric",hour: 'numeric', minute: 'numeric', second: 'numeric' };

    return (
        <div className="bg-white bg-dark flex  flex-col rounded-xl p-3">
            <p className="font-bold text-xl border-b border-neutral-200 pb-3">تاریخچه ورود</p>
            <div className="mt-8">
                <Table className="max-h-[300px] overflow-y-auto" length={data?.length} header={["وضعیت", "زمان", "پیام",]} >
                    {
                        data?.map((user, idx) => (
                            <StyledTableRow key={idx}>
                                <StyledTableCell align="center">{user.successful ? <span className="text-green-500">موفق</span> : <span className="text-red-500">ناموفق</span>}</StyledTableCell>
                                {/* @ts-ignore */}
                                <StyledTableCell align="center">{new Date(user.create_date).toLocaleDateString("fa-IR", options)}</StyledTableCell>
                                <StyledTableCell align="center">{user.reason ==="invalid_password" ? <span>رمز عبور اشتباه است</span> : user.reason==="invalid_otp"?"وارد کردن رمز عبور اشتباه":"-"}</StyledTableCell>
                            </StyledTableRow>
                        ))
                    }
                </Table>
            </div>
        </div>
    )
}

export default LoginHistory
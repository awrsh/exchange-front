import { useState } from "react"
import Layout from "../componets/common/Layout"
import Table from "../componets/common/Table"
import { StyledTableCell, StyledTableRow } from "../helpers/utils/mui"
import { transactionsList } from "../helpers/utils/data"
import WithTokenCkeck from "../hook/common/WithTokenCkeck"
import useGetOrderQuery from "../hook/query/order/useGetOrderQuery"

const TransactionHistory = () => {
    const {data,isLoading} = useGetOrderQuery()
    const [select, setSelect] = useState(0)
    const tabs = ['معاملات تکمیل شده', "واریز های ریالی", "واریز های ارزی", "برداشت های ریالی", "برداشت های ارزی", "معاملات حرفه‌ای", "معاملات حرفه‌ای باز"]
    return (
        <Layout>
            <div className="w-[95%] mx-auto">
                <h1 className="text-xl font-bold">تاریخچه معاملات</h1>
                <div className="bg-white bg-dark rounded-xl p-6 mt-4">
                    <div className="flex items-center gap-4 overflow-auto">
                        {tabs.map((tab, idx) => (
                            <button onClick={() => setSelect(idx)} key={idx} className={`text-[13px] whitespace-nowrap transition-all duration-300 p-3 rounded-lg ${select === idx ? "bg-int text-white font-bold" : "font-regular bg-gray-100 dark:bg-slate-400"}`}>{tab}</button>
                        ))}
                    </div>
                    <div className="mt-6">
                        {select === 0 && <Table length={data?.objects?.length} isLoaidng={isLoading} header={["نام ارز", "نوع", "تاریخ ثبت", "مبلغ(تومان)", "مقدار", "وضعیت"]}  >
                            {
                                data?.objects.map((order, idx) => (
                                    <StyledTableRow className="style-table-row" key={idx}>
                                        <StyledTableCell className="dark:!text-white" align="center" >{order.currency_id.title} </StyledTableCell>
                                        <StyledTableCell className="dark:!text-white" align="center" >{order.type === "deposit" ? "خرید" : "فروش"} </StyledTableCell>
                                        <StyledTableCell className="dark:!text-white" align="center" >-</StyledTableCell>
                                        <StyledTableCell  className="!font-num dark:!text-white" align="center" >{Number(order.amount).toLocaleString()} </StyledTableCell>
                                        <StyledTableCell  className="!font-num dark:!text-white" align="center" >jjjj </StyledTableCell>
                                        <StyledTableCell className="dark:!text-white" align="center" >{order.status === "success" ? <span className="text-green-500 font-bold">تکمیل شده</span> : order.status === "cancel" ?  <span className="text-red-500 font-bold">ناموفق</span>:<span className="text-yellow-500 font-bold">در حال انتظار</span>} </StyledTableCell>
                                        {/* <StyledTableCell className="dark:!text-white" align="center" >
                                            <button className="text-int">مشاهده</button>
                                        </StyledTableCell> */}
                                    </StyledTableRow>
                                ))
                            }
                        </Table>}
                        {select === 1 && <Table header={["نوع", "تاریخ‌وزمان", "مبلغ(تومان)", "شناسه تراکنش", "کارت پرداختی", "وضعیت"]}  >
                            {
                                transactionsList.map((crypto, idx) => (
                                    <StyledTableRow key={idx}>
                                        <StyledTableCell className="dark:!text-white" align="center">{crypto.type === "Buy" ? "خرید" : crypto.type === "Sell" ? "فروش" : "تبدیل"}</StyledTableCell>
                                        <StyledTableCell className="dark:!text-white" align="center">{new Date(crypto.dateTime).toLocaleString("fa-IR")}</StyledTableCell>
                                        <StyledTableCell align="center" className="!font-num dark:!text-white">{crypto.amountInToman.toLocaleString()} <span className="text-[10px]">تومان</span></StyledTableCell>
                                        <StyledTableCell align="center" className="!font-num dark:!text-white">{crypto.transactionId}</StyledTableCell>
                                        <StyledTableCell align="center" className="!font-num dark:!text-white">{crypto.creditCard}</StyledTableCell>
                                        <StyledTableCell className="dark:!text-white" align="center" >{crypto.status === "Completed" ? <span className="text-green-500 font-bold">تکمیل شده</span> : crypto.status === "Pending" ? <span className="text-yellow-500 font-bold">در حال انتظار</span> : <span className="text-red-500 font-bold">ناموفق</span>} </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </Table>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WithTokenCkeck()(TransactionHistory)
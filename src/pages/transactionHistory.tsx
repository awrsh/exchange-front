import { useState } from "react"
import Layout from "../componets/common/Layout"
import Table from "../componets/common/Table"
import { StyledTableCell, StyledTableRow } from "../helpers/utils/mui"
import { cryptoTransactions, transactionsList } from "../helpers/utils/data"

const TransactionHistory = () => {
    const [select, setSelect] = useState(0)
    const tabs = ['معاملات تکمیل شده', "واریز های ریالی", "واریز های ارزی", "برداشت های ریالی", "برداشت های ارزی", "معاملات حرفه‌ای", "معاملات حرفه‌ای باز"]
    return (
        <Layout>
            <div className="w-[95%] mx-auto">
                <h1 className="text-xl font-bold">تاریخچه معاملات</h1>
                <div className="bg-white rounded-xl p-6 mt-4">
                    <div className="flex items-center gap-4 overflow-auto">
                        {tabs.map((tab, idx) => (
                            <button onClick={() => setSelect(idx)} key={idx} className={`text-[13px] whitespace-nowrap transition-all duration-300 p-3 rounded-lg ${select === idx ? "bg-int text-white font-bold" : "font-regular bg-gray-100"}`}>{tab}</button>
                        ))}
                    </div>
                    <div className="mt-6">
                        {select === 0 && <Table header={["نام ارز", "نوع", "تاریخ ثبت", "مبلغ(تومان)", "مقدار", "وضعیت", "جزئیات"]}  >
                            {
                                cryptoTransactions.map((crypto, idx) => (
                                    <StyledTableRow key={idx}>
                                        <StyledTableCell align="center" >{crypto.name} </StyledTableCell>
                                        <StyledTableCell align="center" >{crypto.type === "Buy" ? "خرید" : "فروش"} </StyledTableCell>
                                        <StyledTableCell align="center" >{new Date(crypto.registrationDate).toLocaleDateString("fa-IR")} </StyledTableCell>
                                        <StyledTableCell className="!font-num" align="center" >{crypto.amountInToman.toLocaleString()} </StyledTableCell>
                                        <StyledTableCell className="!font-num" align="center" >{crypto.quantity} </StyledTableCell>
                                        <StyledTableCell align="center" >{crypto.status === "Completed" ? <span className="text-green-500 font-bold">تکمیل شده</span> : crypto.status === "Pending" ? <span className="text-yellow-500 font-bold">در حال انتظار</span> : <span className="text-red-500 font-bold">ناموفق</span>} </StyledTableCell>
                                        <StyledTableCell align="center" >
                                            <button className="text-int">مشاهده</button>
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))
                            }
                        </Table>}
                        {select === 1 && <Table header={["نوع", "تاریخ‌وزمان", "مبلغ(تومان)", "شناسه تراکنش", "کارت پرداختی", "وضعیت"]}  >
                            {
                                transactionsList.map((crypto, idx) => (
                                    <StyledTableRow key={idx}>
                                        <StyledTableCell align="center">{crypto.type === "Buy" ? "خرید" : crypto.type === "Sell" ? "فروش" : "تبدیل"}</StyledTableCell>
                                        <StyledTableCell align="center">{new Date(crypto.dateTime).toLocaleString("fa-IR")}</StyledTableCell>
                                        <StyledTableCell align="center" className="!font-num">{crypto.amountInToman.toLocaleString()} <span className="text-[10px]">تومان</span></StyledTableCell>
                                        <StyledTableCell align="center" className="!font-num">{crypto.transactionId}</StyledTableCell>
                                        <StyledTableCell align="center" className="!font-num">{crypto.creditCard}</StyledTableCell>
                                        <StyledTableCell align="center" >{crypto.status === "Completed" ? <span className="text-green-500 font-bold">تکمیل شده</span> : crypto.status === "Pending" ? <span className="text-yellow-500 font-bold">در حال انتظار</span> : <span className="text-red-500 font-bold">ناموفق</span>} </StyledTableCell>
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

export default TransactionHistory
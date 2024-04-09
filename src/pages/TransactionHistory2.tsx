import { useState } from "react"
import Layout from "../componets/common/Layout"
import WithTokenCkeck from "../hook/common/WithTokenCkeck"
import DepositRialHistory from "../componets/common/DepositRialHistory"
import WithdrawRialHistory from "../componets/common/WithdrawRialHistory"
import TransactionOrder from "../componets/common/TransactionOrder"
const TransactionHistory = () => {
    const [select, setSelect] = useState(0)
    const tabs = ['خرید',"فروش", "واریز های تومانی", "برداشت های تومانی"]
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
                        {select === 0 ? <TransactionOrder type="buy" /> : null}
                        {select === 1 ? <TransactionOrder type="sell" /> : null}
                        {select === 2 ? <DepositRialHistory /> : null}
                        {select === 3 ? <WithdrawRialHistory /> : null}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WithTokenCkeck()(TransactionHistory)
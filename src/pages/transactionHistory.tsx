import { useState } from "react"
import Layout from "../componets/common/Layout"
import Table from "../componets/common/Table"

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
                        {select === 0 && <Table header={["نام ارز","نوع","تاریخ ثبت","مبلغ(تومان)","مقدار","وضعیت","جزئیات"]} length={0} />}
                        {select === 1 && <Table header={["نوع","تاریخ‌وزمان","مبلغ(تومان)","شناسه تراکنش","کارت پرداختی","وضعیت"]} length={0} />}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default TransactionHistory
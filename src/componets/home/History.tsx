import { useState } from "react"
import Table from "../common/Table"

const History = () => {
    const tabs = ["معاملات ارزی", "تاریخچه معاملات"]
    const [select, setSelect] = useState(0)
    return (
        <div className="bg-white p-3 rounded-xl mt-7">
            <div className="flex items-center gap-4">
                {
                    tabs.map((tab, idx) => (
                        <button onClick={() => setSelect(idx)} className={`text-[12px] lg:text-[14px] transition-all duration-300 p-3 rounded-lg ${select === idx ? "bg-int text-white font-bold" : "font-regular bg-gray-100"}`} key={idx}>{tab}</button>
                    ))
                }
            </div>

            <div className="mt-5">
                {select === 0 ? <Table length={0} header={["نوع", "نام ارز", "تاریخ ثبت", "مبلغ تومانی سفارش", "تعداد ارز", "پرشده", "وضعیت"]} /> : null}
                {select === 1 ? <Table length={0} header={["نوع درخواست", "تاریخ ثبت", "ارز", "تعداد", "وضعیت", "عملیات"]} /> : null}
            </div>
        </div>
    )
}

export default History
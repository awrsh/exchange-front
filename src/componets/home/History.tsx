import { useState } from "react"
import RialHistory from "../common/RialHistory"

const History = () => {
    const tabs = ["معاملات ارزی", "تاریخچه معاملات"]
    const [select, setSelect] = useState(0)
    return (
        <div className="bg-white p-3 rounded-xl mt-7 bg-dark">
            <div className="flex items-center gap-4">
                {
                    tabs.map((tab, idx) => (
                        <button onClick={() => setSelect(idx)} className={`text-[12px] lg:text-[14px] transition-all duration-300 p-3 rounded-lg ${select === idx ? "bg-int text-white font-bold " : "font-regular bg-gray-100 dark:bg-slate-400"}`} key={idx}>{tab}</button>
                    ))
                }
            </div>

            <div className="mt-5">
                {select === 0 ? <RialHistory/>: null}
                {select === 1 ? <RialHistory/> : null}
            </div>
        </div>
    )
}

export default History
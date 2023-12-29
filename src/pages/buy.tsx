import { useState } from "react"
import Header from "../componets/common/Header"
import Toman from "../componets/buy/Toman"

const Buy = () => {
    const [select, setSelect] = useState(0)
    const tabs = ["تومانIRT", "تترUSDT"]

   
    return (
        <div>
            <Header />
            <div className="min-h-[80vh] flex justify-center items-center">
                <div className="w-[40%] mt-5 p-4 rounded-xl bg-white  mx-auto">
                    <div className="flex items-center gap-4 border-b-2">
                        {tabs.map((tab, idx) => (
                            <button onClick={() => setSelect(idx)} className={`font-bold text-sm border-b-2 pb-2 px-3 ${select === idx ? "text-green-600 border-green-600" : "text-neutral-800 border-transparent"}`} key={idx}>{tab}</button>
                        ))}
                    </div>

                    <Toman />
                </div>
            </div>
        </div>
    )
}

export default Buy
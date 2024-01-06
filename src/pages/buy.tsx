import { useState } from "react"
import Toman from "../componets/buy/Toman"
import Layout from "../componets/common/Layout"

const Buy = () => {
    const [select, setSelect] = useState(0)
    const tabs = ["تومانIRT", "تترUSDT"]
    return (
        <Layout>
            <div className="min-h-[80vh] flex justify-center items-center">
                <div className="w-[40%] mt-5 p-4 mb-10 rounded-xl bg-white  mx-auto">
                    <div className="flex items-center gap-4 border-b-2">
                        {tabs.map((tab, idx) => (
                            <button onClick={() => setSelect(idx)} className={`font-bold text-sm border-b-2 pb-2 px-3 ${select === idx ? "text-int border-int" : "text-neutral-800 border-transparent"}`} key={idx}>{tab}</button>
                        ))}
                    </div>

                    <Toman />
                </div>
            </div>
        </Layout>
    )
}

export default Buy
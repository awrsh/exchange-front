import { useState } from "react"
import Layout from "../componets/common/Layout"
import useSetTitleDocument from "../hook/common/useSetTitleDocument"
import Sell from "../componets/buy/Sell"
import Buy from "../componets/buy/Buy"


const BuyPage = () => {
    useSetTitleDocument({ title: "خرید و فروش" })
    const [select, setSelect] = useState(0)
    const tabs = ["تومانIRT"]
    const tabs_items = ["خرید", "فروش"]

    return (
        <Layout>
            <div className="min-h-[80vh] flex justify-center items-center">
                <div className="w-[95%] lg:w-[40%] mt-5 p-4 mb-10 rounded-xl bg-white bg-dark  mx-auto">
                    <div className="flex items-center gap-4 border-b-2">
                        {tabs.map((tab, idx) => (
                            <button className={`font-bold text-sm border-b-2 pb-2 px-3 ${select === idx ? "text-int border-int" : "text-neutral-800 dark:text-white border-transparent"}`} key={idx}>{tab}</button>
                        ))}
                    </div>
                    <div className='flex gap-5 mt-5'>
                        {tabs_items.map((tab, idx) => (
                            <button onClick={() => setSelect(idx)} className={`flex-1 transition-all duration-150 font-bold py-3 rounded-xl text-xs border ${select === idx ? ` text-white ${idx === 0 ? "bg-green-600" : "bg-red-500"}` : ""}`} key={idx}>{tab}</button>
                        ))}
                    </div>

                    {
                        select === 0 ? <Buy select={select}/> : null
                    }
                    {
                        select === 1 ? <Sell select={select}/> : null
                    }
                    {/* <Toman  /> */}
                </div>
            </div>
        </Layout>
    )
}

export default BuyPage
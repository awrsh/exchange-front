import { useState } from "react"

const Information = () => {
    const [select, setSelect] = useState(0)
    const tabs = ["تومان", "USDT", "BTC"]
    return (
        <div className="flex-1 w-full bg-white h-full rounded-xl p-3">
            <div className="border-b flex justify-between items-center pb-3 border-neutral-200">
                <div className="flex items-center  gap-2">
                    <img className="w-10 h-10 rounded-full" src="https://ffiri.ir/files/fa/news/1402/10/19/114275_457.jpg" />
                    <div className="space-y-2">
                        <p className="text-[14px]">آرش زرندی</p>
                        <p className="font-num text-[12px] text-neutral-600">09379291249</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-[14px] font-bold">احراز هویت</p>
                    <p className="font-regular text-center block bg-[#e5faf3] py-1 rounded-lg text-[#34b288]   text-[12px]">پیشرفته</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-2">
                <p className="flex-1">کارمزد معامله‌ها</p>
                <div className="flex-1 bg-[#f4f7fb] h-12 px-1 rounded-xl flex justify-between items-center">
                    {tabs.map((tab, idx) => (
                        <button onClick={() => setSelect(idx)} className={`text-center w-full h-10 rounded-xl text-[12px] transition-all duration-500 ${select === idx ? "bg-white" : ""}`} key={idx}>{tab}</button>
                    ))}
                </div>
            </div>
            <div className="bg-[#f4f7fb] mt-10 flex justify-between p-2 rounded-lg">
                <div className="space-y-5 flex flex-col justify-center items-center">
                    <p className="text-int text-[12px] font-bold">سطح کارمزد شما</p>
                    <p className="font-num text-[12px] bg-int rounded-lg text-white text-xs px-3 py-1">سطح  1</p>
                </div>
                <div className="space-y-5 flex flex-col justify-center items-center">
                    <p className="text-int text-[12px] font-bold">ثابت</p>
                    <p className="font-num text-[12px] text-zinc-900">0.35 %</p>
                </div>
            </div>
            <div className="flex items-center font-num  justify-between mt-2">
                <p className="text-[14px]">حجم معاملات 30 روزه شما</p>
                <p className="text-[12px]">0.000</p>
            </div>
            <p className="text-zinc-900 text-[12px] mt-6 font-regular">سطح کارمزد معاملات بر اساس حجم معامله‌های 30 روز گذشته شما در هر پایه بازار محاسبه می‌شود.</p>
        </div>
    )
}

export default Information
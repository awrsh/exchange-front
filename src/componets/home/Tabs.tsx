import { useState } from 'react'
import { RiErrorWarningLine } from "react-icons/ri";

const Tabs = () => {
    const [select] = useState(0)
    const tabs = ["قیمت ثابت", "فوری", "مدیریت ضرر"]
    return (
        <div className='p-4'>
            <div className='flex relative items-center gap-5 border-b-2'>
                {tabs.map((tab, idx) => (
                    <button className={`font-bold text-xs pb-2 border-b-2 ${select === idx ? "text-green-600 border-green-600" : "text-neutral-800 dark:text-stone-500 border-transparent"}`} key={idx}>{tab}</button>
                ))}
                <RiErrorWarningLine size={18}  className="absolute left-0 text-neutral-800" />
            </div>
        </div>
    )
}

export default Tabs
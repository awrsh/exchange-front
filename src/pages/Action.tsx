import DepositRial from "../componets/action/DepositRial"
import WithdrawRials from "../componets/action/WithdrawRials"
import Layout from "../componets/common/Layout"
import { IoCheckmarkDone } from "react-icons/io5";

import { useEffect, useState } from "react"
import WithdrawalCurrency from "../componets/action/WithdrawalCurrency";
import DepositCurrency from "../componets/action/DepositCurrency";
import InternalTransfer from "../componets/action/InternalTransfer";
import { useSearchParams } from "react-router-dom";

const Action = () => {
    const [select, setSelect] = useState(0)
    const tabs = ["واریز تومانی", "برداشت تومانی", "واریز ارزی", "برداشت ارزی", "انتقال داخلی"]
    const [searchParams] = useSearchParams()
    useEffect(() => {
        if (searchParams.get("select")) {
            setSelect(Number(searchParams.get("select")))
        }
    }, [searchParams])
    return (
        <Layout>
            <div className="layout">
                <h1>واریز برداشت ریالی</h1>
                <div className="mt-10 bg-white rounded-xl p-4 flex flex-col lg:flex-row gap-14">
                    <div className="!flex-1 lg:!w-1/2">
                        <div className="flex items-center whitespace-nowrap overflow-auto gap-2 lg:gap-4 mt-4">
                            {
                                tabs.map((name, idx) => (
                                    <button onClick={() => setSelect(idx)} className={` w-[140px] transition-all text-[12px] rounded-xl p-3 ${select === idx ? "bg-int text-white" : "bg-gray-100"}`} key={idx}>{name}</button>
                                ))
                            }
                        </div>
                        {
                            select === 0 ? <DepositRial /> : null
                        }
                        {
                            select === 1 ? <WithdrawRials /> : null
                        }
                        {
                            select === 2 ? <DepositCurrency /> : null
                        }
                        {
                            select === 3 ? <WithdrawalCurrency /> : null
                        }
                        {
                            select === 4 ? <InternalTransfer /> : null
                        }
                    </div>
                    <div className="!flex-1 lg:!w-1/2 flex-col  mt-16 p-4 rounded-xl border">
                        <h1 className="text-center pt-4 font-bold">نکاتی که باید توجه داشته باشید</h1>
                        <div className="mt-10 flex flex-col gap-5">
                            <div className="flex items-start gap-4">
                                <IoCheckmarkDone className="min-w-[20px] min-h-[20px] text-green-500" />
                                <p className="text-xs leading-7 text-center text-gray-500">طبق ابلاغیه جدید بانک مرکزی سقف واریز روزانه در تمامی صرافی ها برای هر کاربر 25 میلیون تومان می باشد. در صورتی که قصد واریز مبلغی بیش از  <span className="text-red-500"> میلیون تومان 25 </span>  در روز را داریداز طریق گزینه واریز با شناسه درخواست خود را ثبت نمایید</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <IoCheckmarkDone className="min-w-[20px] min-h-[20px] text-green-500" />
                                <p className="text-xs leading-7 text-center text-gray-500">
                                    در صورت پرداخت از کارتی که آن را ثبت نکرده اید مبلغ واریزی تا ثبت آن کارت بانکی در حساب شما شارژ نخواهد شد. قبل از پرداخت می بایست کارت بانکی خود را در سایت ثبت نمایید ٬ توجه داشته باشید کارت بانکی باید به نام خودتان باشد.
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <IoCheckmarkDone className="min-w-[20px] min-h-[20px] text-green-500" />
                                <p className="text-xs w-full leading-7 text-center text-gray-500">
                                    توجه داشته باشید مبلغ واریزی به تومان می باشد .
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <IoCheckmarkDone className="min-w-[20px] min-h-[20px] text-green-500" />
                                <p className="text-xs leading-7 text-center text-gray-500">
                                    بعد از پرداخت آنلاین در صورت موفق بودن ٬ مبلغ پرداختی به موجودی تومانی شما اضافه خواهد شد. در صورت مشاهده هر گونه خطا برای گزارش آن از چت آنلاین و یا تیکت استفاده نمایید .
                                </p>
                            </div>
                        </div>
                        <h1 className="text-center pt-7 font-bold">روال تسویه حساب و برداشتهای ریالی</h1>
                        <div className="mt-6">
                            <div className="flex items-start gap-4">
                                <IoCheckmarkDone className="min-w-[20px] min-h-[20px] text-green-500" />
                                <p className="text-xs leading-7 text-center text-gray-500">
                                    برداشت ریالی در بیت‌آسیا ، به مقصد همه بانک ها بر اساس سیکل پایا خواهد بود. کارمزد برداشت ریالی مربوط به سیستم بانکی بوده و توسط سیستم پرداخت یار گرفته می شود و سایت بیت‌آسیا در آن ذینفع نیست.
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <IoCheckmarkDone className="min-w-[20px] min-h-[20px] text-green-500" />
                                <p className="text-xs leading-7 text-center text-gray-500">
                                    کارمزد برداشت های ریالی <span className="text-red-500"> 0.03٪</span> از مبلغ هر درخواست است. لازم به ذکر است که حداقل کارمزد برداشت های ریالی هزار تومان و حداکثر آن ۱۰ هزار تومان است.                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <IoCheckmarkDone className="min-w-[20px] min-h-[20px] text-green-500" />
                                <p className="text-xs leading-7 text-center text-gray-500">
                                    واریز ریالی به بیت‌آسیا <span className="text-red-500">بدون کارمزد</span>
                                    برای کاربران عزیز انجام می گردد
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Action
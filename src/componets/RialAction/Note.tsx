import { IoCheckmarkDone } from "react-icons/io5";

const Note = () => {
    return (
        <div className="flex-[1.7] p-3 border rounded-lg">
            <div>
                <h3 className="text-center font-extrabold text-neutral-800">نکاتی که باید توجه داشته باشید</h3>
                <ul className="mt-5 space-y-3">
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">طبق ابلاغیه جدید بانک مرکزی سقف واریز روزانه در تمامی صرافی ها برای هر کاربر ۲۵ میلیون تومان می باشد.</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">در صورتی که قصد واریز مبلغی <span className="text-red-500">بیش از 25 میلیون تومان</span> در روز را داریداز طریق گزینه واریز با شناسه درخواست خود را ثبت نمایید .</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">در صورت پرداخت از کارتی که آن را ثبت نکرده اید مبلغ واریزی تا ثبت آن کارت بانکی در حساب شما شارژ نخواهد شد.</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">قبل از پرداخت می بایست کارت بانکی خود را در سایت ثبت نمایید ٬ توجه داشته باشید کارت بانکی باید به نام خودتان باشد.</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">توجه داشته باشید مبلغ واریزی به تومان می باشد .</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">بعد از پرداخت آنلاین در صورت موفق بودن ٬ مبلغ پرداختی به موجودی تومانی شما اضافه خواهد شد.</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">در صورت مشاهده هر گونه خطا برای گزارش آن از چت آنلاین و یا تیکت استفاده نمایید .</p>
                    </li>

                </ul>
            </div>
            <div className="mt-10">
                <h3 className="text-center font-extrabold text-neutral-800">روال تسویه حساب و برداشتهای ریالی</h3>
                <ul className="mt-5 space-y-3">
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">برداشت ریالی در بیت‌آسیا ، به مقصد همه بانک ها بر اساس سیکل پایا خواهد بود.</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">کارمزد برداشت ریالی مربوط به سیستم بانکی بوده و توسط سیستم پرداخت یار گرفته می شود و سایت بیت‌آسیا در آن ذینفع نیست.</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">کارمزد برداشت های ریالی<span className="text-red-500"> 0.03٪</span> از مبلغ هر درخواست است. لازم به ذکر است که حداقل کارمزد برداشت های ریالی هزار تومان و حداکثر آن ۱۰ هزار تومان است.</p>
                    </li>
                    <li className="flex items-center">
                        <IoCheckmarkDone className="text-green-600" size={24} />
                        <p className="flex-1 text-[13px] text-neutral-500 text-center ">واریز ریالی به بیت‌آسیا <span  className="text-red-500">بدون کارمزد</span> برای کاربران عزیز انجام می گردد.</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Note
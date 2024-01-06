import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { CiCalendar } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import ChangePassword from "./ChangePassword";

const Information = () => {
    return (
        <div className="bg-white flex  flex-col rounded-xl p-3 h-[500px]">
                <p className="font-bold text-xl border-b border-neutral-200 pb-3">اطلاعات حساب</p>
            {/* image & fullname & change img */}
            <div className="flex items-center py-4 justify-between border-b border-neutral-200">
                <div className="flex items-center gap-2">
                    <img className="rounded-full w-14 h-14" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/The_Undertaker_US_Marine_Visit_2019_%28cropped%292.jpg/220px-The_Undertaker_US_Marine_Visit_2019_%28cropped%292.jpg" />
                    <div className="flex items-center flex-col">
                        <span className="font-bold text-[14px] text-neutral-600">مهدی رنجبر</span>
                        <div>
                            <label className="text-xs text-int font-regular" htmlFor="upload">تغیر تصویر</label>
                            <input type="file" id="upload" name="upload" className="opacity-0 absolute -z-0" />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-neutral-400 text-[14px]">سطح نقره‌ای</p>
                </div>
            </div>
            <div className="flex justify-around py-9 items-center border-b border-neutral-200 ">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="flex gap-1 items-center text-neutral-800">
                        <HiMiniDevicePhoneMobile  size={24}/>
                        <span className="font-bold text-[14px]">موبایل</span>
                    </div>
                    <span className="font-num text-[14px] text-neutral-500">09052549459</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="flex gap-1 items-center text-neutral-800">
                        <CiCalendar  size={22}/>
                        <span className="font-bold text-[14px]">تاریخ عضویت</span>
                    </div>
                    <span className="text-[14px] text-neutral-500 font-num">1403/01/02</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="flex gap-1 items-center text-neutral-800">
                        <FaRegCircleUser  size={18}/>
                        <span className="font-bold text-[14px]">وضعیت احراز</span>
                    </div>
                    <span className="text-[14px] text-neutral-500 font-num">احراز هویت نشده</span>
                </div>
            </div>
            <ChangePassword/>
        </div>
    )
}

export default Information
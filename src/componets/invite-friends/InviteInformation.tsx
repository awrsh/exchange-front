import { IoCopy } from "react-icons/io5";
import Button from "../common/Button";
import useAuthStore from "../../stores/user-store";

const InviteInformation = () => {
    const {user} = useAuthStore()
    return (
        <div className="bg-white bg-dark flex justify-between flex-col rounded-xl p-3">
            <div className="border-b border-int pb-5">
                <p className="font-bold text-xl">کسب درآمد میلیونی با دعوت دوستان به  بیت آسیا</p>
                <span className="font-regular text-[13px]  text-right w-full block mt-4">کد دعوت و یا لینک زیر را برای دوستان خود ارسال کنید و با تایید هویت تعداد هرچه بیشتر دوستانتان، مادام‌العمر تا 55درصد پاداش دریافت نمایید</span>
            </div>
            <div className="space-y-4 mt-3">
                <div className="flex items-center w-full text-neutral-400 justify-between bg-neutral-100 dark:bg-navyBlue p-3 rounded-lg">
                    <p className="font-bold text-[13px] dark:text-white">کد دعوت</p>
                    <p className="text-int font-num ">{user?.referral_code}</p>
                    <IoCopy />
                </div>
                <div className="flex items-center w-full text-neutral-400 justify-between bg-neutral-100 dark:bg-navyBlue  p-3 rounded-lg">
                    <p className="font-bold text-[13px]  dark:text-white">لینک دعوت</p>
                    <p className="text-int font-num text-[10px] lg:text-[14px]">www.bitasia.com/register?ref={user?.referral_code}</p>
                    <IoCopy />
                </div>
                <Button containerClass="!w-1/2 !mx-auto !bg-int" name="اشتراک گذاری"/>
            </div>
        </div>
    )
}

export default InviteInformation
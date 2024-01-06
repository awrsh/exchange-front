import Image from "../../assets/images/no-prefect.png"
import Button from "../common/Button"
const CompleteRegistration = () => {
    return (
        <div className="bg-blue-900 flex items-center mt-7 justify-between p-3 rounded-xl">
            <div className="flex items-center gap-2">
                <img className="w-20 h-20" src={Image} />
                <p className="text-white flx-1 font-light text-[14px]">احراز هویت شما تکمیل نیست جهت استفاده از تمامی امکانات صرافی احراز هویت خود را تکمیل نمایید</p>
            </div>
            <Button containerClass="!w-[130px] " name="تکمیل ثبت‌نام" />
        </div>
    )
}

export default CompleteRegistration
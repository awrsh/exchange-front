import { useFormik } from "formik"
import Input from "../common/Input"
import { RiErrorWarningLine } from "react-icons/ri";
import Button from "../common/Button";

const AddNewCard = () => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => { }
    })
    return (
        <div className="bg-white flex  flex-col rounded-xl p-3">
            <p className="font-bold text-xl border-b border-neutral-200 pb-3">افزودن کارت بانکی جدید</p>
            <div className="mt-5">
                <div>
                    <Input formik={formik} label="شماره کارت" />
                    <Input formik={formik} label="شماره شبا (بدون IR)" />

                    <p className="text-[13px] text-neutral-700 mt-4"><RiErrorWarningLine size={20} className="inline-block" /> توجه کنید که شماره کارت و شماره شبای وارد شده باید به نام شما باشد . در صورت وارد کردن شماره کارت شخص دیگری امکان پرداخت و افزایش وجه وجود نخواهد داشت .
                    </p>
                    <Button containerClass="!mt-8 !mx-auto w-[120px]" name="ثبت کارت بانکی"/>
                </div>
            </div>
        </div>
    )
}

export default AddNewCard
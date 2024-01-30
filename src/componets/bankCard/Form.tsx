import Input from '../common/Input'
import { FormikProps } from 'formik'
import { RiErrorWarningLine } from 'react-icons/ri'
type Props = {
    formik:FormikProps<any>
}
const Form = ({formik}:Props) => {
    return (
        <>

            <Input maxLength={16} ltr name="card_number" formik={formik} label="شماره کارت" />
            <Input maxLength={24} ltr name="iban" formik={formik} label="شماره شبا (بدون IR)" />

            <p className="text-[13px] text-neutral-700 mt-4"><RiErrorWarningLine size={20} className="inline-block" /> توجه کنید که شماره کارت و شماره شبای وارد شده باید به نام شما باشد . در صورت وارد کردن شماره کارت شخص دیگری امکان پرداخت و افزایش وجه وجود نخواهد داشت .
            </p>
        </>
    )
}

export default Form
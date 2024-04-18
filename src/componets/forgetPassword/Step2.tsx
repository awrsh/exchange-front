import { useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code"
import Button from "../common/Button";
import { useFormik } from "formik";
import Input from "../common/Input";
type Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}
const Step2 = ({ setStep }: Props) => {
    const [value, setValue] = useState("");

    const formik = useFormik({
        initialValues: {},
        onSubmit: () => { }
    })
    const onCompleted = (otp: string) => {
    }
    return (
        <div className="forgetPassword">
                <h1 className='text-center text-xl mb-3 font-bold py-3'>لطفا کد ارسال شده و رمز عبور خود را وارد کنید</h1>

            <ReactInputVerificationCode onCompleted={onCompleted} autoFocus onChange={(val) => setValue(val)} placeholder="" length={4} value={value} />
            <Input className="mt-4" name="" formik={formik} label="رمز عبور" />
            <Input name="" formik={formik} label="تکرار رمز عبور" />
            <Button onClick={() => setStep(2)} containerClass='!mt-10 !bg-int' name='ارسال' />
        </div>
    )
}

export default Step2
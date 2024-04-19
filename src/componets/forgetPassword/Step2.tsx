import { useEffect, useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code"
import Button from "../common/Button";
import { useFormik } from "formik";
import Input from "../common/Input";
import * as Yup from "yup"
import useForgetPasswordVerifyOtp from "../../hook/mutation/user/useForgetPasswordVerifyOtp";
import { GoEye, GoEyeClosed } from "react-icons/go";
type Props = {
    onClose: () => void;

    step: {
        value: number;
        info: string;
    }
}
const Step2 = ({ step, onClose }: Props) => {
    const { mutate, isLoading, isSuccess } = useForgetPasswordVerifyOtp()
    const [show, setShow] = useState("")
    const formik = useFormik({
        initialValues: {
            otp: "",
            password_1: "",
            password_2: "",
        },
        validationSchema: Yup.object({
            password_1: Yup.string().required("فیلد اجباری است"),
            otp: Yup.string().required("فیلد اجباری است"),
            password_2: Yup.string().required("فیلد اجباری است").matches(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"رمز عبور باید بیشتر از 6 رقم و ترکیبی از حرف انگلیسی باشد")
                .oneOf([Yup.ref('password_1'), null!], 'پسورد همسان نیست')
        }),
        onSubmit: (values) => {
            const data = {
                ...values,
                mobile: step.info
            }
            mutate(data)
        }
    })
    useEffect(() => {
        if (isSuccess) {
            onClose()
        }
    }, [isSuccess])
    return (
        <div className="forgetPassword">
            <h1 className='text-center text-xl mb-3 font-bold py-3'>لطفا کد ارسال شده و رمز عبور خود را وارد کنید</h1>
            <form onSubmit={formik.handleSubmit}>
                <ReactInputVerificationCode autoFocus onChange={(val) => formik.setFieldValue("otp", val)} placeholder="" length={5} value={formik.values.otp} />
                <Input icon_left={show === "password_1" ? <GoEye className="cursor-pointer text-gray-600" onClick={() => setShow("")} size={20} /> : <GoEyeClosed className="cursor-pointer text-gray-600" onClick={() => setShow("password_1")} size={20} />} type={show === "password_1" ? "text" : "password"} ltr className="mt-4" name="password_1" formik={formik} label="رمز عبور" />
                <Input icon_left={show === "password_2" ? <GoEye className="cursor-pointer text-gray-600" onClick={() => setShow("")} size={20} /> : <GoEyeClosed className="cursor-pointer text-gray-600" onClick={() => setShow("password_2")} size={20} />} type={show === "password_2" ? "text" : "password"} ltr name="password_2" formik={formik} label="تکرار رمز عبور" />
                <Button isLoading={isLoading} type="submit" containerClass='!mt-10 !bg-int' name='ارسال' />
            </form>
        </div>
    )
}

export default Step2
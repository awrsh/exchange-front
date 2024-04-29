import { useFormik } from "formik"
import Input from "../common/Input"
import Button from "../common/Button"
import useResetPasswordMutation from "../../hook/mutation/user/useResetPasswordMutation"
import * as Yup from "yup"
import { useState } from "react"
import { GoEye, GoEyeClosed } from "react-icons/go"
const ChangePassword = () => {
    const [show,setShow] = useState("")
    const {mutate,isLoading} = useResetPasswordMutation()
    const formik = useFormik({
        initialValues: {
            old_password:"",
            password_1:"",
            password_2:""
        },
        validationSchema:Yup.object({
            old_password:Yup.string().required("فیلد اجباری است"),
            password_1:Yup.string().required("فیلد اجباری است").matches(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/,"رمز عبور باید بیشتر از 6 رقم و ترکیبی از حرف انگلیسی باشد"),
            password_2:Yup.string().required("فیلد اجباری است")
            .oneOf([Yup.ref('password_1'), null!], 'پسورد همسان نیست'),
        }),
        onSubmit: (values) => { 
            mutate(values)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit} className="mt-5">
            <div className="flex items-center gap-10">
                <Input icon_left={show === "old_password" ? <GoEye className="cursor-pointer text-gray-600" onClick={() => setShow("")} size={20} /> : <GoEyeClosed className="cursor-pointer text-gray-600" onClick={() => setShow("old_password")} size={20} />} type={show === "old_password" ? "text" : "password"} ltr formik={formik} name="old_password" label="رمزعبور فعلی" />
                <Input icon_left={show === "password_1" ? <GoEye className="cursor-pointer text-gray-600" onClick={() => setShow("")} size={20} /> : <GoEyeClosed className="cursor-pointer text-gray-600" onClick={() => setShow("password_1")} size={20} />} type={show === "password_1" ? "text" : "password"} ltr formik={formik} name="password_1" label="رمزعبور جدید" />
                <Input icon_left={show === "password_2" ? <GoEye className="cursor-pointer text-gray-600" onClick={() => setShow("")} size={20} /> : <GoEyeClosed className="cursor-pointer text-gray-600" onClick={() => setShow("password_2")} size={20} />} type={show === "password_2" ? "text" : "password"} ltr formik={formik} name="password_2" label="تکرار رمزعبور جدید" />
            </div>

            <Button type="submit" isLoading={isLoading}  containerClass="!w-[130px] !bg-int !mt-10 !mr-auto" name="ذخیره تغیرات" />
        </form>
    )
}

export default ChangePassword
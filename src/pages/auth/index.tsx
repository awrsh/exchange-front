import { useFormik } from "formik"
import Input from "../../componets/common/Input"
import Button from "../../componets/common/Button"
import { initialValuesLogin } from "../../helpers/utils/initialValues"
import { validationSchemaLogin } from "../../helpers/utils/validationSchema"
import Logo from "../../assets/images/logo.svg"
import Slide2 from "../../assets/images/Login-cuate.png"
import { Link } from "react-router-dom"
import useLoginMutation from "../../hook/mutation/auth/useLoginMutation"
import WithoutToken from "../../hoc/WithoutToken"
import ForgetPassword from "../../componets/common/ForgetPassword"
import { useState } from "react"
const Auth = () => {
    const [open, setOpen] = useState(false)
    const { mutate, isLoading } = useLoginMutation()
    const formik = useFormik({
        initialValues: initialValuesLogin,
        validationSchema: validationSchemaLogin,
        onSubmit: (values) => {
            mutate(values)
        }
    })
    return (
        <>
            <div className="flex  h-screen max-h-screen overflow-hidden">
                <div className="flex-1 h-full flex flex-col  justify-center ">
                    <div className="w-[90%] md:w-[80%] mx-auto">
                        <img src={Logo} alt="" className="w-60 h-60  mx-auto" />
                        <h1 className="font-extrabold text-2xl">با بهترین قیمت و سرعت بالا معامله کنید</h1>
                        <p className="font-bold pt-4 text-xl">
                            ورود  |  ثبت‌نام
                        </p>
                        <form onSubmit={formik.handleSubmit} className="mt-10">
                            <Input type="tel" ltr placeholder="لطفا شماره تلفن خود را وارد کنید" formik={formik} name="mobile" label="شماره تلفن" />
                            <Input type="password" ltr placeholder="لطفا رمز عبور خود را وارد کنید" formik={formik} name="password" label="رمز عبور" />
                            <button type="button" onClick={() => setOpen(true)} className="text-xs text-blue-500">فرموشی رمز عبور</button>
                            <Button isLoading={isLoading} containerClass="!mt-7" name="ورود" />
                        </form>
                        <Link className="font-medium text-center block mt-4 text-xs" to={"/auth/register"} >تاکنون ثبت‌نام نکرده اید؟ <span className="font-bold underline text-int">ثبت نام</span></Link>
                    </div>
                </div>
                <div className="flex-1 hidden lg:flex bg-neutral-50 items-center justify-center">
                    <img className='object-cover  w-[70%] h-[70%] rounded-0' src={Slide2} alt='' />
                </div>
            </div>
            <ForgetPassword open={open} setOpen={setOpen} />
        </>
    )
}

export default WithoutToken()(Auth)
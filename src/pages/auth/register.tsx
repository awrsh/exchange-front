
import { FaArrowRight } from "react-icons/fa6"
import Slide2 from "../../assets/images/slide2.jpeg"
import { Link, useNavigate } from "react-router-dom"
import Input from "../../componets/common/Input"
import { useFormik } from "formik"
import { initialValuesRegister } from "../../helpers/utils/initialValues"
import Button from "../../componets/common/Button"
import { validationSchemaRegister } from "../../helpers/utils/validationSchema"
import useRegisterMutation from "../../hook/mutation/auth/useRegisterMutation"
import WithoutToken from "../../hoc/WithoutToken"

const Register = () => {
    const {mutate,isLoading} = useRegisterMutation()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: initialValuesRegister,
        validationSchema: validationSchemaRegister,
        onSubmit: (values) => { 
            mutate(values)
        }
    })
    return (
        <div className="flex h-screen max-h-screen">
            <div className="flex-1 p-4 h-full overflow-auto">
                <div
                    onClick={() => navigate(-1)}
                    className="h-12 cursor-pointer rounded-lg px-3 flex justify-center items-center bg-gray-50 hover:bg-gray-100"
                >
                    <FaArrowRight className="text-zinc-500" size={22} />
                    <p className="font-bold flex-1 text-center">ثبت‌ اطلاعات کاربری</p>
                </div>
                <form onSubmit={formik.handleSubmit} className="flex flex-col  lg:grid grid-cols-2 gap-x-4 mt-3">
                    <Input ltr className="!col-span-2" name="mobile" label="شماره موبایل" formik={formik} />
                    <Input placeholder="نام" required name="first_name" label="نام" formik={formik} />
                    <Input placeholder="لطفا نام‌خانوادگی خود را وارد کنید" required name="last_name" label="نام‌خانوادگی" formik={formik} />
                    <Input ltr type="password" placeholder="رمز عبور" required name="password" label="رمز عبور" formik={formik} />
                    <Input ltr type="password"  placeholder="تکرار رمز عبور" required name="passwordConfirmation" label="تکرار رمز عبور" formik={formik} />
                    <Button isLoading={isLoading} containerClass="col-span-2 !bg-int !mt-10" name="ثبت اطلاعات" />
                </form>
                <Link className="font-medium text-center block mt-4 text-xs" to={"/auth"} > قبلا ثبت‌نام کرده اید؟ <span className="font-bold underline text-int"> ورود</span></Link>

            </div>
            <div className="flex-1 hidden lg:flex bg-neutral-50">
                <img className='object-cover h-full w-full rounded-xl' src={Slide2} alt='' />
            </div>
        </div>
    )
}

export default WithoutToken()(Register) 
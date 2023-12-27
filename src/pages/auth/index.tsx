import { useFormik } from "formik"
import Input from "../../componets/common/Input"
import Button from "../../componets/common/Button"
import { initialValuesPhone } from "../../helpers/utils/initialValues"
import { validationSchemaPhone } from "../../helpers/utils/validationSchema"
import Logo from "../../assets/images/logo.webp"
import Slide2 from "../../assets/images/slide2.jpeg"
import { useNavigate } from "react-router-dom"
const Auth = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: initialValuesPhone,
        validationSchema: validationSchemaPhone,
        onSubmit: (values) => {
            navigate(`/auth/verify?phone=${values.phone}`)
        }
    })
    return (
        <div className="flex  h-screen max-h-screen overflow-hidden">
            <div className="flex-1 h-full flex flex-col mt-20 ">
                <div className="w-[90%] md:w-[80%] mx-auto">
                    <img src={Logo} alt="" className="w-32 h-32 mb-10 mx-auto" />
                    <h1 className="font-extrabold text-2xl">با بهترین قیمت و سرعت بالا معامله کنید</h1>
                    <p className="font-bold pt-4 text-xl">
                        ورود  |  ثبت‌نام
                    </p>
                    <form onSubmit={formik.handleSubmit} className="mt-10">
                        <Input type="tel" ltr placeholder="لطفا شماره تلفن خود را وارد کنید" formik={formik} name="phone" label="شماره تلفن" />
                        <Button containerClass="!mt-7" name="ورود" />
                    </form>
                </div>
            </div>
            <div className="flex-1 hidden lg:flex bg-neutral-50">
                <img className='object-cover h-full w-full rounded-xl' src={Slide2} alt='' />
            </div>
        </div>
    )
}

export default Auth
import { useFormik } from "formik"
import Input from "../../componets/common/Input"
import Button from "../../componets/common/Button"
import { initialValuesPhone } from "../../helpers/utils/initialValues"
import { validationSchemaPhone } from "../../helpers/utils/validationSchema"
import Logo from "../../assets/images/logo.webp"
import Slider from "../../componets/auth/Slider"
const Auth = () => {
    const formik = useFormik({
        initialValues: initialValuesPhone,
        validationSchema: validationSchemaPhone,
        onSubmit: () => {

        }
    })
    return (
        <div className="flex  h-screen ">
            <div className="flex-1 h-full flex flex-col mt-20 ">
                <div className="w-[80%] mx-auto">
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
            <div className="flex-1 hidden lg:flex max-w-full  justify-center items-center overflow-hidden bg-neutral-50">
                <div className="w-[80%] mx-auto">
                    <p className="font-extrabold my-10 text-2xl text-zinc-900 txet-2xl">خرید آسان</p>
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Auth
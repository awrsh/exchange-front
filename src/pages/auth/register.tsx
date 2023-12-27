
import { FaArrowRight } from "react-icons/fa6"
import Slide2 from "../../assets/images/slide2.jpeg"
import { useNavigate, useSearchParams } from "react-router-dom"
import Input from "../../componets/common/Input"
import { useFormik } from "formik"
import Datepicker from "../../componets/common/Datepicker"
import CustomUploadImage from "../../componets/common/CustomUploadImage"
import { Checkbox, FormControlLabel } from "@mui/material"
import { Empty_icon_checkbox, Fill_icon_checkbox } from "../../componets/common/icon"
import Button from "../../componets/common/Button"

const Register = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const formik = useFormik({
        initialValues: {
            phone:searchParams.get("phone")
        },
        onSubmit: () => { }
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
                <form className="flex flex-col  lg:grid grid-cols-2 gap-x-4 mt-3">
                    <Input disabled className="!col-span-2" name="phone" label="شماره موبایل" formik={formik} />
                    <Input placeholder="لطفا نام خود را وارد کنید" required name="" label="نام" formik={formik} />
                    <Input placeholder="لطفا نام‌خانوادگی خود را وارد کنید" required name="" label="نام‌خانوادگی" formik={formik} />
                    <Input placeholder="example@gmail.com" required name="" label="ایمیل" formik={formik} />
                    <Input placeholder="لطفا کد ملی خود را وارد کنید" required name="" label="کد ملی" formik={formik} />
                    <Input placeholder="لطفا نام پدر خود را وارد کنید" required name="" label="نام پدر" formik={formik} />
                    <Datepicker formik={formik} name="" required />
                    <CustomUploadImage title="شناسنامه یا کارت ملی" containerClass="max-h-[220px]" accept=".png, .jpeg, .jpg" formik={formik} name="image1" />
                    <CustomUploadImage className="mt-3 lg:mt-0" title="کارت بانکی" containerClass="max-h-[220px]" accept=".png, .jpeg, .jpg" formik={formik} name="image2" />
                    <CustomUploadImage className="col-span-2 mt-3" title="پاسپورت یا گواهینامه یا پایان خدمت" containerClass="max-h-[220px]" accept=".png, .jpeg, .jpg" formik={formik} name="image3" />
                    <FormControlLabel
                    className="mt-5 col-span-2 !mr-0"
                        control={<Checkbox icon={<Empty_icon_checkbox />}
                            checkedIcon={<Fill_icon_checkbox />}
                            className="!p-0" />}
                        label={<span className="font-medium text-xs block mx-1">شرایط و قوانین سایت را می پذیرم</span>} />

                        <Button containerClass="col-span-2 !mt-10" name="ثبت اطلاعات"/>
                </form>
            </div>
            <div className="flex-1 hidden lg:flex bg-neutral-50">
                <img className='object-cover h-full w-full rounded-xl' src={Slide2} alt='' />
            </div>
        </div>
    )
}

export default Register
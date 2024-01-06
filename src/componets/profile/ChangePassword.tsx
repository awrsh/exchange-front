import { useFormik } from "formik"
import Input from "../common/Input"
import Button from "../common/Button"

const ChangePassword = () => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => { }
    })
    return (
        <div className="mt-5">
            <div className="flex items-center gap-10">
                <Input formik={formik} name="" label="پسورد فعلی" />
                <Input formik={formik} name="" label="پسورد جدید" />
            </div>

            <Button containerClass="!w-[130px] !mt-10 !mr-auto" name="ذخیره تغیرات" />
        </div>
    )
}

export default ChangePassword
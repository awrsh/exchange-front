import { useFormik } from "formik"
import Select from "../common/Select"
import Input from "../common/Input"
import Button from "../common/Button"

const FastBuyingSelling = () => {
    const formik = useFormik({
        initialValues:{},
        onSubmit:()=>{}
    })
  return (
    <div className="bg-white p-3 rounded-xl space-y-10 flex-1 h-full">
        <h6 className="font-bold">خرید و فروش سریع</h6>
        <Select formik={formik} placeholder="انتخاب ارز مورد نظر" name="a" options={[]}/>
        <Input formik={formik} name="b" subLabel="تومان" placeholder="مقدار بین 1 تا 20 میلیون"/>
        <div className="flex items-center justify-between gap-10">
            <Button name="خرید"/>
            <Button containerClass="!bg-red-500" name="فروش"/>
        </div>
    </div>
  )
}

export default FastBuyingSelling
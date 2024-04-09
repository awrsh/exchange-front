import { useFormik } from "formik"
import Select from "../common/Select"
import Input from "../common/Input"
import Button from "../common/Button"

const WithdrawalCurrency = () => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => { }
    })
    return (
        <div className="p-2 mt-7">
            <div className="flex flex-col gap-3">
                <div className="flex  gap-2">
                    <span className="min-w-3 min-h-3 mt-1 max-w-3 max-h-3 bg-green-600 block rounded-lg"></span>
                    <span className="text-xs font-bold">کارمزدهای معمول انتقال از مبلغ برداشت کسر خواهد شد</span>
                </div>
                <div className="flex gap-2">
                    <span className="min-w-3 min-h-3 max-w-3 mt-1 max-h-3 bg-green-600 block rounded-lg"></span>
                    <span className="text-xs font-bold">در صورتی که آدرس مقصد متعلق به کاربران بیت آسیا می باشد، انتقال به صورت مستقیم و آنی صورت میگیرد و کارمزد انتقالی وجود نخواهد داشت</span>
                </div>
            </div>

            {/* networks */}
            <form className="mt-7 space-y-1" onSubmit={formik.handleSubmit}>
                <Select formik={formik} label="انتخاب شبکه" name="" options={[]} />
                <Input className="!mt-3" formik={formik} label={`میزان برداشت (tether)`} name="" />
                <Input formik={formik} label={`آدرس کیف پول مقصد`} name="" />
                <div className="space-y-4 bg-[#fff3d5] p-4 rounded-lg !mt-6">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-[14px] text-gray-900">میزان برداشت</p>
                        <p className="text-[12px] text-gray-900">0 BTC</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-[14px] text-gray-900">کارمزد</p>
                        <p className="text-[12px] text-gray-900">0 BTC</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-[14px] text-gray-900">دریافتی شما</p>
                        <p className="text-[12px] text-gray-900">0 BTC</p>
                    </div>
                </div>
                <Button type="submit" containerClass="!mt-16 !bg-int" name="برداشت"/>
            </form>

        </div>
    )
}

export default WithdrawalCurrency
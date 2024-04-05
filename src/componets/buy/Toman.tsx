import { useState } from 'react'
import Select from '../common/Select'
import { useFormik } from 'formik'
import Input from '../common/Input'
import CustomSlider from '../common/CustomSlider'
import Button from '../common/Button'
import useAuthStore from '../../stores/user-store'
import useGlobalStore from '../../stores/global-store'
import useGetCuurencyListQuery from '../../hook/query/currency/useGetCuurencyListQuery'


const Toman = () => {
    const { data, isLoading } = useGetCuurencyListQuery()
    const { toggleVerifyAuth } = useGlobalStore()
    const { user } = useAuthStore()
    const tabs = ["خرید", "فروش"]
    const [select, setSelect] = useState(0)
    const formik = useFormik<any>({
        initialValues: {
            crypto: null,
            count: null
        },
        onSubmit: () => { }
    })



    const onClick = () => {
        if (user?.authentication_status === "level_0") {
            toggleVerifyAuth()
        }
    }



    const formatOptionLabel = ({ title, image }: any) => {
        return <div className='flex items-center gap-2'>
            {
                image &&
                <img className='w-6 h-6 rounded-full' src={image} />
            }
            <span className='text-xs font-bold'>{title}</span>
        </div>
    }

    return (
        <div className='mt-3'>
            <div className='flex gap-5 mt-5'>
                {tabs.map((tab, idx) => (
                    <button onClick={() => setSelect(idx)} className={`flex-1 transition-all duration-150 font-bold py-3 rounded-xl text-xs border ${select === idx ? ` text-white ${idx === 0 ? "bg-int" : "bg-red-500"}` : ""}`} key={idx}>{tab}</button>
                ))}
            </div>
            <form className='mt-5'>
                <Select
                    isLoading={isLoading}
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.title}
                    formatOptionLabel={formatOptionLabel}
                    formik={formik}
                    name='crypto'
                    options={data?.objects!}
                    label='لطفا رمز ارز خود را انتخاب کنید'
                />

                <Input
                    isOnChange
                    disabled
                    className='mt-5'
                    name=''
                    label='مبلغ کل (تومان)'
                    formik={formik}
                    subLabel='همه'
                    value={formik.values.crypto?.price && formik.values?.count?formik.values.crypto.price:""}
                />
                <Input
                    isOnChange
                    disabled
                    className='mt-5'
                    name=''
                    label='موجودی شما'
                    formik={formik}
                    value={user?.total_ir_balance}
                    subLabel='تومان'
                />
                <Input
                    className='mt-2'
                    name='count'
                    label={`مقدار ${formik.values?.crypto?.title ? `(${formik.values?.crypto?.title_fa})` : ""}`}
                    formik={formik}
                />


                <CustomSlider />

                <div className='flex items-center justify-between p-3 rounded-xl bg-[#f5f5f5] dark:bg-slate-300'>
                    <p className='font-bold text-neutral-800'>مجموع </p>
                    <p className='font-bold text-zinc-400'>BTC <span className='font-num font-extrabold mx-3 text-neutral-800'>2,000,000</span></p>
                </div>

                <div className='flex items-center justify-between p-3 my-5 rounded-xl bg-[#f5f5f5] dark:bg-slate-300'>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800'>مبلغ‌کل</p>
                        <p className='font-num'>0</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800'>کارمزد</p>
                        <p className='font-num'>0</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800'>دریافتی‌شما</p>
                        <p className='font-num'>0</p>
                    </div>
                </div>
                <Button onClick={onClick} name={select === 0 ? "خرید" : "فروش"} />
            </form>
        </div>
    )
}

export default Toman
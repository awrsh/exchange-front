import { useEffect } from 'react'
import Select from '../common/Select'
import { useFormik } from 'formik'
import Input from '../common/Input'
import CustomSlider from '../common/CustomSlider'
import Button from '../common/Button'
import useAuthStore from '../../stores/user-store'
import useGlobalStore from '../../stores/global-store'
import useGetCuurencyListQuery from '../../hook/query/currency/useGetCuurencyListQuery'
import useOrderMutation from '../../hook/mutation/order/useOrderMutation'


const Buy = ({select}:{select:number}) => {
    const { data, isLoading } = useGetCuurencyListQuery()
    const { toggleVerifyAuth } = useGlobalStore()
    const { mutate, isLoading: loadingOrder, isSuccess } = useOrderMutation()
    const { user } = useAuthStore()
    const formik = useFormik<any>({
        initialValues: {
            crypto: null,
            amount: null,
            slider: null
        },
        onSubmit: (values) => {
            const data = {
                type: select === 0 ? "buy" : "sell",
                currency_id: Number(values?.crypto?.id),
                amount: Number(values.amount)
            }
            mutate(data)
        }
    })



    const onClick = () => {
        if (user?.authentication_status === "level_0") {
            toggleVerifyAuth()
        }
    }



    const formatOptionLabel = ({ title, image, price_info_price }: any) => {
        return <div className='flex items-center gap-2'>
            {
                image &&
                <img className='w-6 h-6 rounded-full' src={image} />
            }
            <div className='flex items-center gap-2'>
                <span className='text-xs font-bold'>{title}</span>
                <span className='text-[11px] pt-1 font-num'>{Number(price_info_price).toLocaleString()} تومان</span>
            </div>
        </div>
    }

    const total = user?.wallets.find((crypto) => crypto.currency_id.code === "IRT")

    const onClickSubLabel = () => {
        formik.setFieldValue("price", total?.balance)
        const amount = Number(total?.balance) / Number(formik.values?.crypto?.price_info_price)
        formik.setFieldValue("amount", amount ? amount.toFixed(2) : 0)
    }

    const onChangeAmount = (e: any) => {
        const price = e.target.value * Number(formik.values?.crypto?.price_info_price)
        formik.setFieldValue("amount", e.target.value)
        formik.setFieldValue("price", price)
    }
    const onChnagePrice = (e: any) => {
        const amount = e.target.value / Number(formik.values?.crypto?.price_info_price)
        formik.setFieldValue("price", e.target.value)
        formik.setFieldValue("amount", amount ? amount.toFixed(2) : 0)
    }

    const onChangeSlider = (_: any, value: number) => {
        const precent = Number(value) / 100
        formik.setFieldValue("price", precent * Number(total?.balance))
        formik.setFieldValue("slider", value)
    }

    useEffect(() => {
        if (isSuccess) {
            formik.resetForm()
        }
    }, [isSuccess])
    return (
        <div className='mt-3'>
      
            <form onSubmit={formik.handleSubmit} className='mt-5'>
                <Select
                    isLoading={isLoading}
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.title}
                    formatOptionLabel={formatOptionLabel}
                    formik={formik}
                    name='crypto'
                    options={select === 0? data?.objects! : []}
                    label='لطفا رمز ارز خود را انتخاب کنید'
                    isSearchable
                />

                <Input
                    className='mt-3'
                    name='price'
                    label='مبلغ خود را وارد کنید'
                    formik={formik}
                    type='number'
                    subLabel='همه'
                    onChange={onChnagePrice}
                    isOnChange
                    value={formik.values.price}
                    onClickSubLabel={onClickSubLabel}
                    disabled={!formik?.values?.crypto}
                />
                <Input
                    isOnChange
                    disabled
                    name=''
                    label='موجودی شما'
                    formik={formik}
                    value={total?.balance ? Number(total?.balance).toLocaleString() : ""}
                    subLabel='تومان'
                />
                <Input
                    isOnChange
                    name='amount'
                    label={`مقدار ${formik.values?.crypto?.title ? `(${formik.values?.crypto?.title_fa})` : ""}`}
                    formik={formik}
                    onChange={onChangeAmount}
                    value={formik?.values?.amount}
                    disabled={!formik?.values?.crypto}
                />


                <CustomSlider disabled={!formik?.values?.crypto} value={formik.values.slider} onChange={onChangeSlider} />

                {/* <div className='flex items-center justify-between p-3 rounded-xl bg-[#f5f5f5] dark:bg-slate-300'>
                    <p className='font-bold text-neutral-800'>مجموع </p>
                    <p className='font-bold text-zinc-400'>BTC <span className='font-num font-extrabold mx-3 text-neutral-800'>2,000,000</span></p>
                </div> */}

                <div className='flex items-center justify-between p-3 my-5 rounded-xl bg-[#f5f5f5] dark:bg-slate-300'>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800'>مبلغ‌کل</p>
                        <p className='font-num'>{formik?.values?.price ? Number(formik?.values?.price).toLocaleString() : null}</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800'>کارمزد</p>
                        <p className='font-num'>{Number(10000).toLocaleString()}</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800'>دریافتی‌شما</p>
                        <p className='font-num'>{formik?.values?.price ? Number(formik?.values?.price - 10000).toLocaleString() : ""}</p>
                    </div>
                </div>
                <Button containerClass='!bg-[#23DCCE]' disabled={loadingOrder} onClick={onClick} name={"خرید" } />
            </form>
        </div>
    )
}

export default Buy
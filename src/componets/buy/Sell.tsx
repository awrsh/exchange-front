import { useEffect } from 'react'
import Select from '../common/Select'
import { useFormik } from 'formik'
import Input from '../common/Input'
import CustomSlider from '../common/CustomSlider'
import Button from '../common/Button'
import useAuthStore from '../../stores/user-store'
import useGlobalStore from '../../stores/global-store'
import useOrderMutation from '../../hook/mutation/order/useOrderMutation'
import * as Yup from "yup"


const Sell = ({ select }: { select: number }) => {
    const { toggleVerifyAuth } = useGlobalStore()
    const { mutate, isLoading: loadingOrder, isSuccess } = useOrderMutation()
    const { user } = useAuthStore()
    const formik = useFormik<any>({
        initialValues: {
            crypto: null,
            amount: null,
            slider: null
        },
        validationSchema: Yup.object({
            crypto: Yup.object().required("فیلد اجباری"),
            amount: Yup.string().required("فیلد اجباری است")
        }),
        // @ts-ignore
        onSubmit: (values) => {
            // if (values.price < 300000) return errorToast(`مبلغ فروش نباید کمتر  از ${Number(300000).toLocaleString()} باشد`)
            const data = {
                type: select === 0 ? "buy" : "sell",
                currency_id: Number(values?.crypto?.currency_id.id),
                amount: Number(values.amount)
            }
            if (user?.authentication_status === "level_0") {
                return toggleVerifyAuth(true)
            }
            mutate(data)
        }
    })



    const formatOptionLabel = ({ currency_id }: any) => {
        return <div className='flex items-center gap-2'>
            {
                currency_id.image &&
                <img className='w-6 h-6 rounded-full' src={currency_id.image} />
            }
            <div className='flex items-center gap-2'>
                <span className='text-xs font-bold'>{currency_id.title}</span>
                <span className='text-[11px] pt-1 font-num'>{Number(currency_id.price).toLocaleString()} تومان</span>
            </div>
        </div>
    }
    // @ts-ignore
    const total = user?.wallets.find((crypto) => crypto.currency_id.code === formik?.values.crypto?.currency_id.code)
    console.log("total" , total);

    const onClickSubLabel = () => {
        formik.setFieldValue("price", Number(total?.balance) * Number(total?.currency_id.price))

        const amount = Number(total?.balance) / Number(formik.values?.crypto?.currency_id.price)
        formik.setFieldValue("amount", amount ? total?.balance : 0)
        formik.setFieldValue("slider", 0)
    }

    const onChangeAmount = (e: any) => {
        if (formik.values.amount > Number(total?.balance)) return

        formik.setFieldValue("slider", 0)
        const price = e.target.value * Number(formik.values?.crypto?.currency_id.price)
        formik.setFieldValue("amount", e.target.value)
        formik.setFieldValue("price", price)
    }
    const onChnagePrice = (e: any) => {
        if (formik.values.amount > Number(total?.balance)) return
        const amount = e.target.value / Number(formik.values?.crypto?.currency_id.price)
        formik.setFieldValue("price", e.target.value)
        formik.setFieldValue("slider", 0)
        formik.setFieldValue("amount", amount ? amount.toFixed(8) : 0)
    }

    const onChangeSlider = (_: any, value: number) => {
        if (formik.values.amount > Number(total?.balance)) return
        const precent = Number(value) / 100
        const amount = precent * Number(total?.balance)
        formik.setFieldValue("amount", amount)
        formik.setFieldValue("price", amount * Number(formik.values.crypto.currency_id.price))
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
                    getOptionLabel={(option) => option.currency_id.title}
                    getOptionValue={(option) => option.currency_id.title}
                    formatOptionLabel={formatOptionLabel}
                    formik={formik}
                    name='crypto'
                    options={user?.wallets.filter((option: any) => option.currency_id.code !== "IRT")!}
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
                    className='mt-3'

                    isOnChange
                    disabled
                    name=''
                    label='موجودی کیف پول'
                    formik={formik}
                    value={total?.balance ? Number(total?.balance).toLocaleString() : 0}
                    subLabel='تومان'
                />
                <Input
                    className='mt-3'
                    isOnChange
                    name='amount'
                    label={`مقدار ${formik.values?.crypto?.title ? `(${formik.values?.crypto?.title_fa})` : ""}`}
                    formik={formik}
                    onChange={onChangeAmount}
                    value={formik?.values?.amount}
                    disabled={!formik?.values?.crypto}
                />


                <CustomSlider disabled={!formik?.values?.crypto} value={formik.values.slider} onChange={onChangeSlider} />

                {/* <div className='flex items-center justify-between p-3 rounded-xl bg-[#f5f5f5] dark:bg-block'>
                    <p className='font-bold text-neutral-800'>مجموع </p>
                    <p className='font-bold text-zinc-400'>BTC <span className='font-num font-extrabold mx-3 text-neutral-800'>2,000,000</span></p>
                </div> */}

                <div className='flex items-start justify-between p-3 my-5 rounded-xl bg-[#f5f5f5] dark:bg-navyBlue'>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800 dark:text-white'>مبلغ‌کل</p>
                        <p className='font-num'>{formik?.values?.price ? Number(formik?.values?.price).toLocaleString() : null}</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800 dark:text-white'>کارمزد</p>
                        <p className='font-num dark:text-white'>{Number(10000).toLocaleString()}</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800 dark:text-white'>دریافتی‌شما</p>
                        <p className='font-num dark:text-white'>{formik?.values?.price ? Number(formik?.values?.price - 10000).toFixed(8).toLocaleString() : ""}</p>
                    </div>
                </div>
                <Button containerClass="!bg-red-500" isLoading={loadingOrder} name={select === 0 ? "خرید" : "فروش"} />
            </form>
        </div>
    )
}

export default Sell
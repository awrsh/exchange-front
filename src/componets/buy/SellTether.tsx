import { useEffect, useState } from 'react'
import Select from '../common/Select'
import { useFormik } from 'formik'
import Input from '../common/Input'
import CustomSlider from '../common/CustomSlider'
import Button from '../common/Button'
import useAuthStore from '../../stores/user-store'
import useGlobalStore from '../../stores/global-store'
import * as Yup from "yup"
import { addCommas, removeNonNumeric } from '../../helpers/utils/fun'
import Verify from './Verify'
import useCalculateBuySellCommission from '../../hook/mutation/calculate/useCalculateBuySellCommission'


const SellTether = ({ select }: { select: number }) => {
    const { mutate, data: calculateData, isSuccess, reset } = useCalculateBuySellCommission()
    const [modal, setModal] = useState<any>({
        open: false,
        info: null
    })
    const { toggleVerifyAuth } = useGlobalStore()
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
            if (user?.authentication_status === "level_0") {
                return toggleVerifyAuth(true)
            }
            reset()
            formik.resetForm()
            setModal({
                open: true,
                info: {
                    type: select === 0 ? "buy" : "sell",
                    price: Number(removeNonNumeric(values.price)),
                    amount: values.amount,
                    crypto: values.crypto.currency_id,
                }
            })
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

    // all balance
    const onClickSubLabel = () => {
        formik.setFieldValue("amount", "")
        mutate({
            amount: Number(total?.balance).toFixed(0),
            base_currency_code: "USDT",
            currency_code: formik.values.crypto.currency_id.code,
            type: "sell",
        })
        formik.setFieldValue("price", addCommas(Number(total?.balance).toFixed(0)!))
    }


    const onChangeAmount = (e: any) => {
        const price = Number(e.target.value) * Number(formik.values?.crypto?.price)
        if (price > Number(Number(total?.balance).toFixed(0))) return
        formik.setFieldValue("price", "")
        mutate({
            amount: e.target.value,
            base_currency_code: "USDT",
            currency_code: formik.values.crypto.currency_id.code,
            type: "sell",
        })
        formik.setFieldValue("amount", e.target.value)

    }
    const onChnagePrice = (e: any) => {
        mutate({
            cost: removeNonNumeric(e.target.value),
            base_currency_code: "USDT",
            currency_code: formik.values.crypto.currency_id.code,
            type: "sell",
        })
        formik.setFieldValue("price", addCommas(removeNonNumeric(e.target.value)))
        formik.setFieldValue("amount", "")
    }

    useEffect(() => {
        if (isSuccess) {
            formik.setFieldValue("amount", calculateData.amount)
            formik.setFieldValue("price", addCommas(calculateData.cost))
        }
    }, [isSuccess])

    const onChangeSlider = (_: any, value: number) => {
        const precent = Number(value) / 100
        const amount = Number(precent * Number(total?.balance)).toFixed(8)
        mutate({
            amount: amount.toString(),
            base_currency_code: "USDT",
            currency_code: formik.values.crypto.currency_id.code,
            type: "sell",
        })
       
        formik.setFieldValue("slider", value)
    }

    return (
        <div className='mt-3'>

            <form onSubmit={formik.handleSubmit} className='mt-5'>
                <Select
                    getOptionLabel={(option) => option.currency_id.title}
                    getOptionValue={(option) => option.currency_id.title}
                    formatOptionLabel={formatOptionLabel}
                    formik={formik}
                    name='crypto'
                    options={user?.wallets.filter((option: any) => option.currency_id.code !== "USDT")!}
                    label='لطفا رمز ارز خود را انتخاب کنید'
                    isSearchable
                />
                <Input
                    className='mt-3'
                    name='amount'
                    label={`مقدار ${formik.values?.crypto?.title ? `(${formik.values?.crypto?.title_fa})` : ""}`}
                    formik={formik}
                    onChange={onChangeAmount}
                    value={formik?.values?.amount}
                    disabled={!formik?.values?.crypto}
                    subLabel='همه'
                    onClickSubLabel={onClickSubLabel}
                    isOnChange
                />

                <Input
                    className='mt-3'
                    isOnChange
                    disabled
                    name=''
                    label='موجودی کیف پول'
                    formik={formik}
                    value={total?.balance ? Number(total?.balance).toLocaleString() : 0}
                    subLabel='عدد'
                />


                <Input
                    className='mt-3'
                    name='price'
                    label='مبلغ خود را وارد کنید'
                    formik={formik}
                    isOnChange
                    onChange={onChnagePrice}
                    value={formik.values.price}
                    disabled={!formik?.values?.crypto}
                />
                <CustomSlider color='red' disabled={!formik?.values?.crypto} value={formik.values.slider} onChange={onChangeSlider} />


                <div className='flex items-start justify-between p-3 my-5 rounded-xl bg-[#f5f5f5] dark:bg-navyBlue '>
                    <div className='flex flex-col items-center gap-3'>
                        <p className='font-extrabold text-neutral-800 dark:text-white'>مبلغ‌کل</p>
                        <p className='font-num dark:text-white'>{calculateData?.cost.toLocaleString()}</p>
                    </div>
                    <div className='flex flex-col items-center gap-3 '>
                        <p className='font-extrabold text-neutral-800 dark:text-white'>کارمزد</p>
                        <p className='font-num dark:text-white'>{calculateData?.commission}</p>
                    </div>
                    <div className='flex flex-col items-center gap-3 
'>
                        <p className='font-extrabold text-neutral-800 dark:text-white'>دریافتی‌شما</p>
                        <p className='font-num dark:text-white'>{calculateData?.amount_after_commission}</p>
                    </div>
                </div>
                <Button containerClass="!bg-red-500" name={select === 0 ? "خرید" : "فروش"} />
            </form>

            {
                modal.open &&
                <Verify modal={modal} setModal={setModal} />
            }
        </div>
    )
}

export default SellTether
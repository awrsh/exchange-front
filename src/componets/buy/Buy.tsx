import { useEffect, useState } from 'react'
import Select from '../common/Select'
import { useFormik } from 'formik'
import Input from '../common/Input'
import Button from '../common/Button'
import useAuthStore from '../../stores/user-store'
import useGlobalStore from '../../stores/global-store'
import useGetCuurencyListQuery from '../../hook/query/currency/useGetCuurencyListQuery'
import * as Yup from "yup"
import Verify from './Verify'
import { addCommas, removeNonNumeric } from '../../helpers/utils/fun'
import useCalculateBuySellCommission from '../../hook/mutation/calculate/useCalculateBuySellCommission'
import CustomSlider from '../common/CustomSlider'
import { errorToast } from '../../helpers/utils/error'
import { useSearchParams } from 'react-router-dom'

const Buy = ({ select }: { select: number }) => {
    const [searchParams] = useSearchParams()
    const { mutate, data: calculateData, isSuccess, reset } = useCalculateBuySellCommission()
    const [modal, setModal] = useState<any>({
        open: false,
        info: {}
    })
    const { data, isLoading , isSuccess:isSuccessListCurr} = useGetCuurencyListQuery()
    const { toggleVerifyAuth } = useGlobalStore()
    const { user } = useAuthStore()
    const formik = useFormik<any>({
        initialValues: {
            crypto: null,
            price: null,
            amount: null,
            slider: null
        },
        validationSchema: Yup.object({
            crypto: Yup.object().required("فیلد اجباری"),
            amount: Yup.string().required("فیلد اجباری است")
        }),
        onSubmit: (values) => {
            if (user?.authentication_status === "level_0") {
                return toggleVerifyAuth(true)
            }
            reset()
            formik.resetForm({
                values: {
                    amount: "",
                    price: ""
                }
            })
            setModal({
                open: true,
                info: {
                    base_currency_id: "9506",
                    type: select === 0 ? "buy" : "sell",
                    price: Number(removeNonNumeric(values.price)),
                    amount: values.amount,
                    crypto: values.crypto,
                }
            })
        }
    })


    const formatOptionLabel = ({ title, image, price }: any) => {
        return <div className='flex items-center gap-2'>
            {
                image &&
                <img className='w-6 h-6 rounded-full' src={image} />
            }
            <div className='flex items-center gap-2'>
                <span className='text-xs font-bold'>{title}</span>
                <span className='text-[11px] pt-1 font-num'>{Number(price).toLocaleString()} تومان</span>
            </div>
        </div>
    }

    // total tomaan
    const total = user?.wallets.find((crypto) => crypto.currency_id.code === "IRT")

    // all balance
    const onClickSubLabel = () => {
        formik.setFieldValue("amount", "")
        mutate({
            cost: Number(total?.balance).toFixed(0),
            base_currency_code: "IRT",
            currency_code: formik.values.crypto.code,
            type: "buy",
        })
        formik.setFieldValue("price", addCommas(Number(total?.balance).toFixed(0)!))
    }


    const onChangeAmount = (e: any) => {
        const price = Number(e.target.value) * Number(formik.values?.crypto?.price)
        if (price > Number(Number(total?.balance).toFixed(0))) {
            errorToast("موجودی شما کمتر از حد مجاز برای خرید این ارز است")
            formik.setFieldValue("amount", "")
            return
        }
        mutate({
            amount: e.target.value,
            base_currency_code: "IRT",
            currency_code: formik.values.crypto.code,
            type: "buy",
        })
        formik.setFieldValue("price", "")
        formik.setFieldValue("amount", e.target.value)

    }
    const onChagePrice = (e: any) => {
        mutate({
            cost: removeNonNumeric(e.target.value),
            base_currency_code: "IRT",
            currency_code: formik.values.crypto.code,
            type: "buy",
        })
        formik.setFieldValue("price", addCommas(e.target.value))
        formik.setFieldValue("amount", "")
    }

    const onChangeSlider = (_: any, value: number) => {
        const precent = Number(value) / 100
        const balance = Number(total?.balance).toFixed(0)
        // @ts-ignore
        const amount = Number(precent * balance)
        mutate({
            cost: amount.toString(),
            base_currency_code: "IRT",
            currency_code: formik.values.crypto.code,
            type: "buy",
        })

        formik.setFieldValue("slider", value)
    }
    useEffect(() => {
        if (isSuccess) {
            formik.setFieldValue("amount", calculateData.amount)
            formik.setFieldValue("price", addCommas(calculateData.cost))
        }
    }, [isSuccess])


    useEffect(()=>{
        if(isSuccessListCurr){
          const findItem =  data.objects.find((item)=>item.code === searchParams.get("code"))
          formik.setFieldValue("crypto",findItem)
        }
    },[isSuccessListCurr])
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
                    options={select === 0 ? data?.objects! : []}
                    label='لطفا رمز ارز خود را انتخاب کنید'
                    isSearchable
                />

                <Input
                    className='mt-3'
                    name='price'
                    label='مبلغ خود را وارد کنید'
                    formik={formik}
                    isOnChange
                    onChange={onChagePrice}
                    subLabel='همه'
                    value={formik.values.price}
                    onClickSubLabel={onClickSubLabel}
                    disabled={!formik?.values?.crypto}
                />
                <Input
                    className='mt-3'
                    isOnChange
                    disabled
                    name=''
                    label='موجودی تومانی'
                    formik={formik}
                    value={total?.balance ? Number(Number(total?.balance).toFixed(0)).toLocaleString() : ""}
                    subLabel='تومان'
                />
                <Input
                    className='mt-3'
                    isOnChange={true}
                    name='amount'
                    label={`مقدار ${formik.values?.crypto?.title ? `(${formik.values?.crypto?.title_fa})` : ""}`}
                    onChange={onChangeAmount}
                    value={formik.values.amount}
                    disabled={!formik?.values?.crypto}
                />


                <CustomSlider disabled={!formik?.values?.crypto} value={formik.values.slider} onChange={onChangeSlider} />

                {/* <div className='flex items-center justify-between p-3 rounded-xl bg-[#f5f5f5] dark:bg-block'>
                    <p className='font-bold text-neutral-800'>مجموع </p>
                    <p className='font-bold text-zinc-400'>BTC <span className='font-num font-extrabold mx-3 text-neutral-800'>2,000,000</span></p>
                </div> */}

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
                <Button name={"خرید"} containerClass='!bg-green-500' />
            </form>
            {
                modal.open &&
                <Verify modal={modal} setModal={setModal} />
            }
        </div>
    )
}


export default Buy
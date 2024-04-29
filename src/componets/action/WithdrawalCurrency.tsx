import { useFormik } from "formik"
import Select from "../common/Select"
import Input from "../common/Input"
import Button from "../common/Button"
import useAuthStore from "../../stores/user-store"
import useCalculateCommissionMutation from "../../hook/mutation/transactions/useCalculateCommissionMutation"
import { useEffect } from "react"
import useCraeteTransactionCryptoMutation from "../../hook/mutation/currencies/useCraeteTransactionCryptoMutation"

const WithdrawalCurrency = () => {
    const { mutate: mutateWithdraw, isLoading: loadingWithdarw } = useCraeteTransactionCryptoMutation()
    const { isLoading, mutate } = useCalculateCommissionMutation()
    const { user } = useAuthStore()
    const formik = useFormik<any>({
        initialValues: {
            crypto: null,
            network: null,
            amount: null,
            wallet_address: null
        },
        onSubmit: (values) => {
            const data = {
                "type": "withdarw",
                currency_code: values.crypto.id,
                network_code: values.network.id,
                amount: Number(values.amount),
                wallet_address: values.wallet_address
            }
            mutateWithdraw(data)
        }
    })


    const formatOptionLabel = ({ currency_id, balance }: any) => {
        return <div className="flex justify-between items-center">
            <div className='flex items-center gap-2'>
                {
                    currency_id?.image &&
                    <img className='w-6 h-6 rounded-full' src={currency_id?.image} />
                }
                <div className='flex items-center gap-2'>
                    <span className='text-xs font-bold'>{currency_id?.title}</span>
                    <span className='text-[11px] pt-1 font-num'>{Number(currency_id?.price).toLocaleString()} تومان</span>
                </div>
            </div>
            <p className="font-num text-gray-900">{balance ? balance : ""} <span className="text-[9px]">موجودی</span></p>
        </div>
    }

    const formatOptionNetwork = ({ title }: any) => {
        return <div className='flex items-center gap-2'>
            <span className='text-xs font-bold'>{title}</span>
        </div>
    }
    const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (formik?.values?.crypto?.currency_id) {
            if (Number(e.target.value) < 0) return
            if (e.target.value > formik?.values?.crypto?.balance) return
            formik.setFieldValue("amount", e.target.value)
        }
    }


    useEffect(() => {
        const { network, crypto, amount } = formik.values
        if (network?.code && crypto.currency_id && amount) {
            const calculateCommission = {
                network_code: network.code,
                currency_code: crypto.currency_id.code,
                amount: Number(amount)
            }
            mutate(calculateCommission)
        }
    }, [formik.values])


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
                <Select
                    getOptionLabel={(option) => option.currency_id?.title}
                    getOptionValue={(option) => option.currency_id?.title}
                    formatOptionLabel={formatOptionLabel}
                    formik={formik}
                    label="انتخاب ارز"
                    name="crypto"
                    options={user?.wallets.filter((option) => option.currency_id.code !== "IRT")!}
                    isSearchable
                />
                <Select
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.code}
                    formatOptionLabel={formatOptionNetwork}
                    formik={formik}
                    label="انتخاب شبکه"
                    name="network"
                    options={formik.values?.crypto?.currency_id?.networks!}
                />
                <Input isOnChange value={formik.values.amount} onChange={onChangeAmount} className="!mt-3" formik={formik} label={`میزان برداشت (${formik.values.crypto?.currency_id?.title ?? ""})`} name="" />
                <Input formik={formik} label={`آدرس کیف پول مقصد`} name="wallet_address" />
                <div className="space-y-4 bg-[#fff3d5] p-4 rounded-lg !mt-6">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-[14px] text-gray-900">میزان برداشت</p>
                        <p className="text-[12px] text-gray-900">{formik.values?.amount} {formik.values.crypto?.currency_id?.title}</p>
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
                <Button isLoading={isLoading || loadingWithdarw} type="submit" containerClass="!mt-16 !bg-int" name="برداشت" />
            </form>

        </div>
    )
}

export default WithdrawalCurrency
import { useFormik } from "formik"
import Select from "../common/Select"
import Button from "../common/Button"
import useGetCuurencyListQuery from "../../hook/query/currency/useGetCuurencyListQuery"
import { useEffect } from "react"
import { IoCopyOutline } from "react-icons/io5";
import QRCode from "react-qr-code";
import { errorToast, successToast } from "../../helpers/utils/error"
import Input from "../common/Input"
import useCraeteTransactionCryptoMutation from "../../hook/mutation/currencies/useCraeteTransactionCryptoMutation"
import { CircularProgress } from "@mui/material"
import useGetWalletAddress from "../../hook/query/currencies/useGetWalletAddress"

const DepositCurrency = () => {
    const { mutate, isLoading: loadingDeposit, isSuccess: SuccessDeposit } = useCraeteTransactionCryptoMutation()
    const formik = useFormik<any>({
        initialValues: {
            crypto: null,
            network: null,
            amount: null,
            txid: null
        },
        // @ts-ignore
        onSubmit: (values) => {
            if (!currencyWallet?.objects[0]?.address!) return errorToast("آدرس ولتی برای این ارز وجود ندارد")
            const data = {
                "type": "deposit",
                wallet_address: currencyWallet?.objects[0].address!,
                currency_code: values.crypto.id,
                network_code: values.network.id,
                amount: Number(values.amount),
                tx_id: values.txid
            }
            mutate(data)
        }
    })
    const { crypto, network } = formik.values
    const { data, isLoading } = useGetCuurencyListQuery()
    const { data: currencyWallet, isLoading: loading } = useGetWalletAddress({ currency_code: crypto?.code, network_code: network?.code, enabled: network && crypto ? true : false })

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
    const formatOptionNetwork = ({ title }: any) => {
        return <div className='flex items-center gap-2'>
            <span className='text-xs font-bold'>{title}</span>
        </div>
    }


    useEffect(() => {
        if (SuccessDeposit) {
            formik.setValues({
                txid: "",
                crypto: "",
                network: "",
                amount: ""

            })
        }
    }, [SuccessDeposit])
    const onCopy = () => {
        navigator.clipboard.writeText(currencyWallet?.objects[0].address!)
        successToast("با موفقیت کپی شد")
    }


    const onChange = (value: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue("crypto", value)
        formik.setFieldValue("network", "")

    }
    const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(Number(e.target.value) <= 0) return
        formik.setFieldValue("amount", e.target.value)

    }
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
            <form className="mt-7 space-y-2" onSubmit={formik.handleSubmit}>
                <Select
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.title}
                    formatOptionLabel={formatOptionLabel}
                    isLoading={isLoading}
                    onChange={onChange}

                    formik={formik}
                    label="انتخاب ارز"
                    name="crypto"
                    options={data?.objects!}
                    isSearchable
                />
                <Select
                    getOptionLabel={(option) => option.title}
                    getOptionValue={(option) => option.code}
                    formatOptionLabel={formatOptionNetwork}
                    formik={formik}
                    label="انتخاب شبکه"
                    name="network"
                    options={formik.values?.crypto?.networks!}
                />
                <Input isOnChange onChange={onChangeAmount} value={formik.values.amount} type="number" formik={formik} name="amount" label="مقدار" />
                {
                    currencyWallet?.objects[0]?.address ?
                        <Input formik={formik} name="txid" label="txid" />
                        : null
                }

                {
                    loading ? <CircularProgress /> : currencyWallet?.objects[0]?.address! ? currencyWallet?.objects[0].address! ?
                        <div className="flex  !mt-8 justify-between">
                            <p className="text-[13px] font-bold">آدرس کیف پول:</p>
                            <div className="flex flex-col items-end gap-6">
                                <div className="flex items-center gap-2">
                                    <p>{currencyWallet?.objects[0].address}</p>
                                    <IoCopyOutline onClick={onCopy} cursor="pointer" size={22} />
                                </div>
                                <QRCode className="w-[120px] h-[100px]" value={currencyWallet?.objects[0]?.address!} />
                            </div>
                        </div>
                        : "آدرسی ولتی برای این ارز وجود ندارد" :
                        null
                }


                <Button disabled={currencyWallet?.objects[0]?.address ? false : true} isLoading={loadingDeposit} type="submit" containerClass="!mt-16 !bg-int" name="واریز" />
            </form>

        </div>
    )
}

export default DepositCurrency
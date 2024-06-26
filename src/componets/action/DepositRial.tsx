import useGetCreditCardRuels from '../../hook/query/creditcard/useGetAllCreditCard'
import useCreateRialPaymentMutation from '../../hook/mutation/action/useCreateRialPaymentMutation'
import { useFormik } from 'formik'
import { validationSchemaRial } from '../../helpers/utils/validationSchema'
import Input from '../common/Input'
import { amounts } from '../../helpers/utils/data'
import Select from '../common/Select'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
import { addCommas, formatCardNumber, removeNonNumeric } from '../../helpers/utils/fun'

const DepositRial = () => {
    const { data, isLoading } = useGetCreditCardRuels()
    const { mutate, isLoading: LoadingPay } = useCreateRialPaymentMutation()
    const formik = useFormik<any>({
        initialValues: {
            amount: "",
            card_number: ""
        },
        validationSchema: validationSchemaRial,
        onSubmit: (values) => {
            const data = {
                card_number: values.card_number.card_number,
                amount: Number(removeNonNumeric(values.amount)) * 10
            }
            mutate(data)
        }
    })

    const onChangeInput = (e: any) => {
        formik.setFieldValue("amount", addCommas(removeNonNumeric(e.target.value)))

    }

    const formatOptionLabel = ({ card_number }: any) => {
        return <div className='flex items-center gap-2'>
            <span className='text-xs font-bold font-num'>{formatCardNumber(card_number)}</span>
        </div >
    }

    return (
        <div className="w-full">
            <form onSubmit={formik.handleSubmit} className="mt-5 lg:mt-10 flex flex-col gap-4 flex-1">
                <Input onChange={onChangeInput} isOnChange value={formik.values.amount} inputClassName='text-center text-lg' name="amount" label="مبلغ" formik={formik} subLabel='تومان' />
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        amounts.map((amount, idx) => (
                            <button type="button" onClick={() => formik.setFieldValue("amount", addCommas(amount.value))} className={` text-xs py-3 rounded-xl text-gray-700 ${idx === 4 ? "col-span-2 lg:col-span-1" : ""} ${Number(formik.values.amount) === amount.value ? "bg-int text-white" : "bg-gray-100"}`} key={idx}>{amount.label}</button>
                        ))
                    }
                </div>
                {
                    data?.objects.length === 0 ? <div className='flex flex-col bg-[#fff3d5] py-8 rounded-xl gap-4 mt-5 justify-center items-center'>
                        <p className='text-[14px] font-bold'>شماره کارتی برای شما ثبت نشده است</p>
                        <Link className='text-[#d9881f] text-xs' to={"/bank-card"}>برای ثبت شماره کارت اینجا کلیک کنید</Link>
                    </div> :
                        <Select formatOptionLabel={formatOptionLabel} isLoading={isLoading} label=" شماره کارت" getOptionLabel={(option) => option.card_number} getOptionValue={(option) => option.card_number} formik={formik} options={data?.objects.filter((option) => option.approved !== false)!} name="card_number" />
                }
                <Button disabled={!formik?.values?.card_number?.card_number} isLoading={LoadingPay} type="submit" containerClass="!mt-10 !bg-int" name="پرداخت" />
            </form>

        </div>
    )
}

export default DepositRial
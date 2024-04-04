import useGetCreditCardRuels from '../../hook/query/creditcard/useGetAllCreditCard'
import useCreateRialPaymentMutation from '../../hook/mutation/action/useCreateRialPaymentMutation'
import { useFormik } from 'formik'
import { validationSchemaRial } from '../../helpers/utils/validationSchema'
import Input from '../common/Input'
import { amounts } from '../../helpers/utils/data'
import Select from '../common/Select'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

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
                amount: Number(values.amount)
            }
            mutate(data)
        }
    })
    return (
        <div className="">
            <form onSubmit={formik.handleSubmit} className="mt-10 flex flex-col gap-4 flex-1">
                <Input name="amount" label="مبلغ" formik={formik} />
                <div className="grid grid-cols-3 gap-4">
                    {
                        amounts.map((amount, idx) => (
                            <button type="button" onClick={() => formik.setFieldValue("amount", amount.value)} className={` text-xs py-3 rounded-xl text-gray-700 ${Number(formik.values.amount) === amount.value ? "bg-blue-500 text-white" : "bg-gray-100"}`} key={idx}>{amount.label}</button>
                        ))
                    }
                </div>
                {
                    data?.objects.length === 0 ? <div className='flex flex-col bg-[#fff3d5] py-8 rounded-xl gap-4 mt-5 justify-center items-center'>
                        <p className='text-[14px] font-bold'>شماره کارتی برای شما ثبت نشده است</p>
                        <Link className='text-[#d9881f] text-xs' to={"/bank-card"}>برای ثبت شماره کارت اینجا کلیک کنید</Link>
                    </div> :
                        <Select isLoading={isLoading} label=" شماره کارت" getOptionLabel={(option) => option.card_number} getOptionValue={(option) => option.card_number} formik={formik} options={data?.objects.filter((option) => option.approved !== false)!} name="card_number" />
                }
                <Button isLoading={LoadingPay} type="submit" containerClass="!mt-10" name="پرداخت" />
            </form>

        </div>
    )
}

export default DepositRial
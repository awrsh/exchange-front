import useGetCreditCardRuels from '../../hook/query/creditcard/useGetAllCreditCard'
import { useFormik } from 'formik'
import { validationSchemaRial } from '../../helpers/utils/validationSchema'
import Input from '../common/Input'
import { amounts } from '../../helpers/utils/data'
import Select from '../common/Select'
import Button from '../common/Button'
import { Link } from 'react-router-dom'
import useWithdrawRialPaymentMutation from '../../hook/mutation/action/useWithdrawRialPaymentMutation'
import useAuthStore from '../../stores/user-store'
import { addCommas, removeNonNumeric } from '../../helpers/utils/fun'

const WithdrawRials = () => {
    const { user } = useAuthStore()
    const { data, isLoading } = useGetCreditCardRuels()
    const { mutate, isLoading: LoadingPay } = useWithdrawRialPaymentMutation()
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

    
    const onChangeInput = (e:any)=>{
        formik.setFieldValue("amount",addCommas(removeNonNumeric(e.target.value)))
        
    }
    return (
        <div className="mt-10">
            <div className='w-[70%] mx-auto'>
                <p className='text-center text-[13px] font-bold'>لطفا برداشت خود را به صورت تومان وارد کنید و سپس شماره کارت مورد نظر را انتخاب کنید</p>
                <p className='text-center text-xs text-gray-600 pt-3'>موجودی قابل برداشت: <span className='text-gray-900 font-num'>{new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Number(user?.total_ir_balance))}</span>

                </p>
            </div>
            <form onSubmit={formik.handleSubmit} className="mt-4 flex flex-col gap-4 flex-1">
            <Input onChange={onChangeInput} isOnChange value={formik.values.amount} inputClassName='text-center text-lg' name="amount" label="مبلغ" formik={formik} subLabel='تومان' />
                <div className="grid grid-cols-3 gap-4">
                    {
                        amounts.map((amount, idx) => (
                            <button type="button" onClick={() => formik.setFieldValue("amount", addCommas(amount.value))} className={` text-xs py-3 rounded-xl text-gray-700 ${Number(formik.values.amount) === amount.value ? "bg-int text-white" : "bg-gray-100"}`} key={idx}>{amount.label}</button>
                        ))
                    }
                </div>
                <Input isOnChange value='1000' subLabel='تومان' name="" label="کارمزد" formik={formik} />
                <Input
                    isOnChange
                    value={formik.values?.amount ? (Number(removeNonNumeric(formik.values.amount)) - 1000).toLocaleString() : ""}
                    name=""
                    label="میزان برداشت نهایی"
                    formik={formik}
                />

                {
                    data?.objects.length === 0 ? <div className='flex flex-col bg-[#fff3d5] py-8 rounded-xl gap-4 mt-5 justify-center items-center'>
                        <p className='text-[14px] font-bold'>شماره کارتی برای شما ثبت نشده است</p>
                        <Link className='text-[#d9881f] text-xs' to={"/bank-card"}>برای ثبت شماره کارت اینجا کلیک کنید</Link>
                    </div> :
                        <Select isLoading={isLoading} label=" شماره کارت" getOptionLabel={(option) => option.card_number} getOptionValue={(option) => option.card_number} formik={formik} options={data?.objects.filter((option) => option.approved !== false)!} name="card_number" />
                }
                <Button disabled={Number(user?.total_ir_balance) === 0 || !formik?.values?.card_number} isLoading={LoadingPay} type="submit" containerClass="!mt-10 !bg-int" name="برداشت" />
            </form>
        </div>
    )
}

export default WithdrawRials
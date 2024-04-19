import { useFormik } from 'formik'
import Input from '../common/Input'
import Button from '../common/Button'
import * as Yup from "yup"
import useForgetPasswordOtpMutation from '../../hook/mutation/user/useForgetPasswordOtpMutation'
import { useEffect } from 'react'
type Props = {
    setStep: React.Dispatch<React.SetStateAction<{
        value: number;
        info: string;
    }>>
}
const Step1 = ({ setStep }: Props) => {
    const { mutate, isLoading, isSuccess } = useForgetPasswordOtpMutation()
    const formik = useFormik({
        initialValues: {
            mobile: ""
        },
        validationSchema: Yup.object({
            mobile: Yup.string().required("فیلد اجباری سات")
        }),
        onSubmit: (values) => {
            mutate(values)
        }
    })

    useEffect(() => {
        if (isSuccess) {
            setStep({
                value:1,
                info:formik.values.mobile
            })
        }
    }, [isSuccess])
    return (
        <>
            <h1 className='text-center text-xl font-bold py-3'>فراموشی رمز عبور</h1>
            <form onSubmit={formik.handleSubmit} >
                <Input formik={formik} name='mobile' label='شماره تلفن' />
                <Button isLoading={isLoading} type='submit' containerClass='!mt-10 !bg-int' name='ارسال' />
            </form>
        </>
    )
}

export default Step1
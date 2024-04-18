import { useFormik } from 'formik'
import Input from '../common/Input'
import Button from '../common/Button'
import { IoCloseCircle } from 'react-icons/io5'
type Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}
const Step1 = ({ setStep, }: Props) => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => {
        }
    })
    return (
        <>
            <h1 className='text-center text-xl font-bold py-3'>فراموشی رمز عبور</h1>
            <form onSubmit={formik.handleSubmit} >
                <Input formik={formik} name='mobile' label='شماره تلفن' />
                <Button onClick={() => setStep(1)} containerClass='!mt-10 !bg-int' name='ارسال' />
            </form>
        </>
    )
}

export default Step1
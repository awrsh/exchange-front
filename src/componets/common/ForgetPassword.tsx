import { Dialog } from '@mui/material'
import Input from './Input';
import { useFormik } from 'formik';
import Button from './Button';
import { IoCloseCircle } from 'react-icons/io5';
import { successToast } from '../../helpers/utils/error';
type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ForgetPassword = ({ open, setOpen }: Props) => {
    const onClose = () => setOpen(false)
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => {
            successToast("رمز عبور برای شما ارسال خواهد شد")
            onClose()
         }
    })
    return (
        <Dialog fullWidth maxWidth="sm" open={open} >
            <div className='pb-7 pt-10'>
                <div className='relative'>
                    <IoCloseCircle onClick={onClose} size={24} className="absolute cursor-pointer left-14 text-gray-700 -top-3"/>
                    <h1 className='text-center text-xl font-bold py-3'>فراموشی رمز عبور</h1>
                    <p className='text-xs text-center'>برای بازگردانی رمز عبور لطفا شماره تلفن خود را وارد کنید</p>
                </div>
                <form onSubmit={formik.handleSubmit} className='w-[70%] mx-auto mt-10'>
                    <Input formik={formik} name='mobile' label='شماره تلفن' />
                    <Button  containerClass='!mt-10' name='ارسال' />
                </form>
            </div>
        </Dialog>
    )
}

export default ForgetPassword
import { Dialog } from '@mui/material'
import { IoCloseCircle } from 'react-icons/io5';
import { useState } from 'react';
import Step1 from '../forgetPassword/step1';
import Step2 from '../forgetPassword/Step2';
type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ForgetPassword = ({ open, setOpen }: Props) => {
    const [step, setStep] = useState(0)
    const onClose = () => setOpen(false)

    return (
        <Dialog fullWidth maxWidth="sm" open={open} >
            <div className='pb-7 pt-10 px-4'>
            <IoCloseCircle onClick={onClose} size={24} className="absolute cursor-pointer left-4 text-gray-700 top-5" />
                <div className='w-[80%] mx-auto'>
                    {
                        step === 0 ? <Step1 setStep={setStep} /> : null
                    }
                    {
                        step === 1 ? <Step2 setStep={setStep} /> : null
                    }
                </div>
            </div>
        </Dialog>
    )
}

export default ForgetPassword
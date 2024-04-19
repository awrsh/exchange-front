import { Dialog } from '@mui/material'
import { IoCloseCircle } from 'react-icons/io5';
import { useState } from 'react';
import Step2 from '../forgetPassword/Step2';
import Step1 from '../forgetPassword/Step1';
type Props = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ForgetPassword = ({ open, setOpen }: Props) => {
    const [step, setStep] = useState({
        value:0,
        info:""
    })
    const onClose = () => {
        setOpen(false)
        setStep({
            value:0,
            info:""
        })
    }

    return (
        <Dialog fullWidth maxWidth="sm" open={open} >
            <div className='pb-7 pt-10 px-4'>
            <IoCloseCircle onClick={onClose} size={24} className="absolute cursor-pointer left-4 text-gray-700 top-5" />
                <div className='w-[80%] mx-auto'>
                    {
                        step.value === 0 ? <Step1 setStep={setStep} /> : null
                    }
                    {
                        step.value === 1 ? <Step2 onClose={onClose} step={step} /> : null
                    }
                </div>
            </div>
        </Dialog>
    )
}

export default ForgetPassword
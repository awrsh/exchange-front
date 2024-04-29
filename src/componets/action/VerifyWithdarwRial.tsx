import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from '../common/Button';
import { useEffect, useState } from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';
import useWithdrawRialPaymentMutation from '../../hook/mutation/action/useWithdrawRialPaymentMutation';
import { formatCardNumber } from '../../helpers/utils/fun';
type Props = {
    modal: {
        open: boolean
        info: any
    },
    setModal: React.Dispatch<any>
}
const VerifyWithdawTransactionRial = ({ modal, setModal }: Props) => {
    const { mutate, isLoading,isSuccess } = useWithdrawRialPaymentMutation()

    const [value, setValue] = useState("")
    const onClick = () => {
        mutate({...modal.info,otp:value})
    }

    useEffect(() => {
        if (isSuccess) {
            setModal({
                info: null,
                open: false
            })
        }
    }, [isSuccess])

    console.log(modal.info,"djjdjdjdjdjdj")
    return (
        <Dialog fullWidth maxWidth="sm" open>
            <DialogTitle>
                <h1 className='text-center text-xl font-extrablack'>امنیت برداشت</h1>

            </DialogTitle>
            <DialogContent className=' !my-4 !py-6 !px-10'>
                <div className='bg-gray-100 space-y-3 p-3 rounded-lg border'>
                   
                    
                    <div className='flex items-center justify-between'>
                        <p>مبلغ</p>
                        <span className='font-num'>{Number(modal.info.amount).toLocaleString()} تومان</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p> کارت بانکی</p>
                        <span className='font-num'>{formatCardNumber(modal.info.card_number)}</span>
                    </div>
                </div>
                <div className=''>
                    <p className='py-4 text-gray-700 font-bold'>لطفا کد تائید ارسالی را برای برداشت را وارد کنید</p>
                    <ReactInputVerificationCode autoFocus onChange={(val) => setValue(val)} placeholder="" length={5} value={value} />
                </div>

                
            </DialogContent>
            <DialogActions className='flex items-center gap-10 '>
                <Button onClick={() => setModal({ info: {}, open: false })} sx={{ border: "1px solid gray" }} containerClass='!bg-transparent' className='text-gray-600' name='انصراف' />
                <Button disabled={value.length !== 5} isLoading={isLoading} onClick={onClick} name="انتقال" />
            </DialogActions>
        </Dialog >
    )
}

export default VerifyWithdawTransactionRial
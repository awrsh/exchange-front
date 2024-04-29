import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from '../common/Button';
import { useEffect, useState } from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';
import useCraeteTransactionCryptoMutation from '../../hook/mutation/currencies/useCraeteTransactionCryptoMutation';
type Props = {
    modal: {
        open: boolean
        info: any
    },
    setModal: React.Dispatch<any>
}
const VerifyWithdawTransactionCrypto = ({ modal, setModal }: Props) => {
    const { mutate, isLoading, isSuccess } = useCraeteTransactionCryptoMutation()
    const [value, setValue] = useState("")
    const onClick = () => {
        mutate({...modal.info,currency_code:modal.info.crypto.id})
    }

    useEffect(() => {
        if (isSuccess) {
            setModal({
                info: null,
                open: false
            })
        }
    }, [isSuccess])
    return (
        <Dialog fullWidth maxWidth="sm" open>
            <DialogTitle>
                <h1 className='text-center text-xl font-extrablack'>امنیت انتقال</h1>

            </DialogTitle>
            <DialogContent className=' !my-4 !py-6 !px-10'>
                <div className='bg-gray-100 space-y-3 p-3 rounded-lg border'>
                    <div className='flex items-center justify-between'>
                        <p>نوع ارز</p>
                        <div className='flex items-center gap-1'>
                            <span>{modal.info.crypto?.currency_id?.title}</span>
                            <img className='w-8 h-8 object-cover' src={modal.info.crypto?.currency_id?.image!} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>مقدار</p>
                        <span className='font-num'>{modal.info.amount}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p> کیف پول</p>
                        <span className='font-num'>{modal.info.wallet_address}</span>
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

export default VerifyWithdawTransactionCrypto
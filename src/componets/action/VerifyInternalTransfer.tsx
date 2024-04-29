import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from '../common/Button';
import useTransfersMutation from '../../hook/mutation/transfers/useTransfersMutation';
import { useEffect, useState } from 'react';
import ReactInputVerificationCode from 'react-input-verification-code';
type Props = {
    modal: {
        open: boolean
        info: {
            price: number;
            type: string;
            crypto: {
                image: string,
                title: string,
                id: string;
                price: number,
                code: string
            }
            amount: number,
            mobile: string
        }
    },
    setModal: React.Dispatch<any>
}
const VerifyInternalTransfer = ({ modal, setModal }: Props) => {
    const { mutate, isLoading, isSuccess } = useTransfersMutation()
    const [value, setValue] = useState("")
    const onClick = () => {
        const data = {
            currency_code: modal.info.crypto.code,
            amount: Number(modal.info.amount),
            mobile: modal.info.mobile,
            otp:value
        }
        mutate(data)
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
                            <span>{modal.info.crypto.title}</span>
                            <img className='w-8 h-8 object-cover' src={modal.info.crypto.image!} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>مقدار</p>
                        <span className='font-num'>{modal.info.amount}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>قیمت خرید</p>
                        <span className='font-num'>{Number(modal.info.crypto?.price!).toLocaleString()} <span className='text-xs'>تومان</span></span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>شماره موبایل</p>
                        <span className='font-num'>{modal.info.mobile}</span>
                    </div>
                </div>
                <div className=''>
                    <p className='py-4 text-gray-700 font-bold'>لطفا کد تائید ارسالی را برای انتقال وارد کنید</p>
                    <ReactInputVerificationCode autoFocus onChange={(val) => setValue(val)} placeholder="" length={5} value={value} />
                </div>

                <div className='space-y-2 mt-4'>
                    <p className='text-gray-900 font-medium'>
                        <span className='w-3 h-3 mx-2 rounded-full inline-block bg-green-500'></span>
                        اطمینان حاصل کنید که شماره موبایل درست باشد.
                    </p>
                    <p className='text-gray-900 font-medium'>
                        <span className='w-3 h-3 mx-2 rounded-full inline-block bg-green-500'></span>
                        امکان لفو برداشت وجود ندارد
                    </p>
                </div>
            </DialogContent>
            <DialogActions className='flex items-center gap-10 '>
                <Button onClick={() => setModal({ info: {}, open: false })} sx={{ border: "1px solid gray" }} containerClass='!bg-transparent' className='text-gray-600' name='انصراف' />
                <Button disabled={value.length !== 5} isLoading={isLoading} onClick={onClick} name="انتقال" />
            </DialogActions>
        </Dialog >
    )
}

export default VerifyInternalTransfer
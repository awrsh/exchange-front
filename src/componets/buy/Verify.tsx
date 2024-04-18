import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'

import Button from '../common/Button';
import useOrderMutation from '../../hook/mutation/order/useOrderMutation';
import { useEffect } from 'react';
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
                price: number
            }
            amount: number
        }
    },
    setModal: React.Dispatch<any>
}
const Verify = ({ modal, setModal }: Props) => {
    const { mutate, isLoading: loadingOrder,isSuccess } = useOrderMutation()

    const onClick = () => {
        const data = {
            type: modal.info.type,
            currency_id: Number(modal?.info.crypto?.id),
            amount: Number(modal?.info.amount)
        }
        mutate(data)
    }

    useEffect(()=>{
        if(isSuccess){
            setModal({
                info:"",
                open:false
            })
        }
    },[isSuccess])
    return (
        <Dialog fullWidth maxWidth="sm" open>
            <DialogTitle>
            <h1 className='text-center text-xl font-extrablack'>امنیت {modal.info.type === 'buy'?"خرید":"فروش"}</h1>

            </DialogTitle>
            <DialogContent className='bg-gray-100 !my-5 !space-y-3 !py-6 !px-4'>
                <div>
                    <p className='flex items-center justify-center gap-1 font-num'>
                        شما قصد {modal.info.type === "buy" ? "خرید" : "فروش"}
                        {" "}
                        {modal.info.amount}
                        {" "}
                        {modal.info.crypto.title}
                        <img className='w-6 h-6' src={modal.info.crypto.image} />
                        به قیمت کل
                        {" "}
                        {Number(modal.info.price).toLocaleString()}
                        {" "}
                        تومان
                        دارید.
                    </p>
                    <br />
                    <p className='text-center'>آیا مطمئن هستید؟</p>
                </div>
            </DialogContent>
            <DialogActions className='flex items-center gap-10 '>
                <Button onClick={() => setModal({ info: {}, open: false })} sx={{ border: "1px solid gray" }} containerClass='!bg-transparent' className='text-gray-600' name='انصراف' />
                <Button isLoading={loadingOrder} containerClass={`${modal.info.type === "buy" ?"!bg-green-500":"!bg-red-500"}`} onClick={onClick} name={modal.info.type === "buy" ? "خرید" : "فروش"} />
            </DialogActions>
        </Dialog >
    )
}

export default Verify
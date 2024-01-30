import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from '../common/Button'
import { Card } from '../../types/Creditcard/ResponseAllCreditcard';
import useDeleteCreditCard from '../../hook/mutation/creditcard/useDeleteCreditcard';
import { useEffect } from 'react';
type Props = {
    modal: {
        open: "EDIT" | "DELETE" | "",
        info: null | Card;
    },
    setModal: React.Dispatch<React.SetStateAction<{
        open: "EDIT" | "DELETE" | "";
        info: null | Card;
    }>>
}
const DeleteCreditcard = ({ modal, setModal }: Props) => {
    const { mutate, isLoading, isSuccess } = useDeleteCreditCard()
    const onDelete = () => {
        mutate(modal?.info?.id!)
    }
    const onClose = () => {
        setModal({ open: "", info: null })
    }


    useEffect(() => {
        if (isSuccess) {
            onClose()
        }
    }, [isSuccess])
    return (
        <Dialog maxWidth="sm" fullWidth open={modal.open === "DELETE"}>
            <div>
                <DialogTitle>
                    <p className='text-center text-[17px] font-bold border-b border-gray-300 pb-4'>حذف کارت بانکی</p>
                </DialogTitle>
                <DialogContent className='mt-5'>
                    <div>
                        <p className='text-md font-bold'>آیا مطمعن هستید که میخواهید این کارت بانکی را حذف کنید؟</p>
                        <div className='mt-4 space-y-3'>
                            <p className='font-extrabold'>شماره کارت بانکی: <span className='font-num font-[500]'>{modal?.info?.card_number}</span></p>
                            <p className='font-extrabold'>شماره شبا: <span className='font-num font-[500]'>{modal?.info?.iban}</span></p>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions className='flex items-center gap-10 mt-8'>
                    <Button onClick={onClose} sx={{ border: "1px solid #D1D5DB" }} containerClass='!bg-transparent ' className='!text-gray-600' name='انصراف' />
                    <Button isLoading={isLoading} containerClass='!bg-red-500' onClick={onDelete} name="حذف" />
                </DialogActions>
            </div>

        </Dialog>
    )
}

export default DeleteCreditcard
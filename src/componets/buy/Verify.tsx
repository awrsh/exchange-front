import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from '../common/Button';
type Props = {
    modal: {
        open: boolean
        info: {
            price: number;
            type: string;
            crypto: {
                image: string,
                title: string,
                id: string
            }
            amount: number
        }
    },
    setModal: React.Dispatch<any>
}
const Verify = ({ modal, setModal }: Props) => {

    const onClick = () => {
        // const data = {
        //     type: modal.info.type,
        //     currency_id: Number(modal?.info.crypto?.id),
        //     amount: Number(modal?.info.amount)
        // }
    }
    return (
        <Dialog open>
            <DialogTitle>
                <h1 className='text-center text-xl font-extrablack'>خرید ارز</h1>

            </DialogTitle>
            <DialogContent>
                <h1 className='text-center font-bold'>آیا مطمعن هستید میخواهید این ارز را {modal.info.type === "buy" ? "بخرید" : "بفروشید"}</h1>
                <div className='flex items-center justify-between py-8'>
                    <div className="flex items-center  justify-center  gap-2">
                        <img src={modal.info.crypto.image} className="w-8 h-8  rounded-full" />
                        <p className="font-bold text-start w-[100px]">{modal.info.crypto.title}</p>
                    </div>
                    <p className='font-num'> مقدار : {modal.info.amount}</p>
                    <p className='font-num'> قیمت : {Number(modal.info.price).toLocaleString()}</p>
                </div>
            </DialogContent>
            <DialogActions className='flex items-center gap-10'>
                <Button onClick={() => setModal({ info: {}, open: false })} sx={{ border: "1px solid gray" }} containerClass='!bg-transparent' className='text-gray-600' name='انصراف' />
                <Button onClick={onClick} name={modal.info.type === "buy" ? "خرید" : "فروش"} />
            </DialogActions>
        </Dialog >
    )
}

export default Verify
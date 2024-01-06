import { Dialog } from '@mui/material'
import Lists from './Lists'
import { IoClose } from "react-icons/io5";

type Props = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const DialogListCryptoCurrencies = ({ show, setShow }: Props) => {
    const onClose = () => setShow(false)
    return (
        <Dialog className='!z-[9999]' fullScreen open={show}>
            <div className='w-[95%] mx-auto'>
                <div className='relative'>
                    <p className='text-center py-3 border-b border-neutral-200'>نمایش لیست رمز ارز‌ها</p>
                    <IoClose  onClick={onClose} size={23} className="absolute left-1 top-2 cursor-pointer"/>
                </div>
                <Lists />
            </div>
        </Dialog>
    )
}

export default DialogListCryptoCurrencies
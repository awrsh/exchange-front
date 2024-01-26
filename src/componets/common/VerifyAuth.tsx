import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from './Button'
import useGlobalStore from '../../stores/global-store'
import { useNavigate } from 'react-router-dom'

const VerifyAuth = () => {
    const { verifyAuth, toggleVerifyAuth } = useGlobalStore()
    const navigate = useNavigate()
    const onClick = () => {
        toggleVerifyAuth()
        navigate('/verification')
    }
    return (
        <Dialog onClose={toggleVerifyAuth} fullWidth maxWidth="sm" open={verifyAuth}>
            <div>
                <DialogTitle>
                    <p className='text-center text-[17px] font-bold border-b border-gray-300 pb-4'>احراز هویت</p>

                </DialogTitle>
                <DialogContent>
                    <p className='text-center text-xs my-5 text-zinc-900'>لطفا برای ادامه فرایند ابتدا وارد حساب کاربری خود شوید</p>
                </DialogContent>
                <DialogActions className='flex items-center gap-10'>
                    <Button onClick={toggleVerifyAuth} sx={{ border: "1px solid #D1D5DB"  }} containerClass='!bg-transparent ' className='!text-gray-600' name='انصراف' />
                    <Button onClick={onClick} name='احراز هویت' />
                </DialogActions>
            </div>


        </Dialog>
    )
}

export default VerifyAuth
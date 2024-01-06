import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import Select from "../common/Select"
import { useFormik } from "formik"
import Input from "../common/Input"
import Textarea from "../common/Textarea"
import Button from "../common/Button"
interface Props{
    open: boolean;
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const CreateTickets = ({open,setOpen}:Props) => {
    const formik = useFormik({
        initialValues:{},
        onSubmit:()=>{}
    })
    const onClose = ()=> setOpen(false)
  return (
    <Dialog onClose={onClose} fullWidth maxWidth="sm" open={open}>
        <DialogTitle className="border-b">
            <p className="text-center font-extrablack">ایجاد تیکت</p>
        </DialogTitle>
        <DialogContent className="mt-6">
            <Select formik={formik} options={[]} label="نوع درخواست" name=""/>
            <Select formik={formik} options={[]} label="اهمیت تیکت" name=""/>
            <Input formik={formik} name="" label="عنوان تیکت"/>
            <Textarea formik={formik} label="توضیحات"/>
        </DialogContent>
        <DialogActions>
            <div className="flex items-center gap-3 justify-between w-[95%] mx-auto">
                <Button onClick={onClose} containerClass="!w-[120px] !bg-red-600" name="انصراف"/>
                <Button containerClass="!w-[120px]" name="ثبت"/>
            </div>
        </DialogActions>
    </Dialog>
  )
}

export default CreateTickets
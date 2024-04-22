import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material"
import Select from "../common/Select"
import { useFormik } from "formik"
import Input from "../common/Input"
import Textarea from "../common/Textarea"
import Button from "../common/Button"
import * as Yup from "yup"
import useCreateTicketMutation from "../../hook/mutation/tickets/useCreateTicketMutation"
import { useEffect } from "react"
interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const CreateTickets = ({ open, setOpen }: Props) => {
    const { mutate, isLoading, isSuccess } = useCreateTicketMutation()
    const options = [{ label: "سرمایه‌گذاری", value: "finance" }, { label: "پشتیبانی", value: "support" }, { label: "مدیریت", value: "administration" }]
    const formik = useFormik<any>({
        initialValues: {
            title: "",
            message: "",
            department: ""
        },
        validationSchema: Yup.object({
            title: Yup.string().required("فیلد اجباری است"),
            message: Yup.string().required("فیلد اجباری است"),
            department: Yup.object().required("فیلد اجباری است"),
        }),
        onSubmit: (values) => {
            const data = {
                title:values.title,
                message:values.message,
                department:values.department.value
            }
            mutate(data)
        }
    })
    const onClose = () => setOpen(false)

    useEffect(() => {
        if (isSuccess) {
            setOpen(false)
        }
    }, [isSuccess])
    return (
        <Dialog onClose={onClose} fullWidth maxWidth="sm" open={open}>
            <DialogTitle className="border-b">
                <p className="text-center font-extrablack">ایجاد تیکت</p>
            </DialogTitle>
            <DialogContent className="mt-6">
                <Input formik={formik} name="title" label="عنوان تیکت" />
                <Select formik={formik} options={options} label="نوع درخواست" name="department" />
                <Textarea name="message" className="mt-4" formik={formik} label="توضیحات" />
            </DialogContent>
            <DialogActions>
                <div className="flex items-center gap-3 justify-between w-[95%] mx-auto">
                    <Button onClick={onClose} containerClass="!w-[120px] !bg-red-600" name="انصراف" />
                    <Button isLoading={isLoading} onClick={formik.handleSubmit} containerClass="!w-[120px] !bg-int" name="ثبت" />
                </div>
            </DialogActions>
        </Dialog>
    )
}

export default CreateTickets
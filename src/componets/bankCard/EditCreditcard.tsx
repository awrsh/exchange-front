import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import Button from '../common/Button'
import { Card } from '../../types/Creditcard/ResponseAllCreditcard';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import { validationSchemaCreditcard } from '../../helpers/utils/validationSchema';
import Form from './Form';
import useUpdateCreditCard from '../../hook/mutation/creditcard/useUpdateCreditcard';
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
const EditCreditcard = ({ modal, setModal }: Props) => {
    const { mutate, isLoading, isSuccess } = useUpdateCreditCard()
    const formik = useFormik({
        initialValues: {
            card_number: modal?.info?.card_number,
            iban: modal?.info?.iban.slice(2, 23),
        },
        validationSchema: validationSchemaCreditcard,
        onSubmit: (values) => {
            mutate({ id: modal?.info?.id!, data: { card_number: values.card_number!, iban: `IR${values.iban}` } })
        }
    })

    const onClose = () => {
        setModal({ open: "", info: null })
    }

    useEffect(() => {
        if (isSuccess) {
            onClose()
        }
    }, [isSuccess])
    return (
        <Dialog maxWidth="sm" fullWidth open={modal.open === "EDIT"}>
            <div>
                <DialogTitle>
                    <p className='text-center text-[17px] font-bold border-b border-gray-300 pb-4'>ویرایش کارت بانکی</p>
                </DialogTitle>
                <DialogContent className=''>
                    <div className="flex-1 w-full">
                        <Form formik={formik} />
                    </div>
                </DialogContent>
                <DialogActions className='flex items-center gap-10 mt-8'>
                    <Button onClick={onClose} sx={{ border: "1px solid #D1D5DB" }} containerClass='!bg-transparent ' className='!text-gray-600' name='انصراف' />
                    <Button isLoading={isLoading} containerClass='!bg-green-500' onClick={formik.handleSubmit} name="ویرایش" />
                </DialogActions>
            </div>

        </Dialog>
    )
}

export default EditCreditcard
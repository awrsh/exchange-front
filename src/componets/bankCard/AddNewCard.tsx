import { useFormik } from "formik"
import Button from "../common/Button";
import Card from "./Card";
import useAddCreditCard from "../../hook/mutation/creditcard/useAddCreditcard";
import { useEffect } from "react";
import { validationSchemaCreditcard } from "../../helpers/utils/validationSchema";
import Form from "./Form";

const AddNewCard = () => {
    const { mutate, isLoading, isSuccess } = useAddCreditCard()
    const formik = useFormik({
        initialValues: {
            card_number: "",
            iban: ""
        },
        validationSchema: validationSchemaCreditcard,
        onSubmit: (values) => {
            mutate({ ...values, iban: `IR${values.iban}` })
        }
    })

    useEffect(() => {
        if (isSuccess) {
            formik.resetForm()
        }
    }, [isSuccess])

    return (
        <div className="bg-white bg-dark flex  flex-col rounded-xl p-3">
            <p className="font-bold text-xl border-b border-neutral-200 pb-3">افزودن کارت بانکی جدید</p>
            <div className="mt-5 w-full flex flex-col-reverse lg:flex-row gap-10 items-center">
                <div className="flex-1 w-full">
                    <Form formik={formik} />
                    <Button onClick={formik.handleSubmit} isLoading={isLoading} containerClass="!mt-8 !mx-auto w-[120px]" name="ثبت کارت بانکی" />
                </div>
                <div className="flex-1 w-full">
                    <Card shaba={formik.values.iban} cardId={formik.values.card_number} />
                </div>
            </div>
        </div>
    )
}

export default AddNewCard
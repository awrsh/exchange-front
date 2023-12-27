import * as Yup from "yup"

export const validationSchemaPhone = Yup.object({
    phone: Yup.string().required("فیلد اجباری می باشد").matches(/^09\d{2}\d{7}$/,"فرمت شماره تلفن صحیح نمی‌باشد")
})
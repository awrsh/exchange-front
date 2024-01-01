import * as Yup from "yup"

export const validationSchemaLogin = Yup.object({
    mobile: Yup.string().required("فیلد اجباری می باشد").matches(/^09\d{2}\d{7}$/,"فرمت شماره تلفن صحیح نمی‌باشد"),
    password: Yup.string().required("فیلد اجباری می باشد"),
})
export const validationSchemaRegister = Yup.object({
    mobile: Yup.string().required("فیلد اجباری می باشد").matches(/^09\d{2}\d{7}$/,"فرمت شماره تلفن صحیح نمی‌باشد"),
    first_name: Yup.string().required("فیلد اجباری می باشد"),
    last_name: Yup.string().required("فیلد اجباری می باشد"),
    password: Yup.string().required("فیلد اجباری می باشد"),
    passwordConfirmation: Yup.string().required("فیلد اجباری می باشد")
    .oneOf([Yup.ref('password'), null!], 'تکرار رمز عبور اشتباه است')})
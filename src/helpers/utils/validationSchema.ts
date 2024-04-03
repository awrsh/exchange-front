import * as Yup from "yup"

export const validationSchemaLogin = Yup.object({
    mobile: Yup.string().required("فیلد اجباری می باشد").matches(/^09\d{2}\d{7}$/, "فرمت شماره تلفن صحیح نمی‌باشد"),
    password: Yup.string().required("فیلد اجباری می باشد"),
})
export const validationSchemaRegister = Yup.object({
    mobile: Yup.string().required("فیلد اجباری می باشد").matches(/^09\d{2}\d{7}$/, "فرمت شماره تلفن صحیح نمی‌باشد"),
    first_name: Yup.string().required("فیلد اجباری می باشد"),
    last_name: Yup.string().required("فیلد اجباری می باشد"),
    password: Yup.string().required("فیلد اجباری می باشد"),
    passwordConfirmation: Yup.string().required("فیلد اجباری می باشد")
        .oneOf([Yup.ref('password'), null!], 'تکرار رمز عبور اشتباه است')
})
export const validationSchemaRial = Yup.object({
    amount:Yup.string().required("فیلد اجباری است"),
})




export const validationSchemaCreditcard = Yup.object({
    card_number: Yup.string().min(16,"شماره کارت وارد شده اشتباه می باشد").max(16,"شماره کارت وارد شده اشتباه می باشد").required("فیلد اجباری می باشد"),
    iban: Yup.string().min(24,"شماره شبای وارد شده اشتباه است").max(24,"شماره شبا نمی تواند بیش از 24 رقم باشد").required("فیلد اجباری می باشد"),
})
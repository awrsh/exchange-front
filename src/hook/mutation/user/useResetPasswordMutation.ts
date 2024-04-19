import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import {  PayloadResetPassword } from '../../../types/Auth'
import { resetPassword } from '../../../services/auth'


const useResetPasswordMutation = () => {
    return useMutation(async (data: PayloadResetPassword) => await resetPassword(data), {
        onSuccess: async () => {
            successToast("تغیر رمز عبور با موفقیت انجام شد")
        },
        onError: (error: any) => {
            errorToast(error?.response?.data?.error?.message)
        }
    })
}

export default useResetPasswordMutation
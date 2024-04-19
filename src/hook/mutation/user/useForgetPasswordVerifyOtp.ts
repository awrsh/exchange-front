import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { forgetPassword } from '../../../services/auth'
import { PayloadForgetPassword } from '../../../types/Auth'


const useForgetPasswordVerifyOtp = () => {
    return useMutation(async (data: PayloadForgetPassword) => await forgetPassword(data), {
        onSuccess: async () => {
            successToast("تغیر رمز عبور با موفقیت انجام شد")
        },
        onError: (error: any) => {
            errorToast(error?.response?.data?.error?.message)
        }
    })
}

export default useForgetPasswordVerifyOtp
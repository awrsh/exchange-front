import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { forgetPasswordOtp } from '../../../services/auth'


const useForgetPasswordOtpMutation = () => {
    return useMutation(async (data: {mobile:string}) => await forgetPasswordOtp(data), {
        onSuccess: async () => {
            successToast("کد تائید بازیابی رمز عبور برای شما ارسال شد")
        },
        onError: (error: any) => {
            errorToast(error?.response?.data?.error?.message)
        }
    })
}

export default useForgetPasswordOtpMutation
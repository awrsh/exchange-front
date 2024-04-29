import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { otpTransactionRial } from '../../../services/action';

const useOtpTransactionRialMutation = () => {
  return useMutation(async () => await otpTransactionRial(),{
    onSuccess:()=>{
     
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useOtpTransactionRialMutation
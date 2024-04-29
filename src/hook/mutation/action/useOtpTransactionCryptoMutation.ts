import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { otpTransactionCrypto } from '../../../services/action';

const useOtpTransactionCryptoMutation = () => {
  return useMutation(async () => await otpTransactionCrypto(),{
    onSuccess:()=>{
     
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useOtpTransactionCryptoMutation
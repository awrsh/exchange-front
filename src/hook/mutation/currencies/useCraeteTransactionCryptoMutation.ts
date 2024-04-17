import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { createTransactionCrypto } from '../../../services/currencies'

const useCraeteTransactionCryptoMutation = () => {
  return useMutation(async (data:any) => await createTransactionCrypto(data),{
    onSuccess:()=>{
        successToast("با موفقیت انجام شد")
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useCraeteTransactionCryptoMutation
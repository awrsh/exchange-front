import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { craeteWalletAddress } from '../../../services/currencies'

const useCraeteWalletAddress = () => {
  return useMutation(async (data:any) => await craeteWalletAddress(data),{
    onSuccess:()=>{
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useCraeteWalletAddress
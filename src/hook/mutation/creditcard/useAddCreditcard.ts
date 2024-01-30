import { useMutation, useQueryClient } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { addCreditcard } from '../../../services/creditcard'
import { TypeAddCreditcard } from '../../../types/Creditcard'
import { CreditCard } from '../../../helpers/constants/query-keys'

const useAddCreditCard = () => {
    const qyeryClient = useQueryClient() 
  return useMutation(async (data:TypeAddCreditcard) => await addCreditcard(data),{
    onSuccess:()=>{
  qyeryClient.refetchQueries({queryKey:CreditCard.GETALLCREDITCARD})
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useAddCreditCard
import { useMutation, useQueryClient } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { CreditCard } from '../../../helpers/constants/query-keys'
import { deleteCreditcard } from '../../../services/creditcard'

const useDeleteCreditCard = () => {
    const qyeryClient = useQueryClient() 
  return useMutation(async (id:number) => await deleteCreditcard(id),{
    onSuccess:()=>{
  qyeryClient.refetchQueries({queryKey:CreditCard.GETALLCREDITCARD})
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useDeleteCreditCard
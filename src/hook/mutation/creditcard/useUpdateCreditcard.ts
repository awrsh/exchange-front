import { useMutation, useQueryClient } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { CreditCard } from '../../../helpers/constants/query-keys'
import { updateCreditcard } from '../../../services/creditcard'
import { TypeAddCreditcard } from '../../../types/Creditcard'

const useUpdateCreditCard = () => {
    const qyeryClient = useQueryClient() 
  return useMutation(async ({id,data}:{id:number,data:TypeAddCreditcard}) => await updateCreditcard({id,data}),{
    onSuccess:()=>{
  qyeryClient.refetchQueries({queryKey:CreditCard.GETALLCREDITCARD})
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useUpdateCreditCard
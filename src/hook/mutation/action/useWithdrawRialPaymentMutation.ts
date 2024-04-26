import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { withdreawPayment } from '../../../services/action';

const useWithdrawRialPaymentMutation = () => {
  return useMutation(async (data:{card_number:string,amount:number}) => await withdreawPayment(data),{
    onSuccess:(data)=>{
      if(data.url){
        location.href = data.url
      }
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useWithdrawRialPaymentMutation
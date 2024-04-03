import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { createRialPayment } from '../../../services/action';

const useCreateRialPaymentMutation = () => {
  return useMutation(async (data:{card_number:string,amount:number}) => await createRialPayment(data),{
    onSuccess:(data)=>{
      if(data.url){
        location.href = data.url
      }
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useCreateRialPaymentMutation
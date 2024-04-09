import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { newOrder } from '../../../services/order'
import { Order } from '../../../types/Order'

const useOrderMutation = () => {
  return useMutation(async (data:Order) => await newOrder(data),{
    onSuccess:(data:any)=>{
      successToast(`${data.object.type === "buy"?"خرید":"فروش"} شما با موفقیت انجام شد`)
    },
    onError:(error:any)=>{
      errorToast(error?.response?.data?.error?.description)
    }
  })
}

export default useOrderMutation
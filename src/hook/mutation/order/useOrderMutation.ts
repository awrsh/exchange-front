import { useMutation } from 'react-query'
import { errorToast, successToast } from '../../../helpers/utils/error'
import { newOrder } from '../../../services/order'
import { Order } from '../../../types/Order'
import { getUser } from '../../../services/auth'
import useAuthStore from '../../../stores/user-store'

const useOrderMutation = () => {
  const { setUser } = useAuthStore()
  return useMutation(async (data: Order) => await newOrder(data), {
    onSuccess: async (data: any) => {
      const user = await getUser()
      setUser({ user })
      successToast(`${data.object.type === "buy" ? "خرید" : "فروش"} شما با موفقیت انجام شد`)
    },
    onError: (error: any) => {
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useOrderMutation
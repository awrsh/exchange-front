import { useMutation } from 'react-query'
import { errorToast } from '../../../helpers/utils/error'
import { calculateCommission } from '../../../services/transactions'


const useCalculateCommissionMutation = () => {
  return useMutation(async (data: {network_code:string,currency_code:string}) => await calculateCommission(data), {
    onSuccess: async () => {

    },
    onError: (error: any) => {
      errorToast(error?.response?.data?.error?.message)
    }
  })
}

export default useCalculateCommissionMutation
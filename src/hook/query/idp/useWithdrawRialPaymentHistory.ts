import { useQuery } from 'react-query'
import { getWithdrawRialHistory } from '../../../services/idp'

const useWithdrawRialPaymentHistory = () => {
  return useQuery(["rial_withdraw"], async () => await getWithdrawRialHistory(), {

  })
}

export default useWithdrawRialPaymentHistory
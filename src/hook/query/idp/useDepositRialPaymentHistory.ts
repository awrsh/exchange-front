import { useQuery } from 'react-query'
import { getDepositRialHistory } from '../../../services/idp'

const useDepositRialPaymentHistory = () => {
  return useQuery(["Rial_deposit"], async () => await getDepositRialHistory(), {
    cacheTime:0
  })
}

export default useDepositRialPaymentHistory
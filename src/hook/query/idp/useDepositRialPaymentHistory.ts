import { useQuery } from 'react-query'
import { getDepositRialHistory } from '../../../services/idp'

const useDepositRialPaymentHistory = () => {
  return useQuery(["Rial_deposit"], async () => await getDepositRialHistory(), {

  })
}

export default useDepositRialPaymentHistory
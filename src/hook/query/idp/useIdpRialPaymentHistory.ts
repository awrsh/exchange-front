import { useQuery } from 'react-query'
import { Idp } from '../../../helpers/constants/query-keys'
import { getRialHistory } from '../../../services/idp'

const useIdpRialPaymentHistory = () => {
  return useQuery([Idp.RIAL_HISTORY], async () => await getRialHistory(), {

  })
}

export default useIdpRialPaymentHistory
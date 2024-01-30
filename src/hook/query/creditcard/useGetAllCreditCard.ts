import { useQuery } from 'react-query'
import { CreditCard } from '../../../helpers/constants/query-keys'
import { getCrditcard } from '../../../services/creditcard'

const useGetCreditCardRuels = () => {
  return useQuery([CreditCard.GETALLCREDITCARD], async () => await getCrditcard(), {

  })
}

export default useGetCreditCardRuels
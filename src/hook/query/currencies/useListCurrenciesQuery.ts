import { useQuery } from 'react-query'
import {Currencies } from '../../../helpers/constants/query-keys'
import { listCurrencies } from '../../../services/currencies'

const useListCurrenciesQuery = () => {
  return useQuery([Currencies.CURRENCIES], async () => await listCurrencies(), {

  })
}

export default useListCurrenciesQuery
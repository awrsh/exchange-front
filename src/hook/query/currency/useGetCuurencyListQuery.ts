import { useQuery } from 'react-query'
import {Currencies } from '../../../helpers/constants/query-keys'
import { getCurrency } from '../../../services/currencies'

const useGetCuurencyListQuery = () => {
  return useQuery([Currencies.CURRENCIES], async () => await getCurrency(), {

  })
}

export default useGetCuurencyListQuery
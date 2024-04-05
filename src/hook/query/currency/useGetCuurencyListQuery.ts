import { useQuery } from 'react-query'
import {Currencies } from '../../../helpers/constants/query-keys'
import { getCurrency } from '../../../services/currencies'

const useGetCuurencyListQuery = (show_in_dashboard:boolean) => {
  return useQuery([Currencies.CURRENCIES], async () => await getCurrency(show_in_dashboard), {

  })
}

export default useGetCuurencyListQuery
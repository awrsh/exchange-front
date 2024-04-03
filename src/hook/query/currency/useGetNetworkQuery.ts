import { useQuery } from 'react-query'
import {Currencies } from '../../../helpers/constants/query-keys'
import { getNetwork } from '../../../services/currencies'

const useGetNetworkQuery = () => {
  return useQuery([Currencies.NETWORKS], async () => await getNetwork(), {

  })
}

export default useGetNetworkQuery
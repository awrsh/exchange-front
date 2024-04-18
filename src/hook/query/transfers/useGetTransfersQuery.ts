import { useQuery } from 'react-query'
import { getTransfers } from '../../../services/transfers'


const useGetTransfersQuery = () => {
  return useQuery(["transfers"], async () => await getTransfers(), {
    cacheTime:0

  })
}

export default useGetTransfersQuery
import { useQuery } from 'react-query'
import { getTickets } from '../../../services/transactions'


const useGetTicketsQuery = () => {
  return useQuery(["tickets"], async () => await getTickets(), {
    cacheTime: 0
  })
}

export default useGetTicketsQuery
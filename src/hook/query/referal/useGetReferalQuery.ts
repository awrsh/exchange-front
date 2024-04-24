import { useQuery } from 'react-query'
import { getReferal } from '../../../services/referal'


const useGetReferalQuery = () => {
  return useQuery(["referal"], async () => await getReferal(), {
    cacheTime: 0
  })
}

export default useGetReferalQuery
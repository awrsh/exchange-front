import { useQuery } from 'react-query'
import { getUserHistory } from '../../../services/auth'


const useUserHistoryQuery = () => {
  return useQuery(["history-user"], async () => await getUserHistory(), {

  })
}

export default useUserHistoryQuery
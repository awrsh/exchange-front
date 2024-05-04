import { useQuery } from 'react-query'
import { getNotfications } from '../../../services/notification'

const useGetAllNotification = () => {
  return useQuery(["notifications"], async () => await getNotfications(), {
    cacheTime:0
  })
}

export default useGetAllNotification
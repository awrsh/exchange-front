import { useQuery } from 'react-query'
import { Authority } from '../../../helpers/constants/query-keys'
import { getAuthorityLevels } from '../../../services/authority'

const useGetAuthorityLevels = () => {
  return useQuery([Authority.LEVEL],async()=> await getAuthorityLevels(),{

  })
}

export default useGetAuthorityLevels
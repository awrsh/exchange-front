import { useQuery } from 'react-query'
import { Authority } from '../../../helpers/constants/query-keys'
import { getAuthorityRuels } from '../../../services/authority'

const useGetAuthorityRuels = () => {
  return useQuery([Authority.RUELS], async () => await getAuthorityRuels(), {

  })
}

export default useGetAuthorityRuels
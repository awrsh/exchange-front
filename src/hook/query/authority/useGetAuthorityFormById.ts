import { useQuery } from 'react-query'
import { Authority } from '../../../helpers/constants/query-keys'
import { getAuthorityRuels } from '../../../services/authority'
import { useParams } from 'react-router-dom';

const useGetAuthorityRuels = () => {
  const { id } = useParams();

  return useQuery([Authority.RUELS], async () => await getAuthorityRuels(id!), {

  })
}

export default useGetAuthorityRuels
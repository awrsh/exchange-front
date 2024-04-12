import { useQuery } from 'react-query'
import { getTransactionCrypto } from '../../../services/transactions'


const useGetTransactionCryptoQuery = () => {
  return useQuery(["crypto"], async () => await getTransactionCrypto(), {

  })
}

export default useGetTransactionCryptoQuery
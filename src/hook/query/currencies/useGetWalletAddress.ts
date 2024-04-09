import { useQuery } from 'react-query'
import { getWalletAddress, listCurrencies } from '../../../services/currencies'
type Props = {
    currency_code: string, network_code: string,
    enabled:boolean
}
const useGetWalletAddress = (data: Props) => {
    return useQuery([""], async () => await getWalletAddress(data), {
        enabled: data.enabled
    })
}

export default useGetWalletAddress
import { useQuery } from 'react-query'
import { getWalletAddress } from '../../../services/currencies'
import { errorToast } from '../../../helpers/utils/error'
// import { getWalletAddress, listCurrencies } from '../../../services/currencies'
type Props = {
    currency_code: string, network_code: string,
    enabled:boolean
}
const useGetWalletAddress = (data: Props) => {
    return useQuery(["",data.currency_code,data.network_code], async () => await getWalletAddress(data), {
        enabled: data.enabled,
        onSuccess:(data)=>{
            if(data.objects?.length === 0){
                errorToast("شبکه ای برای این ارز ثبت نشده است")
            }
        }
    })
}

export default useGetWalletAddress
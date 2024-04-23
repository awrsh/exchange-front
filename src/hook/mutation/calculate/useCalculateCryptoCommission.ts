import { useMutation } from "react-query"
import { errorToast } from "../../../helpers/utils/error"
import { calculateCommissionCrypto } from "../../../services/calculate"
type Data = {
    "currency_code": string,
    "base_currency_code": "IRT" | "USDT",
    "amount"?: string,
    "cost"?: string,
    "type": "buy" | "sell"
}
const useCalculateCryptoCommission = () => {
    return useMutation(async (data: Data) => await calculateCommissionCrypto(data), {
        onSuccess: () => {

        },
        onError: (error: any) => {
            errorToast(error.response.data.API_ERROR.description)
        }
    })
}

export default useCalculateCryptoCommission
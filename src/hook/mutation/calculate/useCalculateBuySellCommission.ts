import { useMutation } from "react-query"
import { errorToast } from "../../../helpers/utils/error"
import { getCalculateBuySell } from "../../../services/calculate"
type Data = {
    "currency_code": string,
    "base_currency_code": "IRT" | "USDT",
    "amount"?: string,
    "cost"?: string,
    "type": "buy" | "sell"
}
const useCalculateBuySellCommission = () => {
  return useMutation(async (data: Data) => await getCalculateBuySell(data), {
    onSuccess: () => {
      
    },
    onError: (error: any) => {
      errorToast(error.response.data.API_ERROR.description)
    }
  })
}

export default useCalculateBuySellCommission
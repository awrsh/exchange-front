import { getRoute } from "../helpers/utils/services";
import client from "./utils/client";

type Data = {
  "currency_code": string,
  "base_currency_code": "IRT" | "USDT",
  "amount"?: string,
  "cost"?: string,
  "type": "buy" | "sell"
}

type PayloadData = {
  amount
  :
  number
  amount_after_commission
  :
  number
  commission
  :
  number
  cost
  :
  number
  current_price
  :
  number
}
// export const getCrditcard = async (data) => {
//     const url = getRoute({ route: `/orders/calculate-buysell-commission/` });
//     return await client<any>({ url ,method:"POST",data});
// };

export const calculateCommissionCrypto = async (data: Data) => {
  const url = getRoute({ route: `/transactions/crypto/calculate-commission/` });
  return await client<any>({ url, method: "POST", data });
};
export const getCalculateBuySell = async (data: Data) => {
  const url = getRoute({ route: `/orders/calculate-buysell-commission/` });
  return await client<PayloadData>({ url, method: "POST", data });
};
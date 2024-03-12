
import Layout from "../componets/common/Layout"
import CardInfomationCurrentPrice from "../componets/currentPrice/CardInfomationCurrentPrice"
import ListCurrency from "../componets/currentPrice/ListCurrency"
import { informationCurrentPrice } from "../helpers/utils/data"
import useListCurrenciesQuery from "../hook/query/currencies/useListCurrenciesQuery"

const CurrentPrice = () => {
  const { data } = useListCurrenciesQuery()
  console.log(data)
  return (
    <Layout>
      <div className="w-[95%] mx-auto mb-10">
        <h1 className="text-xl font-bold">قیمت ارز های دیجیتال</h1>
        <div className="mt-7 flex justify-between overflow-auto items-end  gap-4 ">

          {
            informationCurrentPrice?.map((currency) => {
              if(!currency?.price_info?.price) return
              if(Number(currency?.price_info?.price) === 0) return
              // @ts-ignore
              return <CardInfomationCurrentPrice key={currency.id} currency={currency} />
            })
          }
        </div>

        <ListCurrency />
      </div>
    </Layout>
  )
}

export default CurrentPrice

import Layout from "../componets/common/Layout"
import CardInfomationCurrentPrice from "../componets/currentPrice/CardInfomationCurrentPrice"
import ListCurrency from "../componets/currentPrice/ListCurrency"
import { informationCurrentPrice } from "../helpers/utils/data"

const CurrentPrice = () => {

  return (
    <Layout>
      <div className="w-[95%] mx-auto">
        <h1 className="text-xl font-bold">قیمت ارز های دیجیتال</h1>
        <div className="mt-7 flex justify-between items-end  gap-4 ">

          {
            informationCurrentPrice.map((crypto, idx) => (
              <CardInfomationCurrentPrice key={idx} crypto={crypto} />
            ))
          }
        </div>

        <ListCurrency />
      </div>
    </Layout>
  )
}

export default CurrentPrice
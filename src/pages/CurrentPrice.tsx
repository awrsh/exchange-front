
import BtnsAction from "../componets/common/BtnsAction"
import Layout from "../componets/common/Layout"
import ListCurrency from "../componets/currentPrice/ListCurrency"
import useSetTitleDocument from "../hook/common/useSetTitleDocument"

const CurrentPrice = () => {
  useSetTitleDocument({ title: "قیمت ارز دیجیتال" })
  return (
    <Layout>
      <div className="w-[95%] mx-auto mb-10">
        <div className='flex items-center mt-1 justify-between'>
          <h1 className='font-bold text-xl'>قیمت لحضه‌ای</h1>
          <BtnsAction />
        </div>
        <ListCurrency />
      </div>
    </Layout>
  )
}

export default CurrentPrice
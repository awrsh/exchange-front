
import Layout from "../componets/common/Layout"
import ListCurrency from "../componets/currentPrice/ListCurrency"
import useSetTitleDocument from "../hook/common/useSetTitleDocument"

const CurrentPrice = () => {
  useSetTitleDocument({title:"قیمت ارز دیجیتال"})
  return (
    <Layout>
      <div className="w-[95%] mx-auto mb-10">
        <h1 className="text-xl font-bold">قیمت ارز های دیجیتال</h1>
        <ListCurrency />
      </div>
    </Layout>
  )
}

export default CurrentPrice
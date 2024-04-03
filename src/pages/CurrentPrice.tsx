
import Layout from "../componets/common/Layout"
import CardInfomationCurrentPrice from "../componets/currentPrice/CardInfomationCurrentPrice"
import ListCurrency from "../componets/currentPrice/ListCurrency"
import useGetCuurencyListQuery from "../hook/query/currency/useGetCuurencyListQuery"

const CurrentPrice = () => {
  const { data } = useGetCuurencyListQuery()
  return (
    <Layout>
      <div className="w-[95%] mx-auto mb-10">
        <h1 className="text-xl font-bold">قیمت ارز های دیجیتال</h1>
        <div className="mt-7 flex justify-between overflow-auto items-end  gap-4 ">

          {
            data?.objects?.map((currency) => {
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
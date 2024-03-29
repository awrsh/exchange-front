import AddNewCard from "../componets/bankCard/AddNewCard"
import Banks from "../componets/bankCard/Banks"
import Layout from "../componets/common/Layout"
import WithTokenCkeck from "../hook/common/WithTokenCkeck"

const BankCard = () => {
  return (
    <Layout>
      <div className="w-[95%] mx-auto">
        <AddNewCard />
        <Banks />
      </div>
    </Layout>
  )
}

export default WithTokenCkeck()(BankCard) 
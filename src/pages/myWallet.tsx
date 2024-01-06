import Layout from "../componets/common/Layout"
import CardInventory from "../componets/my-wallet/CardInventory"
import Inventory from "../componets/my-wallet/inventory"
import { myWallet } from "../helpers/utils/data"

const MyWallet = () => {
    return (
        <Layout>
            <div className="pb-10 w-[95%] mx-auto">
                <h1 className="text-xl font-bold">کیف پول‌ها</h1>
                <Inventory />
                <div className="grid grid-cols-3 gap-5 mt-6">
                    {myWallet.map((wallet, idx) => (
                      <CardInventory wallet={wallet} key={idx}/>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default MyWallet
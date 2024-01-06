import Layout from "../componets/common/Layout"
import Chart from "../componets/home/Chart"
import ExChange from "../componets/home/ExChange"
import ListCryptocurrencies from "../componets/home/ListCryptocurrencies"
import Orders from "../componets/home/Orders"

const ExChangePage = () => {
    return (
        <Layout>
            <div className='w-[95%] lg:h-screen pb-10 flex flex-col lg:flex-row gap-3 mx-auto mt-3'>
                <ListCryptocurrencies />
                <div className='flex-1 flex flex-col max-w-full overflow-auto hide-scroll space-y-3'>
                    <Chart />
                    <ExChange />
                </div>
                <Orders />
            </div>
        </Layout>
    )
}

export default ExChangePage
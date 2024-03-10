import Layout from "../componets/common/Layout"
import Chart from "../componets/home/Chart"
import ExChange from "../componets/home/ExChange"
import ListCryptocurrencies from "../componets/home/ListCryptocurrencies"
import Orders from "../componets/home/Orders"

const ExChangePage = () => {
    return (
        <Layout containerClass="h-screen overflow-hidden" className="lg:!mt-3 lg:!pb-3">
            <div className='w-[98%] lg:h-[92.5vh] pb-10 flex flex-col lg:flex-row gap-3 mx-auto'>
                <ListCryptocurrencies />
                <div className='flex-1 flex flex-col h-full max-w-full overflow-auto hide-scroll space-y-3'>
                    <Chart />
                    <ExChange />
                </div>
                <Orders />
            </div>
        </Layout>
    )
}

export default ExChangePage
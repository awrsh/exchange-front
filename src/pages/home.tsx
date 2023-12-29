import Header from '../componets/common/Header'
import Chart from '../componets/home/Chart'
import ExChange from '../componets/home/ExChange'
import ListCryptocurrencies from '../componets/home/ListCryptocurrencies'
import Orders from '../componets/home/Orders'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='w-[95%] pb-10 flex gap-3 mx-auto mt-3'>
                <ListCryptocurrencies />
                <div className='flex-1 space-y-3'>
                    <Chart />
                    <ExChange />
                </div>
                <Orders />
            </div>
        </div>
    )
}

export default Home
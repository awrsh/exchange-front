import Layout from '../componets/common/Layout'
import CompleteRegistration from '../componets/home/CompleteRegistration'
import FastBuyingSelling from '../componets/home/FastBuyingSelling'
import History from '../componets/home/History'
import TotalAssetValue from '../componets/home/TotalAssetValue'

const Home = () => {
  return (
    <Layout>
        <div className='p-3 px-7'>
            <h1 className='font-bold text-xl'>داشبورد من</h1>
            <div className='mt-5 h-[350px] flex items-center gap-10'>
                <FastBuyingSelling/>
                <TotalAssetValue/>
            </div>

            <CompleteRegistration/>
            <History/>
        </div>
    </Layout>
  )
}

export default Home
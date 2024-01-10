import Layout from '../componets/common/Layout'
import CompleteRegistration from '../componets/home/CompleteRegistration'
import History from '../componets/home/History'
import Information from '../componets/home/Information'
import TotalAssetValue from '../componets/home/TotalAssetValue'

const Home = () => {
  return (
    <Layout>
        <div className='w-[95%] mx-auto'>
            <h1 className='font-bold text-xl'>داشبورد من</h1>
            <div className='mt-5  lg:h-[350px] flex flex-col lg:flex-row items-center gap-10'>
              <Information/>
                <TotalAssetValue/>
            </div>

            <CompleteRegistration/>
            <History/>
        </div>
    </Layout>
  )
}

export default Home
import Layout from '../componets/common/Layout'
import CompleteRegistration from '../componets/home/CompleteRegistration'
import History from '../componets/home/History'
import Information from '../componets/home/Information'
import TotalAssetValue from '../componets/home/TotalAssetValue'
import WithTokenCkeck from '../hook/common/WithTokenCkeck'
import useSetTitleDocument from '../hook/common/useSetTitleDocument'
import useAuthStore from '../stores/user-store'

const Home = () => {
  useSetTitleDocument({title:"پنل کاربری"})
  const { user } = useAuthStore()
  return (
    <Layout>
      <div className='w-[95%] mx-auto'>
        {
          user?.authentication_status === "level_0" &&
          <CompleteRegistration />
        }
        <h1 className='font-bold mt-5 text-xl'>داشبورد من</h1>
        <div className='mt-5  lg:h-[350px] flex flex-col lg:flex-row items-center gap-10'>
          <Information />
          <TotalAssetValue />
        </div>

        <History />
      </div>
    </Layout>
  )
}

export default WithTokenCkeck()(Home)
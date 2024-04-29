import BtnsAction from "../componets/common/BtnsAction"
import Layout from "../componets/common/Layout"
import Information from "../componets/profile/Information"
import LoginHistory from "../componets/profile/LoginHistory"
import NationwideAnnouncements from "../componets/profile/NationwideAnnouncements"
import SupportTickets from "../componets/profile/SupportTickets"
import WithTokenCkeck from "../hook/common/WithTokenCkeck"

const Profile = () => {
  return (
    <Layout>
      <div className="pb-10 w-[95%] mx-auto">
      <div className='flex items-center mt-1 justify-between'>
          <h1 className='font-bold text-xl'>پروفایل</h1>
          <BtnsAction/>
        </div>
        <div className="mt-6 grid lg:grid-cols-2 gap-4">
          <Information />
          <NationwideAnnouncements />
          <LoginHistory />
          <SupportTickets />
        </div>
      </div>
    </Layout>
  )
}

export default WithTokenCkeck()(Profile) 
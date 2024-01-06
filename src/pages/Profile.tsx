import Layout from "../componets/common/Layout"
import Information from "../componets/profile/Information"
import LoginHistory from "../componets/profile/LoginHistory"
import NationwideAnnouncements from "../componets/profile/NationwideAnnouncements"
import SupportTickets from "../componets/profile/SupportTickets"

const Profile = () => {
  return (
    <Layout>
      <div className="pb-10 w-[95%] mx-auto">
        <h1 className="text-xl font-bold">پروفایل</h1>
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

export default Profile
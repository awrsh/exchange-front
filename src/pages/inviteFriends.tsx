import Layout from "../componets/common/Layout"
import FriendsTransaction from "../componets/invite-friends/FriendsTransaction"
import InviteInformation from "../componets/invite-friends/InviteInformation"
import YourReceipts from "../componets/invite-friends/YourReceipts"

const InviteFriends = () => {
  return (
    <Layout>
      <div className="w-[95%] mx-auto">
        <h1 className="text-xl font-bold">دعوت دوستان</h1>
        <div className="mt-7 pb-10 grid lg:grid-cols-2 gap-y-10 gap-x-5">
          <InviteInformation />
          <YourReceipts />
          <FriendsTransaction/>
        </div>

      </div>
    </Layout>
  )
}

export default InviteFriends
import Layout from "../componets/common/Layout"
import FriendsInvited from "../componets/invite-friends/FriendsInvited"
import FriendsTransaction from "../componets/invite-friends/FriendsTransaction"
import InviteInformation from "../componets/invite-friends/InviteInformation"
import YourReceipts from "../componets/invite-friends/YourReceipts"

const InviteFriends = () => {
  return (
    <Layout>
      <div className="w-[95%] mx-auto">
        <h1 className="text-xl font-bold">دعوت دوستان</h1>
        <div className="mt-7 pb-10 grid lg:grid-cols-2 gap-y-7 gap-x-5">
          <InviteInformation />
          <YourReceipts />
          <FriendsTransaction/>
          <FriendsInvited/>
        </div>

      </div>
    </Layout>
  )
}

export default InviteFriends
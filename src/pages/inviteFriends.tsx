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
        <div className="grid grid-cols-4 grid-rows-6 gap-4 mt-6">
          <div className="col-span-2 row-span-2 "> <InviteInformation /></div>
          <div className="col-span-2 row-span-3 col-start-3  "><YourReceipts /></div>
          <div className="col-span-2 row-span-2 col-start-3 row-start-4 ">  <FriendsTransaction /></div>
          <div className="col-span-2 row-span-3 col-start-1 row-start-3 "> <FriendsInvited /></div>
        </div>

        {/* <div className="mt-7 pb-10 grid grid-cols-5 grid-rows-7 gap-4">
          <InviteInformation />
          <YourReceipts />
          <FriendsTransaction />
          <FriendsInvited />
        </div> */}

      </div>
    </Layout>
  )
}

export default InviteFriends 
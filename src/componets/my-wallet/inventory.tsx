import useAuthStore from "../../stores/user-store"

const Inventory = () => {
   const {user} = useAuthStore()
    return (
       <div >
          <p className="text-xl font-bold">ارزش کل دارایی شما</p>
          <p className="text-[24px] mt-2 font-num flex items-center text-gray-600">{Number(user?.total_ir_balance).toLocaleString()}<span className="text-[14px] mx-1 text-black">تومان</span></p>
       </div>
    )
}

export default Inventory
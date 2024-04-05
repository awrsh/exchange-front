import useAuthStore from "../../stores/user-store"

const Inventory = () => {
   const {user} = useAuthStore()
    return (
       <div >
          <p className="text-xs font-regular">موجودی کیف پول شما</p>
          <p className="text-[24px] mt-2 font-num flex items-center">{user?.total_ir_balance}<span className="text-[14px] mx-1">تومان</span></p>
       </div>
    )
}

export default Inventory
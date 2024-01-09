import Table from "../common/Table"

const FriendsInvited = () => {
    return (
        <div className="bg-white flex gap-8 flex-col rounded-xl p-3 ">
            <div className="border-b border-int pb-5">
                <p className="font-bold text-xl">دوستان دعوت شده</p>
            </div>
            <Table length={0} header={["تاریخ", "تعداد(تراکنش)", "پاداش(تومان)"]} />
        </div>
    )
}

export default FriendsInvited
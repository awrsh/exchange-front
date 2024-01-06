import Table from "../common/Table"

const YourReceipts = () => {
    return (
        <div className="bg-white flex gap-6 flex-col rounded-xl p-3 h-[500px]">
            <div className="border-b border-int pb-5">
                <p className="font-bold text-xl">پاداش های دریافتی شما</p>
            </div>
            <Table length={0} header={["دوستان تائید هویت شده","پاداش"]}/>
        </div>
    )
}

export default YourReceipts
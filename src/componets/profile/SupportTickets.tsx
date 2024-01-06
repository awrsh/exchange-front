import Table from '../common/Table'

const SupportTickets = () => {
    return (
        <div className="bg-white flex  flex-col rounded-xl p-3">
            <p className="font-bold text-xl border-b border-neutral-200 pb-3">تیکت های پشتیبانی</p>
            <div className="mt-8">
                <Table length={0} header={["عنوان تیکت", "تاریخ", "وضعیت", "جزئیات"]} />
            </div>
        </div>
    )
}

export default SupportTickets
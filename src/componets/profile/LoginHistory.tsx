import Table from "../common/Table"

const LoginHistory = () => {
    return (
        <div className="bg-white flex  flex-col rounded-xl p-3">
            <p className="font-bold text-xl border-b border-neutral-200 pb-3">تاریخچه ورود</p>
            <div className="mt-8">
                <Table length={0} header={["وضعیت", "زمان", "دستگاه", "آی پی"]} />
            </div>
        </div>
    )
}

export default LoginHistory
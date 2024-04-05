import { Link } from "react-router-dom"
import { PieChart } from '@mui/x-charts/PieChart';
import useAuthStore from "../../stores/user-store";

const TotalAssetValue = () => {
    const {user}  = useAuthStore()
    return (
        <div className="flex-1 flex flex-col lg:flex-row w-full justify-center items-center bg-white p-3 rounded-xl space-y-10 h-full bg-dark">
            <div className="flex-1 flex flex-col items-center gap-4">
                <div>
                    <p className="text-xl">ارزش کل داریی</p>
                    <p className="font-num font-bold mt-5 text-3xl ">{Number(user?.total_ir_balance).toLocaleString()} <span className="text-xl">تومان</span></p>
                </div>
                <div className="flex w-full justify-between">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full block bg-amber-500" />
                            <p className="font-bold font-num">بک اند نفرستاده <span className="text-xs">$</span></p>
                        </div>
                        <p className="text-xs text-neutral-600">موجودی ارزی</p>
                        <Link to={"#"} className="font-light text-xs text-blue-500">خرید و فروش ارز</Link>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-1">
                            <span className="w-3 h-3 rounded-full block bg-green-500" />
                            <p className="font-bold font-num">{Number(user?.total_ir_balance).toLocaleString()} <span className="text-xs">تومان</span></p>
                        </div>
                        <p className="text-xs text-neutral-600">موجودی تومانی</p>
                        <Link to={"#"} className="font-light text-xs text-blue-500">خرید و فروش تومانی</Link>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 justify-center items-center">
                <div className="space-y-2  w-fit">
                    <div className="flex items-center gap-2">
                        <p className="font-light text-xs w-20">موجودی تومانی</p>
                        <div className="bg-green-500 w-14 h-4 rounded-sm"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="font-light text-xs w-20">موجودی ارزی</p>
                        <div className="bg-amber-500 w-14 h-4 rounded-sm"/>
                    </div>
                </div>
                <PieChart
                colors={["#f59e0b","#22c55e"]}
                    series={[
                        {
                            data: [
                                { id: 0, value: 0,  },
                                { id: 1, value: Number(user?.total_ir_balance), },
                            ],
                        },
                    ]}
                    height={200}
                    width={280}
                />
            </div>
        </div>
    )
}

export default TotalAssetValue
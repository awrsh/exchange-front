import { orders } from "../../helpers/utils/data"

const Orders = () => {
    return (
        <div className="min-w-[300px] px-4 pb-4 bg-white rounded-xl">
            <h1 className="font-medium text-xs text-center py-3">سفارشات</h1>
            <div className="flex items-center mt-3 border-b pb-1 text-zinc-600 justify-between font-medium text-xs text-center">
                <p className="flex-1">قیمت</p>
                <p className="flex-1">مقدار</p>
                <p className="flex-1">کل</p>
            </div>
            <div>
                <span className="block border mt-4 py-1 text-red-600 text-center font-num rounded-xl">725,534,756</span>
                <div className="space-y-1 mt-3">
                    {orders.map((order, idx) => (
                        <div className="relative">
                            <div className={`flex relative z-50 w-full h-full items-center rounded text-neutral-800 p-1 font-num text-xs`} key={idx}>
                                <p className="flex-1 text-center">{order.price.toLocaleString()}</p>
                                <p className="flex-1 text-center">{order.count}</p>
                                <p className="flex-1 text-center">{order.total.toLocaleString()}</p>
                            </div>
                            <div style={{ width: `${order.percent}%` }} className="absolute top-0 right-0 bg-red-100 w-full h-[25px] z-10" />
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <span className="block border mt-4 py-1 text-green-600 text-center font-num rounded-xl">725,534,756</span>
                <div className="space-y-1 mt-3">
                    {orders.map((order, idx) => (
                        <div className="relative">
                            <div className={`flex relative z-50 w-full h-full items-center rounded text-neutral-800 p-1 font-num text-xs`} key={idx}>
                                <p className="flex-1 text-center">{order.price.toLocaleString()}</p>
                                <p className="flex-1 text-center">{order.count}</p>
                                <p className="flex-1 text-center">{order.total.toLocaleString()}</p>
                            </div>
                            <div style={{ width: `${order.percent}%` }} className="absolute top-0 right-0 bg-green-200 w-full h-[25px] z-10" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Orders
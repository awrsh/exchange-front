interface Props {
    crypto: any
}
const CardInfomationCurrentPrice = ({ crypto }: Props) => {
    return (
        <div className="flex-1 relative p-2 group cursor-pointer bg-white bg-dark rounded-lg overflow-hidden">
            <div className="">
                <p className="text-[13px]">{crypto.title}</p>
                <p className="flex items-center justify-center py-3 text-neutral-900  gap-1 text-[13px]">
                    <span className="font-bold">{crypto.nameFn}</span>
                    <span className="text-[9px] font-regular text-neutral-500">{crypto.name}</span>
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <img className="w-8 h-8" src={crypto.icon} />
                        <p className="text-xs text-neutral-400 font-num">{crypto.price} <span>تومان</span></p>
                    </div>
                    <p className="font-num text-xs">{crypto.precent >= 0 ? <span className="text-green-500">%{crypto.precent}</span> : <span className="text-red-500 block [direction:ltr]">%{crypto.precent}</span>}</p>
                </div>
            </div>

            <div className="space-y-3 mt-3
             transition-all duration-300 w-full ">
                <div className="flex justify-between items-center text-xs font-bold text-neutral-600">
                    <p>قیمت خرید</p>
                    <p className="font-num">{crypto.buy.toLocaleString()} تومان</p>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-neutral-600">
                    <p>قیمت فروش</p>
                    <p className="font-num">{crypto.sell.toLocaleString()} تومان</p>
                </div>
            </div>
        </div>
    )
}

export default CardInfomationCurrentPrice
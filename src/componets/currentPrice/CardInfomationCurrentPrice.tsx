import { Currency } from "../../types/Currencies"

interface Props {
    currency: Currency
}
const CardInfomationCurrentPrice = ({ currency }: Props) => {
    return (
        <div className="flex-1 relative p-2 group cursor-pointer bg-white bg-dark rounded-lg overflow-hidden min-w-[280px]">
            <div className="">
                <p className="text-[13px]">{currency.title}</p>
                <p className="flex items-center justify-center py-3 text-neutral-900  gap-1 text-[13px]">
                    <span className="font-bold">{currency.title_fa}</span>
                    <span className="text-[9px] font-regular text-neutral-500">{currency?.price_info?.change}</span>
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <img className="w-8 h-8" src={currency.image} />
                        <p className="text-xs text-neutral-400 font-num">{Number(currency?.price_info?.price).toLocaleString()} <span>تومان</span></p>
                    </div>
                    <p className="font-num text-xs">{currency?.price_info?.change >= 0 ? <span className="text-green-500">%{currency?.price_info?.change}</span> : <span className="text-red-500 block [direction:ltr]">%{currency?.price_info?.change}</span>}</p>
                </div>
            </div>

            <div className="space-y-3 mt-3
             transition-all duration-300 w-full ">
                <div className="flex justify-between items-center text-xs font-bold text-neutral-600">
                    <p>قیمت خرید</p>
                    <p className="font-num">{Number(Number(currency?.price_info?.price) - 100000).toLocaleString()} تومان</p>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-neutral-600">
                    <p>قیمت فروش</p>
                    <p className="font-num">{Number(Number(currency?.price_info?.price) + 100000).toLocaleString()} تومان</p>
                </div>
            </div>
        </div>
    )
}

export default CardInfomationCurrentPrice
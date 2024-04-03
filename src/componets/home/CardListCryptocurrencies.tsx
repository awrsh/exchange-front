import { Currency } from "../../types/Currencies"

interface Props {
    crypto: Currency
}
const CardListCryptocurrencies = ({ crypto }: Props) => {
    
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1  items-center gap-2">
                <img className="w-6 h-6" src={crypto.image} />
                <p className="font-bold text-[13px]">{crypto.title}</p>
            </div>
            <p className="flex-1 text-center text-xs font-num">{Number(crypto.price_info_amount).toLocaleString()}</p>
            <div className="flex-1 flex justify-center ">
                <span className={`text-center text-xs font-num ${Number(crypto.price_info_change) < 0 ?"text-red-600":"text-green-600"}`}>%</span>
                <p className={`text-center [direction:ltr] text-xs font-num ${Number(crypto.price_info_change) < 0 ?"text-red-600":"text-green-600"}`}>{crypto.price_info_change}</p>
            </div>
        </div>
    )
}

export default CardListCryptocurrencies
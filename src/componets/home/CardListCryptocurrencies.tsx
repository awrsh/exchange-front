interface Props {
    crypto: {
        name: string;
        imgUrl: string;
        price: number;
        percent: number;
    }
}
const CardListCryptocurrencies = ({ crypto }: Props) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1  items-center gap-2">
                <img className="w-6 h-6" src={crypto.imgUrl} />
                <p className="font-bold text-neutral-800 text-[13px]">{crypto.name}</p>
            </div>
            <p className="flex-1 text-center text-neutral-800 text-xs font-num">{crypto.price.toLocaleString()}</p>
            <div className="flex-1 flex justify-center ">
                <span className={`text-center text-neutral-800 text-xs font-num ${crypto.percent < 0 ?"text-red-600":"text-green-600"}`}>%</span>
                <p className={`text-center text-neutral-800 [direction:ltr] text-xs font-num ${crypto.percent < 0 ?"text-red-600":"text-green-600"}`}>{crypto.percent}</p>
            </div>
        </div>
    )
}

export default CardListCryptocurrencies
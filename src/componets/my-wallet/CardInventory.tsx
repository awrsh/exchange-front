import Button from "../common/Button"

interface Props{
wallet:any
}
const CardInventory = ({wallet}:Props) => {
    return (
        <div  className="bg-white shadow p-2 rounded-lg">
            <div className="border-b pb-3 flex items-center gap-2">
                <img className="w-10 h-10" src={wallet.src} />
                <div className="flex flex-col items-center">
                    <span>{wallet.name}</span>
                    <span className="text-xs text-int">IRT</span>
                </div>
            </div>
            <div className="flex my-6 flex-col gap-4 justify-center items-center">
                <span>موجودی</span>
                <span>{wallet.inventory}</span>
            </div>
            <div className="flex items-center justify-end gap-3 ">
                <Button containerClass="flex-1" name="واریز تومانی" />
                <Button containerClass="flex-1 !bg-red-500" name="برداشت تومانی" />
            </div>
        </div>
    )
}

export default CardInventory
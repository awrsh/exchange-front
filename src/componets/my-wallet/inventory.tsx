
const Inventory = () => {
    return (
        <div className="bg-int p-3 flex justify-around rounded-lg mt-5">
            <div className="flex flex-col items-center gap-8">
                <p className="font-bold text-2xl text-white">ارزش کل داریی‌ها(تومان)</p>
                <p className="font-num text-3xl font-bold text-white">2,000,000 <span className="text-lg text-zinc-900">تومان</span></p>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex flex-col items-center">
                    <p className="text-xl text-white">0</p>
                    <span className="text-xs text-neutral-800">موجودی تومانی</span>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-xl text-white">0</p>
                    <span className="text-xs text-neutral-800">موجودی ارزی</span>
                </div>
            </div>
        </div>
    )
}

export default Inventory
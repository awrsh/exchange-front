
const Inventory = () => {
    return (
        <div className="bg-int p-3 flex justify-around rounded-lg mt-5">
            <div className="flex flex-col items-center gap-2 lg:gap-8">
                <p className="font-bold lg:text-2xl text-white">ارزش کل داریی‌ها(تومان)</p>
                <p className="font-num text-xl lg:text-3xl font-bold text-white">2,000,000 <span className=" text-xs lg:text-lg text-zinc-900">تومان</span></p>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex flex-col  items-center">
                    <p className="text-lg lg:text-xl text-white">0</p>
                    <span className="text-xs whitespace-nowrap text-neutral-800">موجودی تومانی</span>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-lg lg:text-xl text-white">0</p>
                    <span className="text-xs whitespace-nowrap text-neutral-800">موجودی ارزی</span>
                </div>
            </div>
        </div>
    )
}

export default Inventory
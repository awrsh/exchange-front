import Table from "../common/Table"

const FriendsTransaction = () => {
  return (
    <div className="bg-white flex gap-8 flex-col rounded-xl p-3 h-[500px]">
      <div className="border-b border-int pb-5">
        <p className="font-bold text-xl">کسب درآمد میلیونی با دعوت دوستان به تراست تتر</p>
        <span className="font-regular text-[13px] text-neutral-500 text-center w-full block mt-4">کد دعوت و یا لینک زیر را برای دوستان خود ارسال کنید و با تایید هویت تعداد هرچه بیشتر دوستانتان، مادام‌العمر تا 55درصد پاداش دریافت نمایید</span>
      </div>
      <Table length={0} header={["تاریخ", "تعداد(تراکنش)", "پاداش(تومان)"]} />
    </div>
  )
}

export default FriendsTransaction
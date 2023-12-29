import CardDetailsPrice from './CardDetailsPrice'

const DetailsPrice = () => {
  return (
    <div className='flex items-center'>
        <div className='flex-1'>
            <p className='font-bold'>USDT/ETH</p>
        </div>
        <CardDetailsPrice title='بالاترین‌قیمت‌روز' price={1420000}/>
        <CardDetailsPrice title='پایین‌ترین‌قیمت‌روز' price={1320000}/>
        <CardDetailsPrice title='معادل تومانی' price={57844554}/>
        <CardDetailsPrice name={1396345} percent={12}/>
    </div>
  )
}

export default DetailsPrice
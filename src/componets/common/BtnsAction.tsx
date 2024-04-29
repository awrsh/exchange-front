import Button from './Button'

const BtnsAction = () => {
  return (
    <div className='flex items-center gap-4'>
        <Button containerClass='!h-[36px] !bg-int' name='واریز'/>
        <Button containerClass='!h-[36px] !bg-green-500' name='برداشت'/>
    </div>
  )
}

export default BtnsAction
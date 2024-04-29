import { useNavigate } from 'react-router-dom'
import Button from './Button'

const BtnsAction = () => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center gap-4'>
        <Button onClick={()=>navigate("/action?select=0")} containerClass='!h-[36px] !bg-int' name='واریز'/>
        <Button onClick={()=>navigate("/action?select=1")}  containerClass='!h-[36px] !bg-green-500' name='برداشت'/>
    </div>
  )
}

export default BtnsAction
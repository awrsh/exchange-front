import { useFormik } from 'formik'
import Input from '../common/Input'
import Tabs from './Tabs'
import CustomSlider from '../common/CustomSlider'
import Button from '../common/Button'
import useAuthStore from '../../stores/user-store'
import useGlobalStore from '../../stores/global-store'

const ExChange = () => {
  const {toggleVerifyAuth} = useGlobalStore()
  const {user} = useAuthStore()
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => { }
  })
  const onClick = () => {
    if (user?.authentication_status === "level_0") {
        toggleVerifyAuth()
    }
}
  return (
    <div className='bg-white bg-dark rounded-xl pb-4'>
      <Tabs />
      <div className='flex flex-col xl:flex-row px-5 gap-5 lg:gap-10'>
        <div className='flex-1 '>
          <Input formik={formik} name='' label='قیمت' />
          <Input formik={formik} name='' label='مقدار' />
          <CustomSlider />
          <Input formik={formik} name='' label='مجموع' />
          <div className='flex items-center justify-between '>
            <p className='text-xs'>کارمزد</p>
            <p className='text-xs text-gray-700'>0.00 %</p>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <p className='text-xs'>دریافتی شما</p>
            <p className='text-xs text-gray-700'>0 BTC</p>
          </div>
          <Button onClick={onClick} containerClass='!bg-green-600 !mt-4' name='خرید' />
        </div>
        <div className='flex-1'>
          <Input formik={formik} name='' label='قیمت' />
          <Input formik={formik} name='' label='مقدار' />
          <CustomSlider  color='#dc2626'/>
          <Input formik={formik} name='' label='مجموع' />
          <div className='flex items-center justify-between '>
            <p className='text-xs'>کارمزد</p>
            <p className='text-xs text-gray-700'>0.00 %</p>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <p className='text-xs'>دریافتی شما</p>
            <p className='text-xs text-gray-700'>0 BTC</p>
          </div>
          <Button onClick={onClick} containerClass='!bg-red-600 !mt-4' name='فروش' />
          
        </div>
      </div>
    </div>
  )
}

export default ExChange
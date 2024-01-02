import { useFormik } from 'formik'
import Input from '../common/Input'
import Tabs from './Tabs'
import CustomSlider from '../common/CustomSlider'
import Button from '../common/Button'

const ExChange = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => { }
  })
  return (
    <div className='bg-white rounded-xl pb-4'>
      <Tabs />
      <div className='flex flex-col xl:flex-row px-5 gap-5 lg:gap-10'>
        <div className='flex-1 '>
          <Input formik={formik} name='' label='قیمت' />
          <Input formik={formik} name='' label='مقدار' />
          <CustomSlider />
          <Button containerClass='!bg-green-600' name='خرید' />
        </div>
        <div className='flex-1'>
          <Input formik={formik} name='' label='قیمت' />
          <Input formik={formik} name='' label='مقدار' />
          <CustomSlider  color='#dc2626'/>
          <Button containerClass='!bg-red-600' name='فروش' />
        </div>
      </div>
    </div>
  )
}

export default ExChange
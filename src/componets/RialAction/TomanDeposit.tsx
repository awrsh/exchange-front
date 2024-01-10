import { useFormik } from 'formik'
import Input from '../common/Input'
import { CiWarning } from 'react-icons/ci'
import SelectCart from './SelectCart'
import Select from '../common/Select'
import Button from '../common/Button'

const TomanDeposit = () => {
    const prices = [
        {
            name:"5 میلیون تومان",
            price:5000000
        },
        {
            name:"10 میلیون تومان",
            price:10000000
        },
        {
            name:"15 میلیون تومان",
            price:15000000
        },
        {
            name:"20 میلیون تومان",
            price:20000000
        },
        {
            name:"25 میلیون تومان",
            price:25000000
        },
    ]
    const formik = useFormik({
        initialValues: {},
        onSubmit: () => { }
    })
    return (
        <div className='mt-6'>
            <Input label="مقدار واریز به تومان" formik={formik} />
            <div className='mt-5'>
                <div className="flex items-center gap-1">
                    <CiWarning className="text-yellow-500" size={18} />
                    <p className="text-xs text-neutral-700"> حداقل مقدار واریزی ۵۰ هزار تومان و حداکثر ۲۵ میلیون تومان می‌باشد.</p>
                </div>
                <div className='grid grid-cols-3 gap-5 my-5'>
                    {
                        prices.map((price,idx)=>(
                            <button className='bg-[#f4f7fb] font-num border text-[13px] py-3 text-zinc-900 rounded-lg'  key={idx}>{price.name}</button>
                        ))
                    }
                </div>
              <Select options={[]} name='' formik={formik} label='انتخاب کارت'/>
              <Button containerClass='!mt-10' name='پرداخت آنلاین'/>
            </div>
        </div>
    )
}

export default TomanDeposit
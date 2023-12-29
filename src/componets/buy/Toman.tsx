import { useState } from 'react'
import Select from '../common/Select'
import { useFormik } from 'formik'

const Toman = () => {
    const tabs = ["خرید", "فروش"]
    const [select, setSelect] = useState(0)
    const formik = useFormik({
        initialValues: {
            crypto: { label: "", value: "" }
        },
        onSubmit: () => { }
    })


    const array = [
        {
            name: "Ethereum",
            imgUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
            price: 3000,
            percent: -1.8,
          },
          {
            name: "Bitcoin",
            imgUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
            price: 50000,
            percent: 2.5,
          },
          {
            name: "Cardano",
            imgUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
            price: 2.5,
            percent: 3.2,
          },
          {
            name: "Polkadot",
            imgUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
            price: 30,
            percent: 1.8,
          },
    ]

    const formatOptionLabel = ({ name, imgUrl }: any) => {
        return <div className='flex items-center gap-2'>
            <img className='w-6 h-6 rounded-full' src={imgUrl} />
            <span className='text-xs font-bold'>{name}</span>
        </div>
    }
    return (
        <div className='mt-3'>
            <div className='flex gap-5 mt-5'>
                {tabs.map((tab, idx) => (
                    <button onClick={() => setSelect(idx)} className={`flex-1 transition-all duration-150 font-bold py-3 rounded-xl text-xs border ${select === idx ? ` text-white ${idx === 0 ? "bg-green-600" : "bg-red-500"}` : ""}`} key={idx}>{tab}</button>
                ))}
            </div>
            <form className='mt-5'>
                <Select
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.price}
                    formatOptionLabel={formatOptionLabel}
                    formik={formik}
                    name='crypto'
                    options={array}
                    label='لطفا رمز ارز خود را انتخاب کنید' />
            </form>
        </div>
    )
}

export default Toman
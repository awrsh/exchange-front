import { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import CardListCryptocurrencies from '../home/CardListCryptocurrencies'
import useGetCuurencyListQuery from '../../hook/query/currency/useGetCuurencyListQuery'
import { CircularProgress } from '@mui/material'

const Lists = () => {
    const [select, setSelect] = useState(0)
    const { data, isLoading } = useGetCuurencyListQuery()
    return (
        <div className='min-h-[90vh]'>
            <h1 className="font-medium text-xs text-center py-3">لیست رمز ارزها</h1>
            <div className="flex items-center p-2 bg-neutral-100 dark:bg-block rounded-lg">
                <input placeholder="جستجوی رمز ارز" className="bg-transparent font-regular text-neutral-800 text-xs w-full" />
                <RiSearch2Line className="text-ashy" size={25} />
            </div>
            <div>
                <div className="flex  my-3 border-b-2">
                    {["تومان", "تتر"].map((name, idx) => (
                        <button onClick={() => setSelect(idx)} className={`border-b-2 w-[60px]  font-bold pb-2 text-xs ${select === idx ? "border-int text-neutral-800 dark:text-white" : "border-transparent text-zinc-600"}`} key={idx}>{name}</button>
                    ))}
                </div>

                <div>
                    <div className="flex items-center text-zinc-600 justify-between font-medium text-xs text-center">
                        <p className="flex-1">نام ارز</p>
                        <p className="flex-1">قیمت</p>
                        <p className="flex-1">تغیرات</p>
                    </div>
                    {isLoading ? <div className='flex justify-center items-center mt-6'>
                        <CircularProgress size={20} className='!mx-auto'/>
                    </div> :
                        <>
                            {
                                select === 0 &&
                                <div className="flex flex-col gap-4 mt-2">
                                    {
                                        data?.objects.map((crypto, idx) => {
                                            return (
                                                <CardListCryptocurrencies key={idx} crypto={crypto} />
                                            )
                                        })
                                    }
                                </div>
                            }
                            {
                                select === 1 &&
                                <div className="flex flex-col gap-4 mt-2">
                                    {
                                        data?.objects.map((crypto, idx) => {
                                            return (
                                                <CardListCryptocurrencies key={idx} crypto={crypto} />
                                            )
                                        })
                                    }
                                </div>
                            }
                        </>}
                </div>
            </div>
        </div>
    )
}

export default Lists
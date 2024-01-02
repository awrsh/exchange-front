
import { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { listCryptocurrencies, ltistAccordingToTether } from "../../helpers/utils/data";
import CardListCryptocurrencies from "./CardListCryptocurrencies";

const ListCryptocurrencies = () => {
    const [select, setSelect] = useState(0)
    return (
        <div className="min-w-[300px] px-3  pb-4 bg-white  rounded-xl overflow-y-auto">
            <h1 className="font-medium text-xs text-center py-3">لیست رمز ارزها</h1>
            <div className="flex items-center p-2 bg-neutral-100 rounded-lg">
                <input placeholder="جستجوی رمز ارز" className="bg-transparent font-regular text-neutral-800 text-xs w-full" />
                <RiSearch2Line className="text-ashy" size={25} />
            </div>
            <div>
                <div className="flex  my-3 border-b-2">
                    {["تومان", "تتر"].map((name, idx) => (
                        <button onClick={() => setSelect(idx)} className={`border-b-2 w-[60px]  font-bold pb-2 text-xs ${select === idx ? "border-int text-neutral-800" : "border-transparent text-zinc-600"}`} key={idx}>{name}</button>
                    ))}
                </div>

                <div>
                    <div className="flex items-center text-zinc-600 justify-between font-medium text-xs text-center">
                        <p className="flex-1">نام ارز</p>
                        <p className="flex-1">قیمت</p>
                        <p className="flex-1">تغیرات</p>
                    </div>
                    {
                        select === 0 &&
                        <div className="flex flex-col gap-4 mt-2">
                            {
                                listCryptocurrencies.map((crypto, idx) => (
                                    <CardListCryptocurrencies key={idx} crypto={crypto} />
                                ))
                            }
                        </div>
                    }
                    {
                        select === 1 &&
                        <div className="flex flex-col gap-4 mt-2">
                            {
                                ltistAccordingToTether.map((crypto, idx) => (
                                    // @ts-ignore
                                    <CardListCryptocurrencies key={idx} crypto={crypto} />
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ListCryptocurrencies
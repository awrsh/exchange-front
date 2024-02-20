
import { useState } from "react";
import Button from "../common/Button";
import DialogListCryptoCurrencies from "../exChange/DialogListCryptoCurrencies";
import Lists from "../exChange/Lists";

const ListCryptocurrencies = () => {
    const [show,setShow] = useState(false)
    return (
        <div>
            <Button onClick={()=>setShow(!show)} containerClass="lg:!hidden" name="نمایش لیست رمز ارز‌ها" />
            <div className="hidden lg:block min-w-[300px] px-3  pb-4 bg-white bg-dark rounded-xl overflow-y-auto">
                <Lists />
            </div>

            <DialogListCryptoCurrencies show={show} setShow={setShow} />
        </div>
    )
}

export default ListCryptocurrencies
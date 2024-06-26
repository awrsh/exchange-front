import { useState } from "react";
import Chip from "../../assets/images/cardchip.png"
import logo from "../../assets/images/logo-sm.svg"
import { BankIcon } from 'react-ir-banks-logo';

interface Props {
    shaba: string;
    cardId: string;
}
const Card = ({ shaba, cardId }: Props) => {
    const [name, setName] = useState('');
    const newShaba = shaba.split("")
    const newCardId = cardId.split("")
    console.log(name)
    return (
        <div className="w-full lg:w-[70%] flex flex-col justify-between h-[200px] lg:h-[240px] p-3 rounded-xl mx-auto bg-green-600">
            <div className="flex justify-between">
                <img className="w-10 h-10" src={Chip} />
                <img className="w-10 h-10" src={logo} />
            </div>
            <div className="flex items-center gap-2">
                <BankIcon
                    size="0"
                    digits={cardId}
                    onFindBankName={(name: string) => setName(name)}
                />
                <p className="text-neutral-900">نام بانک: <span className="text-white text-[14px]">{name}</span></p>
            </div>
            <div className="flex items-center justify-between">
                <p className="font-bold text-neutral-50 text-[14px]">شماره شبا</p>
                <div className="flex text-white font-bold font-num items-center flex-row-reverse justify-center">
                    <span>{newShaba[0] ?? "X"}</span>
                    <span>{newShaba[1] ?? "X"}</span>
                    <span>{newShaba[2] ?? "X"}</span>
                    <span>{newShaba[3] ?? "X"}</span>
                    <span>{newShaba[4] ?? "X"}</span>
                    <span>{newShaba[5] ?? "X"}</span>
                    <span>{newShaba[6] ?? "X"}</span>
                    <span>{newShaba[7] ?? "X"}</span>
                    <span>{newShaba[8] ?? "X"}</span>
                    <span>{newShaba[9] ?? "X"}</span>
                    <span>{newShaba[10] ?? "X"}</span>
                    <span>{newShaba[11] ?? "X"}</span>
                    <span>{newShaba[12] ?? "X"}</span>
                    <span>{newShaba[13] ?? "X"}</span>
                    <span>{newShaba[14] ?? "X"}</span>
                    <span>{newShaba[15] ?? "X"}</span>
                    <span>{newShaba[16] ?? "X"}</span>
                    <span>{newShaba[17] ?? "X"}</span>
                    <span>{newShaba[18] ?? "X"}</span>
                    <span>{newShaba[19] ?? "X"}</span>
                    <span>{newShaba[20] ?? "X"}</span>
                    <span>{newShaba[21] ?? "X"}</span>
                    <span>{newShaba[22] ?? "X"}</span>
                    <span>{newShaba[23] ?? "X"}</span>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <p className="font-bold text-neutral-50 text-[14px]">شماره کارت</p>
                <div className="flex items-center flex-row-reverse font-num font-bold text-white justify-center gap-10">
                    <p>
                        <span>{newCardId[0] ?? "X"}</span>
                        <span>{newCardId[1] ?? "X"}</span>
                        <span>{newCardId[2] ?? "X"}</span>
                        <span>{newCardId[3] ?? "X"}</span>
                    </p>
                    <p>
                        <span>{newCardId[4] ?? "X"}</span>
                        <span>{newCardId[5] ?? "X"}</span>
                        <span>{newCardId[6] ?? "X"}</span>
                        <span>{newCardId[7] ?? "X"}</span>
                    </p>
                    <p>
                        <span>{newCardId[8] ?? "X"}</span>
                        <span>{newCardId[9] ?? "X"}</span>
                        <span>{newCardId[10] ?? "X"}</span>
                        <span>{newCardId[11] ?? "X"}</span>
                    </p>
                    <p>
                        <span>{newCardId[12] ?? "X"}</span>
                        <span>{newCardId[13] ?? "X"}</span>
                        <span>{newCardId[14] ?? "X"}</span>
                        <span>{newCardId[15] ?? "X"}</span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Card
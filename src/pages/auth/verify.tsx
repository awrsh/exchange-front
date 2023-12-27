import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Timer from "../../componets/common/Timer";
import { RiEdit2Fill } from "react-icons/ri";
import ReactInputVerificationCode from "react-input-verification-code";
import Button from "../../componets/common/Button";
import { useNavigate, useSearchParams } from "react-router-dom";
import Slide2 from "../../assets/images/slide2.jpeg"


const Verify = () => {
    const navigate = useNavigate()
    const [value] = useState("");
    const [minutes, setMinutes] = useState(2);
    const [seconds, setSeconds] = useState(30);
    const [searchParams] = useSearchParams()
  
const onSubmit = ()=>{
    navigate(`/auth/register?phone=${searchParams.get("phone")}`)
}


    return (
        <div className="flex gap-10 h-screen max-h-screen overflow-hidden">
            <div className="flex-1">
                <div className="mt-10 w-[90%] md:w-[80%] mx-auto">
                    <span
                        onClick={() => navigate(-1)}
                        className="w-12 h-12 cursor-pointer rounded-lg flex justify-center items-center bg-gray-50 hover:bg-gray-100"
                    >
                        <FaArrowRight className="text-zinc-500" size={22} />
                    </span>
                    <Timer minutes={minutes} seconds={seconds} setMinutes={setMinutes} setSeconds={setSeconds} />
                    <p className="pt-10 font-regular text-[#626262]">کد تایید ۴ رقمی ارسال شده به شماره زیر را وارد کنید</p>
                    <div className="bg-gray-50 relative py-5 rounded-lg mt-7">
                        <p className="text-center font-num text-[#626262]">{searchParams.get("phone")}</p>
                        <span onClick={() => navigate(-1)}
                            className="absolute left-4 top-4 cursor-pointer">
                            <RiEdit2Fill size={24} className="text-[#3b3b3b]" />
                        </span>
                    </div>

                    <span className="block mt-14">
                        <ReactInputVerificationCode  placeholder="" length={4} value={value} />
                    </span>

                    <Button onClick={onSubmit} name="تائید کد" containerClass="!mt-14" />
                </div>
            </div>
            <div className="flex-1 hidden lg:flex bg-neutral-50">
                <img className='object-cover h-full w-full rounded-xl' src={Slide2} alt='' />
            </div>
        </div>
    );
};

export default Verify;
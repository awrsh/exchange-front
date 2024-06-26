import { FaCheck } from "react-icons/fa6";

import { AuthorityLevels } from "../../types/Authority/ResponseGetAuthorityLevels";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/user-store";
import { LiaTimesSolid } from "react-icons/lia";

type Props = {
  authority: AuthorityLevels;
  level: boolean
};
const CardVerify = ({ authority, level }: Props) => {
  const { user } = useAuthStore()
  const navigate = useNavigate();

  const checkStatusIsComplete = authority.rules.find(item => !user?.approved_rule_ids.includes(item.id));
  const onClick = () => {
    if (checkStatusIsComplete) {
      navigate(`/verification/${checkStatusIsComplete.id}`)
    }
  }

  return (
    <div className="bg-[#2c313a] rounded-[5px] lg:max-w-[340px] lg:min-w-[340px] xl:min-w-[430px] xl:max-w-[430px] lg:h-[650px] ">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-white  p-[15px] pb-[10px] text-[20px] font-bold border-b border-[#4c505b]">
            سطح {authority.level}
          </h1>
          <div className="px-[15px] py-[20px]">
            <p className="text-white text-[15px] font-bold pt-[10px]">
              اطلاعات مورد نیاز
            </p>
            <div>
              {authority.rules.map((rule, idx) => {
                const checkStatus = user?.approved_rule_ids.includes(rule.id);
                return <div className="flex items-center gap-3">
                  {
                    checkStatus ? <div className="w-5 h-5 flex justify-center items-center border border-[#23DCCE] rounded-full">
                      <FaCheck className="w-2 h-2 text-[#23DCCE]" />
                    </div> :
                      <div className="w-5 h-5 flex justify-center items-center border border-red-500 rounded-full">
                        <LiaTimesSolid className="w-[0.60rem] h-[0.60rem] text-red-500" />
                      </div>
                  }

                  <p
                    key={idx}
                    className="text-[#a3a5a8] text-[13px] pt-[10px] pb-[10px] flex items-start gap-2"
                  >
                    {rule.title}
                  </p>
                </div>
              })}
            </div>
            <div className="mt-[20px] text-[15px]">
              <h6 className="text-white">امکانات</h6>
              <div className="mt-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <FaCheck className="w-4 h-4 mt-px text-[#23DCCE]" />
                    <p className="text-gray-500 text-[12px]">واریز تومان</p>
                  </div>
                  <p className="text-white">
                    {authority.deposit_ir_limit_text}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <FaCheck className="w-4 h-4 mt-px text-[#23DCCE]" />
                    <p className="text-gray-500 text-[12px]">برداشت تومان</p>
                  </div>
                  <p className="text-white">
                    {authority.withdraw_ir_limit_text}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <FaCheck className="w-4 h-4 mt-px text-[#23DCCE]" />
                    <p className="text-gray-500 text-[12px]">واریز رمزارز</p>
                  </div>
                  <p className="text-white">
                    {authority.deposit_crypto_limit_text}
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[10px]">
                    <FaCheck className="w-4 h-4 mt-px text-[#23DCCE]" />
                    <p className="text-gray-500 text-[12px]">برداشت رمزارز</p>
                  </div>
                  <p className="text-white">
                    {authority.withdraw_crypto_limit_text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
   
          // disabled={user?.authentication_status === "pending" || !level}
          onClick={onClick}
          name={level && user?.authentication_status === "pending" ? "در حال بررسی" : user?.authentication_status === "level_۱" ? "اطلاعت تکمیل شده است" : "تکمیل اطلاعات"}
          containerClass={`!mb-3 !w-[90%] !mx-auto  ${user?.authentication_status === "pending" ? "": user?.authentication_status === "level_۱" ? "!bg-[#23DCCE]": "!bg-yellow-500"}`}
        />
      </div>
    </div>
  );
};

export default CardVerify;

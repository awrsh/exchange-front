import {
  Confirm_icon,
  Valid_verify,
  Waiting_verify,
} from "../../componets/common/icon";
import { dataVerify } from "../../helpers/utils/data";

export function Verification() {
  return (
    <>
      <div className="flex justify-between ">
        {dataVerify.map((item, index) => (
          <div
            key={index}
            className="bg-[#2c313a] rounded-[5px] lg:max-w-[340px] lg:min-w-[340px] xl:min-w-[430px] xl:max-w-[430px] lg:h-[650px] "
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h1 className="text-white  p-[15px] pb-[10px] text-[20px] font-bold border-b border-[#4c505b]">
                  {item.title}
                </h1>
                <div className="px-[15px] py-[20px]">
                  <p className="text-white text-[15px] font-bold pt-[10px]">
                    {item.infoTitle}
                  </p>
                  <div>
                    {item.infoItems.map((infoItem, i) => (
                      <p
                        key={i}
                        className="text-[#a3a5a8] text-[13px] pt-[5px] pb-[10px] flex items-start gap-2"
                      >
                        {infoItem.icon === 0 ? (
                          <Confirm_icon />
                        ) : infoItem.icon === 1 ? (
                          <Waiting_verify />
                        ) : (
                          <Valid_verify />
                        )}
                        {infoItem.text}
                      </p>
                    ))}
                  </div>
                  <div className="mt-[20px] text-[15px]">
                    <h6 className="text-white">{item.featuresTitle}</h6>
                    <div className="flex flex-col gap-[10px] mt-[10px]">
                      {item.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between"
                        >
                          <div>
                            <p className="flex items-center gap-2 text-[#a3a5a8] text-[15px] py-[15px]">
                              {feature.icon === 0 ? (
                                <Confirm_icon />
                              ) : feature.icon === 1 ? (
                                <Waiting_verify />
                              ) : (
                                <Valid_verify />
                              )}
                              {feature.title}
                            </p>
                          </div>
                          <p className="text-white text-[14px] ">
                            {feature.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#4c505b]">
                <div className="my-[20px] px-[20px] ">
                  {index === 0 ? (
                    <button className="bg-int w-full rounded-[5px] p-[7px] text-white ">
                      احراز هویت
                    </button>
                  ) : (
                    <p className="text-white text-[14px] bg-[#24272E] p-[7px] text-center rounded-[5px] opacity-[.65]">
                      ابتدا احراز هویت سطح 1 را انجام دهید
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Verification;

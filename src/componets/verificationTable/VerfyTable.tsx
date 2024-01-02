import React from "react";

function Index() {
  const data = [
    {
      level: "واریز روزانه تومان",
      info: {
        count: 25,
        unit: "میلیون تومان",
      },
      features: {
        count: 25,
        unit: "میلیون تومان",
      },
      actions: {
        count: 25,
        unit: "میلیون تومان",
      },
    },
    {
      level: "برداشت روزانه تومان",
      info: {
        count: 50,
        unit: "میلیون تومان",
      },
      features: {
        count: 300,
        unit: "میلیون تومان",
      },
      actions: {
        count: 1,
        unit: "میلیارد تومان",
      },
    },
    {
      level: "واریز روزانه رمزارز",
      info: {
        count: "نامحدود",
      },
      features: {
        count: "نامحدود",
      },
      actions: {
        count: "نامحدود",
      },
    },
    {
      level: "برداشت روزانه رمزارز",
      info: {
        count: 1,
        unit: "میلیون تومان",
      },
      features: {
        count: 200,
        unit: "میلیون تومان",
      },
      actions: {
        count: 1,
        unit: "میلیارد تومان",
      },
    },
    {
      level: "سقف برداشت روزانه (تومان + رمزارز)",
      info: {
        count: 51,
        unit: "میلیون تومان",
      },
      features: {
        count: 500,
        unit: "میلیون تومان",
      },
      actions: {
        count: 2,
        unit: "میلیارد تومان",
      },
    },
    {
      level: "سقف برداشت ماهانه (تومان + رمزارز)",
      info: {
        count: 1,
        unit: "میلیارد و 530 میلیون تومان",
      },
      features: {
        count: 15,
        unit: "میلیارد     تومان",
      },
      actions: {
        count: 60,
        unit: "میلیون تومان",
      },
    },
    {
      level: "معامله در بازار‌های نوبیتکس",
      info: {
        count: "نامحدود",
      },
      features: {
        count: "نامحدود",
      },
      actions: {
        count: "نامحدود",
      },
    },
    {
      level: "کارمزد معامله (اسپات و تعهدی)",
      info: {
        count: "کارمزد پله‌ای",
      },
      features: {
        count: "کارمزد پله‌ای",
      },
      actions: {
        count: "کارمزد پله‌ای",
      },
    },
    // Add more data as needed
  ];
  return (
    <div>
      <div className=" mx-auto my-10">
        <table className="min-w-full bg-[#2C313A] text-white  border-[#33333333] shadow-md rounded">
          <thead className="bg-transparent">
            <tr>
              <th className="py-4 px-4 border-b border-[#5e5e5e70] text-right font-bold">
                مقایسه سطوح کاربری
              </th>
              <th className="py-4 px-4 border-b border-[#5e5e5e70]  text-right">
                سطح ۱
              </th>
              <th className="py-4 px-4 border-b border-[#5e5e5e70] text-right">
                سطح ۲
              </th>
              <th className="py-4 px-4 border-b border-[#5e5e5e70] text-right">
                سطح ۳
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.level}>
                <td className="py-4 px-4 border-b border-[#5e5e5e70] text-right text-green-500">
                  {item.level}
                </td>
                <td className="py-4 px-4 border-b border-[#5e5e5e70] text-right">
                  {item.info?.count}{" "}
                  <span className="text-[#a3a5a8]">{item.info.unit}</span>
                </td>
                <td className="py-4 px-4 border-b border-[#5e5e5e70] text-right">
                  {item.features?.count}{" "}
                  <span className="text-[#a3a5a8]">{item.features.unit}</span>
                </td>
                <td className="py-4 px-4 border-b border-[#5e5e5e70] text-right">
                  {item.actions.count}{" "}
                  <span className="text-[#a3a5a8]">{item.actions.unit}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;

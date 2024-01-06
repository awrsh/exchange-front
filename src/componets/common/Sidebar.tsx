"use client"
import Logo from "../../assets/images/logo.jpg"
import { header_menu } from "../../helpers/utils/data";
import { Link, useLocation } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <div className={`h-screen transition-all duration-300 bottom-0 fixed bg-white z-[9999] overflow-y-auto shadow  ${open ? "w-[240px]" : "w-[60px]"}`}>


      {

        <div className="flex justify-center h-[100px] items-center">
          {
            open &&
            <img className="w-32" src={Logo} />
          }
        </div>
      }


      <div className="flex flex-col gap-2 px-2">
        {header_menu.map((menu, idx) => (
          <Link
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
             className={`flex items-center w-full px-2  py-[0.7rem] gap-2 rounded-xl ${location.pathname === menu.url ? "bg-int text-white " : "text-neutral-500 "}`} to={menu.url} key={idx}>
            <menu.icon size={22} className="!min-w-6 !min-h-6" />

            <span className={` whitespace-nowrap  ${location.pathname === menu.url ? "font-bold text-[13px]" : " font-regular text-[13.5px]"} ${open ? "opacity-100" : "opacity-0 overflow-hidden hidden !w-0"}`}>{menu.name}</span>

          </Link>
        ))}
        <button className="flex items-center py-[0.7rem] text-red-500 gap-2 px-2">
          <CiLogout size={24} />
          {
            open &&
            <span className={` whitespace-nowrap font-regular text-[14px] ${open ? "opacity-100" : "opacity-0 overflow-hidden hidden !w-0"}`}>خروج از حساب کاربری</span>
          }
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

"use client"
import { header_menu, menuBottom } from "../../helpers/utils/data";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import { Drawer } from "@mui/material";
import Logo from "../../assets/images/logo.jpg"
import useAuthStore from "../../stores/user-store";
import { useCookies } from "react-cookie";
const Sidebar = () => {
  const navigate = useNavigate()
  const [cookies,_,removeCookies] = useCookies(["token"]);
  const { removeUser } = useAuthStore()
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const logout = () => {
    removeUser()
    removeCookies(cookies.token)
    navigate("/auth")
  }
  return (
    <div>
      <Drawer onClose={() => setOpen(false)} className="!z-40 lg:hidden " anchor="right" open={open}>
        <div className="!min-w-[260px]">
          <img className="w-40 mx-auto mt-4" src={Logo} />
          <div className=" flex flex-col mt-5 gap-2 px-2">
            {header_menu.map((menu, idx) => (
              <Link
                className={`flex items-center w-full px-2  py-[0.7rem] gap-2 rounded-xl hover:bg-neutral-300 ${location.pathname === menu.url ? "bg-int text-white " : "text-neutral-500 "}`} to={menu.url} key={idx}>
                <menu.icon size={22} className="!min-w-6 !min-h-6" />

                <span className={` whitespace-nowrap  ${location.pathname === menu.url ? "font-bold text-[13px]" : " font-regular text-[13.5px]"} ${open ? "opacity-100" : "opacity-0 overflow-hidden hidden !w-0"}`}>{menu.name}</span>

              </Link>
            ))}
            <button onClick={logout} className="flex items-center py-[0.7rem] text-red-500 gap-2 px-2">
              <CiLogout size={24} />
              {
                open &&
                <span className={` whitespace-nowrap font-regular text-[14px] ${open ? "opacity-100" : "opacity-0 overflow-hidden hidden !w-0"}`}>خروج از حساب کاربری</span>
              }
            </button>
          </div>
        </div>
      </Drawer>
      <div
        onMouseLeave={() => setOpen(false)}
        onMouseEnter={() => setOpen(true)}
        className={`hidden lg:block h-screen transition-all duration-300 bottom-0 fixed bg-white dark:bg-block !z-50 overflow-y-auto shadow  ${open ? "w-[240px]" : "w-[60px] hidden"}`}>

        <div className="flex flex-col mt-24 gap-2 px-2">
          {header_menu.map((menu, idx) => (
            <Link
              className={`flex items-center w-full px-2  py-[0.7rem] gap-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-slate-400 ${location.pathname === menu.url ? "bg-int text-white hover:bg-int " : "text-neutral-500 "}`} to={menu.url} key={idx}>
              <menu.icon size={22} className="!min-w-6 !min-h-6" />

              <span className={` whitespace-nowrap  ${location.pathname === menu.url ? "font-bold text-[13px]" : " font-regular text-[13.5px]"} ${open ? "opacity-100" : "opacity-0 overflow-hidden hidden !w-0"}`}>{menu.name}</span>

            </Link>
          ))}
          <button onClick={logout} className="flex items-center py-[0.7rem] text-red-500 gap-2 px-2">
            <CiLogout size={24} />
            {
              open &&
              <span className={` whitespace-nowrap font-regular text-[14px] ${open ? "opacity-100" : "opacity-0 overflow-hidden hidden !w-0"}`}>خروج از حساب کاربری</span>
            }
          </button>
        </div>
      </div>
      <div className=" lg:hidden fixed z-50 w-full border-t bg-white py-2 bottom-0 flex items-center justify-between">
        {menuBottom.map((menu, idx) => (
          <Link className={`flex flex-col  gap-1 items-center flex-1 w-full ${location.pathname === menu.url ? "text-int" : "text-neutral-700"}`} to={menu.url} key={idx}>
            <menu.icon size={20} />
            <span className="text-[10px] font-extrabold">{menu.name}</span>
          </Link>
        ))}
        <button onClick={() => setOpen(true)} className="flex-1 flex flex-col text-neutral-700 gap-1 items-center">
          <TfiMoreAlt size={24} />
          <span className="text-[10px] font-extrabold">منو</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

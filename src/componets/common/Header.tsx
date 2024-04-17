import { FaUserAlt } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { themeContext } from "../../context/ThemeContextProvider";
import { useContext, useEffect } from "react";
import Notfecation from "./Notfecation";
import useAuthStore from "../../stores/user-store";
import userImage from "../../assets/images/user.jpg"
import Logo from "../../assets/images/bit-asia.svg"
import { menus } from "../../helpers/utils/data";
const Header = () => {
  const { user } = useAuthStore()
  const [cookies] = useCookies(["token"]);
  const { theme, setTheme } = useContext(themeContext);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleThemeSwitch = () => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div className="bg-white bg-dark dark:bg-block shadow-sm  relative !z-[99]">
      <header className="flex justify-between gap-10 items-center w-[95%] mx-auto py-4">
        <div className="flex items-center gap-14">
          <img className="w-28" src={Logo} alt="" />
          <ul className="lg:flex hidden items-center gap-8">
            {menus.map((menu, idx) => (
              <Link key={idx} className="text-[14px] text-gray-600 dark:text-white" to={menu.link}>{menu.name}</Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div>

            {
              cookies.token ? <div className="flex items-center gap-2">
                <img className="w-7 h-7 object-cover rounded-full" src={user?.avatar_image ? user.avatar_image : userImage} />
                <span className="text-sm font-bold">{user?.first_name} {user?.last_name}</span>
              </div> :
                <Link to={"/auth"} className="flex items-center text-neutral-600 dark:text-white rounded-xl gap-2 p-2 border">
                  <span className="font-bold  text-sm">ورود/ثبت‌نام</span>
                  <FaUserAlt className="text-ashy" />
                </Link>
            }
          </div>
          <div className="flex items-center  gap-5">
            <Notfecation />
            <button onClick={handleThemeSwitch} className="w-9 h-9 rounded-full flex justify-center items-center border">
              <MdDarkMode size="20" className="text-ashy" />
            </button>
            {
              user?.authentication_status === "level_0" ?
                <Link className="p-1 px-2 rounded-lg mt-2 block bg-red-500 border border-[#F8A5AA] text-[12px] text-white" to="/ver">
                  احراز هویت نشده
                </Link> :
                user?.authentication_status === "pending" ? <p className="font-regular text-center block bg-yellow-100 py-1 text-xs rounded-lg text-yellow-500   text-[12px]">
                  در انتظار تائید
                </p> :
                  <Link to={"/verification"} className="font-regular text-center block bg-[#e5faf3] py-1 px-2 rounded-lg text-[#34b288]   text-[12px]">
                    {user?.authentication_status === "level_1" ? "  سطح 1" : user?.authentication_status === "level_2" ? "سطح 2" : user?.authentication_status === "level_3" ? "سطح 3" : ""}
                  </Link>
            }
          </div>
        </div>
      </header>
    </div>
  )
};

export default Header;

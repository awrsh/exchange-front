import { FaUserAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import UserProfile from "./UserProfile";
import { themeContext } from "../../context/ThemeContextProvider";
import { useContext, useEffect } from "react";
import Notfecation from "./Notfecation";

const Header = () => {
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
      <header className="flex justify-between items-center w-[95%] mx-auto py-4">
        <div>
          {
            cookies.token ? <div className="flex items-center gap-2">
              <UserProfile />
              <span className="text-sm font-bold">مهدی شریفلو</span>
            </div> :
              <Link to={"/auth"} className="flex items-center text-neutral-600 dark:text-white rounded-xl gap-2 p-2 border">
                <span className="font-bold  text-sm">ورود/ثبت‌نام</span>
                <FaUserAlt className="text-ashy" />
              </Link>
          }
        </div>

        <div className="flex items-center  gap-5">
{/* 
          <button className="hidden lg:flex items-center text-neutral-600 rounded-xl gap-1 p-2 border">
            <span className="font-bold  text-xs">دانلود اپلیکیشن</span>
            <HiDownload size="18" className="text-ashy" />
          </button> */}
          <Notfecation/>
          <button onClick={handleThemeSwitch} className="w-9 h-9 rounded-full flex justify-center items-center border">
            <MdDarkMode size="20" className="text-ashy" />
          </button>
        </div>
      </header>
    </div>
  )
};

export default Header;

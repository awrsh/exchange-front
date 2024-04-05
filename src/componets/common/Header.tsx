import { FaUserAlt } from "react-icons/fa";
// import { HiDownload } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { themeContext } from "../../context/ThemeContextProvider";
import { useContext, useEffect } from "react";
import Notfecation from "./Notfecation";
import useAuthStore from "../../stores/user-store";
import userImage from "../../assets/images/user.jpg"

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
      <header className="flex justify-between items-center w-[95%] mx-auto py-4">
        <div className="flex items-center  gap-5">
          <Notfecation />
          <button onClick={handleThemeSwitch} className="w-9 h-9 rounded-full flex justify-center items-center border">
            <MdDarkMode size="20" className="text-ashy" />
          </button>
        </div>
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


      </header>
    </div>
  )
};

export default Header;

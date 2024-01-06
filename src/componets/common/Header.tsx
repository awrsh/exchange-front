import { FaUserAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import UserProfile from "./UserProfile";

const Header = () => {
  const [cookies] = useCookies(["token"]);
  
  return (
    <div className="bg-white shadow-sm">
      <header className="flex justify-between items-center w-[95%] mx-auto py-4">
        <div>
          {
            cookies.token ? <div className="flex items-center gap-2">
              <UserProfile />
              <span className="text-sm font-bold">مهدی شریفلو</span>
            </div> :
              <Link to={"/auth"} className="flex items-center text-neutral-600 rounded-xl gap-2 p-2 border">
                <span className="font-bold text-neutral-800 text-sm">ورود/ثبت‌نام</span>
                <FaUserAlt className="text-ashy" />
              </Link>
          }
        </div>

        <div className="flex items-center  gap-3">

          <button className="hidden lg:flex items-center text-neutral-600 rounded-xl gap-1 p-2 border">
            <span className="font-bold text-neutral-800 text-xs">دانلود اپلیکیشن</span>
            <HiDownload size="18" className="text-ashy" />
          </button>
          <button className="w-9 h-9 rounded-full flex justify-center items-center border">
            <MdDarkMode size="20" className="text-ashy" />
          </button>
        </div>
      </header>
    </div>
  )
};

export default Header;

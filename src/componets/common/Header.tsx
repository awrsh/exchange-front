import { FaUserAlt } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { header_menu } from "../../helpers/utils/data";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white shadow-sm">
      <header className="flex justify-between items-center w-[95%] mx-auto py-4">
        <div>
          <img
            className="w-32"
            src="data:image/png;base64,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"
          />
        </div>
        <div className="flex items-center gap-6 flex-1 justify-center">
          {header_menu.map((item, idx) => (
            <Link
              className="font-medium text-neutral-800 text-sm"
              to={item.url}
              key={idx}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center  gap-3">
          <Link
            to="/auth"
            className="flex items-center text-neutral-600 rounded-xl gap-2 p-2 border"
          >
            <span className="font-bold text-neutral-800 text-sm">
              ورود/ثبت‌نام
            </span>
            <FaUserAlt className="text-ashy" />
          </Link>
          <button className="flex items-center text-neutral-600 rounded-xl gap-1 p-2 border">
            <span className="font-bold text-neutral-800 text-sm">
              دانلود اپلیکیشن
            </span>
            <HiDownload size="18" className="text-ashy" />
          </button>
          <button className="w-9 h-9 rounded-full flex justify-center items-center border">
            <MdDarkMode size="20" className="text-ashy" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;

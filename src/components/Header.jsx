import { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext"
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`p-4 ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
      <nav className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Seboo</h1>
        <button onClick={toggleTheme} className="px-4 py-2">
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
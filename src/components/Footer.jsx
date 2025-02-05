import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`w-full py-4 text-center transition-all duration-300 ${
        theme === "light" ? "bg-gray-200 text-gray-800" : "bg-gray-900 text-gray-300"
      }`}
    >
      <p className="text-sm">
        © {new Date().getFullYear()} Sohaib Aslam. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

import { useContext } from "react";
import {ThemeContext} from "../context/ThemeContext";

const About = () => {
    const { theme } = useContext(ThemeContext);

    return (
      <div className={`h-screen flex items-center ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"} px-10`}>
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold">
            Hey, I&apos;m Sohaib Aslam
          </h1>
          <h2 className="text-2xl mt-4">
            Front-End Web Developer
          </h2>
          <p className="mt-4 leading-relaxed">
            I&apos;m a passionate front-end web developer with expertise in HTML, CSS, JavaScript, React, and TailwindCSS. I love creating visually appealing and highly interactive web applications. My goal is to build user-friendly, responsive, and efficient web solutions that provide an amazing user experience.
          </p>
        </div>
      </div>
    );
  };
  
export default About;
  
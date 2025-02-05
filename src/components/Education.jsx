import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Education = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen flex items-center justify-between px-10 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-gray-100"
      }`}
    >
      <div className="">
        <h1 className="text-9xl font-bold">Education</h1>
      </div>

      <div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">
            Virtual University of Pakistan
          </h2>
          <p className="mt-1">Bachelor of Science in Software Engineering</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">
            Fast Degree College, Khudiyan Khas
          </h2>
          <p className="mt-1">FSC - Board of Intermediate and Secondary Education</p>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">
            Govt. Boys High School, Dhing Shah
          </h2>
          <p className="mt-1">Matric - Board of Intermediate and Secondary Education</p>
        </div>
      </div>
    </div>
  );
};

export default Education;

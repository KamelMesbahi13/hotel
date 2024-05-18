import { useState, useEffect } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

function App() {
  // Retrieve the initial theme from localStorage or default to light mode
  const [dark, setDark] = useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!localStorage.getItem("color-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [dark]);

  const darkModeHandler = () => {
    setDark(!dark);
  };

  return (
    <div className="">
      <button
        onClick={darkModeHandler}
        className="p-2 bg-gray-200 rounded-full dark:bg-gray-800"
      >
        {dark ? <IoSunny /> : <IoMoon />}
      </button>
    </div>
  );
}

export default App;

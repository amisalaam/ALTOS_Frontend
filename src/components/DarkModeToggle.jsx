import React, { useState } from 'react';
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <button
            onClick={toggleDarkMode}
            className={`px-4 py-3  flex md:order${isDarkMode
                    ? "bg-primary-600 text-white"
                    : "bg-white text-whit-800 dark:bg-neutral-800 dark:text-neutral-200"
                }  ext-center rounded hover:bg-primary-700  focus:outline-none  focus:ring-primary-200 dark:focus:ring-primary-400`}
        >
            {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
    );
};


export default DarkModeToggle;
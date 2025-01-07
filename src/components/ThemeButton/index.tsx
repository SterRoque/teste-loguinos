'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeButton() {
   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      const theme = localStorage.getItem('theme');
      setDarkMode(theme === 'dark');
   }, []);

   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add('dark');
         localStorage.setItem('theme', 'dark');
      } else {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('theme', 'light');
      }
   }, [darkMode]);

   function handleToggleMode() {
      setDarkMode((prev) => !prev);
   }
   return (
      <button
         className='w-8 h-8 rounded-full bg-gray-800 text-white flex justify-center items-center'
         onClick={handleToggleMode}>
         {darkMode ? <Moon size={18} /> : <Sun size={18} />}
      </button>
   );
}

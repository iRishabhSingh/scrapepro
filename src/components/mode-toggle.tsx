"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="z-10 flex items-center justify-center">
      <button
        title={`${theme === "dark" ? "Light" : "Dark"} Mode`}
        className={`m-2 flex items-center justify-center rounded-md border-none p-2 outline-0 transition-all duration-300 ease-in-out ${
          theme === "dark"
            ? "bg-gradient-to-r from-blue-900/30 to-purple-900/30"
            : "bg-gradient-to-r from-purple-100/30 to-blue-100/30"
        } bg-opacity-10 backdrop-blur-[10px]`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span
          className={`h-6 w-6 rounded-full transition-colors ${
            theme === "dark" ? "bg-white" : "bg-black"
          }`}
        ></span>
      </button>
    </div>
  );
}

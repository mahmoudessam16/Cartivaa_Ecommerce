import React from "react";
import { useAppContext } from "@/context/AppContext";

const Navbar = () => {
  const { router } = useAppContext();

  return (
    <div className="flex items-center px-4 md:px-8 py-3 justify-between border-b">
      <h2
        onClick={() => router.push("/")}
        className="text-2xl md:text-3xl cursor-pointer font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-black tracking-wide drop-shadow-md"
      >
        Cartivaa
      </h2>
      <button className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm">
        Logout
      </button>
    </div>
  );
};

export default Navbar;

"use client";

import { ThemeModeToggle } from "../theme-mode-toggle";
import { Button } from "../ui/button";
export default function Header(){
  return(
    <div>
      <nav className="flex justify-between items-center p-3 bg-white shadow-sm">
      {/* Left Side */}
      <div className="flex items-center">
        <img src="https://rewardwale.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRW_Black_Logo.86498c6e.png&w=256&q=75" alt="Company Logo" className="h-5 pb-1 mr-8" />
        <ul className="flex space-x-4 items-center justify-center text-[1rem]">
          <li><a href="#about" className="text-gray-700 hover:text-gray-900">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
          <li><a href="#how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</a></li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
      <ThemeModeToggle />
        <Button className="ml-4 bg-gray-800 text-white">Login</Button>
      </div>
    </nav>
    </div>
  );
}
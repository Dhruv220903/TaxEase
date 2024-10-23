import React from "react";
import { CalendarIcon, MenuIcon } from "lucide-react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className=" bg-indigo-600 border-b-2 black text-white mb-2" >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <CalendarIcon className="h-8 w-8" />
          <h1 className="text-2xl font-bold">TaxEase</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link to ="/home" className=" p-2 hover:scale-125 ">Home</Link>
          <Link to="/filetaxes" className="p-2 hover:scale-125 ">File Taxes</Link>
          <Link to="/taxcalculator" className=" p-2 hover:scale-125 ">Tax Calculator</Link>
          <Link to="/aboutus" className=" p-2 hover:scale-125 ">About Us</Link>
          <div className=" bg-black text-white flex rounded-full space-x-1">
            <div className="p-2 rounded-full" >
            <Link to="/login" className="hover:scale-125">Login</Link>
            </div>
            <div className="p-2"> <Link to="/Login" className="hover:scale-125">Login</Link>
            </div>
          </div>
          
        </nav>
        <button 
          className="md:hidden p-2 rounded-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
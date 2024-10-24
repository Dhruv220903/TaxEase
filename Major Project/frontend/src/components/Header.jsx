import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon, MenuIcon, XIcon } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"; 
export default function Header() {
  const navigate = useNavigate();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    toggleMobileMenu();
  };

  return (
    <header className="bg-indigo-600 border-b-2 text-white mb-2">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        {/* Brand and Icon */}
        <div className="flex items-center space-x-4">
          <CalendarIcon className="h-8 w-8 text-white" />
          <h1 className="text-2xl font-bold">TaxEase</h1>
        </div>

        {/* Navigation for larger screens */}
        <nav className="hidden md:flex space-x-6 p-2">
          <Link to="/home" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/filetaxes" className="hover:text-yellow-400 transition">
            File Taxes
          </Link>
          <Link to="/taxcalculator" className="hover:text-yellow-400 transition">
            Tax Calculator
          </Link>
          <Link to="/aboutus" className="hover:text-yellow-400 transition">
            About Us
          </Link>
          {isAuthenticated && (
            <div className="p-2 bg-black rounded-md">
              <p>{user.name}</p>
            </div>
          )}
          <div className="p-2 bg-black text-white flex items-center space-x-2 hover:bg-gray-800 transition rounded-md">
            {isAuthenticated ? (
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button onClick={loginWithRedirect}>Log In</button>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full h-full bg-indigo-800 text-white flex flex-col items-center justify-center z-10 transition-all ease-in-out duration-300`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 p-2 rounded-md bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close Menu"
          onClick={toggleMobileMenu}
        >
          <XIcon className="h-6 w-6" />
        </button>

        {/* Links */}
        <button onClick={() => handleNavigation("/home")} className="p-4 text-xl hover:text-yellow-400">
          Home
        </button>
        <button onClick={() => handleNavigation("/filetaxes")} className="p-4 text-xl hover:text-yellow-400">
          File Taxes
        </button>
        <button onClick={() => handleNavigation("/taxcalculator")} className="p-4 text-xl hover:text-yellow-400">
          Tax Calculator
        </button>
        <button onClick={() => handleNavigation("/aboutus")} className="p-4 text-xl hover:text-yellow-400">
          About Us
        </button>
        {isAuthenticated && (
          <div className="p-4 bg-black rounded-md">
            <p>{user.name}</p>
          </div>
        )}
        <div className="p-4 bg-black text-white flex items-center space-x-2 hover:bg-gray-800 transition rounded-md">
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          ) : (
            <button onClick={loginWithRedirect}>Log In</button>
          )}
        </div>
      </div>
    </header>
  );
}
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-1 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
        <div className="flex items-center flex-shrink-0"> {/* adjust margin value for the logo and text here !!!!*/}
          <Link to="/" className="flex items-center">
            <img className="h-10 w-10 mr-2" src={logo} alt="Power Stocks Logo" />
            <span className="text-xl tracking-tight">Power Stocks</span>
          </Link>
        </div>
        <div className="flex items-center space-x-7 ml-auto"> {/* adjust nav links HERE!!! */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
            <div className="hidden lg:flex justify-center space-x-0 items-center">
              <a
              href="/sign-in"
              className="border border-white 
                bg-transparent 
                text-white 
                hover:bg-white hover:text-black hover:border-black 
                transition-all duration-300 
                py-2 px-4 rounded-md 
                shadow-lg hover:shadow-xl 
                transform hover:scale-105"
              >
                Sign In
              </a>
            </div>
            <div className="hidden lg:flex justify-center space-x-0 items-center">
              <a
                href="/create-account"
                className="bg-gradient-to-r from-green-700 to-green-800 
              hover:from-green-800 hover:to-green-900 
              transition-all duration-300 
              py-2 px-4 rounded-md 
              text-white 
              shadow-lg hover:shadow-xl 
              transform hover:scale-105"
              >
                Create an account
              </a>
            </div>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-950 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-green-400 to-green-700"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

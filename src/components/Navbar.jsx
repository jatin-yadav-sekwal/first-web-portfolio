import { useEffect } from "react";

const Navbar = ({ menuOpen, setmenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  });
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/5 shadow-lg  ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#Home" className="mx-12 font-bold text-xl text-white">
            jxt.<span className="text-blue-500">IN</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer sm:hidden"
            onClick={() => {
              setmenuOpen(!menuOpen); //it changes the state of menuOpen and toggles the menu open state that is if it is open it will close and vice versa
            }}
          >
            {/* this is for hamburger menu and md: means medium breskpoint that is device larger than medium screen */}
            &#9776;
          </div>
          <div className="hidden sm:flex items-center  space-x-15">
            <a
              href="#Home"
              className="text-gray-100 hover:text-blue transition-colors"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-gray-100 hover:text-blue transition-colors"
            >
              About 
            </a>
            <a
              href="#Contact"
              className="text-gray-100 hover:text-blue transition-colors"
            >
              Contact
            </a>
            <a
              href="#Projects"
              className="text-gray-100 hover:text-blue transition-colors"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

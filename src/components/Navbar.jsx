import { useEffect } from "react";

const Navbar = ({ menuOpen, setmenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  });
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/5 shadow-lg ">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-bold text-xl text-white">
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
          <div className="hidden sm:flex items-center  space-x-6">
            <a
              href="#home"
              className="text-gray-100 hover:text-blue transition-colors"
            >
              home
            </a>
            <a
              href="#about"
              className="text-gray-100 hover:text-blue transition-colors"
            >
              about us
            </a>
            <a
              href="#contact"
              className="text-gray-100 hover:text-blue transition-colors"
            >
              contact
            </a>
            <a
              href="#projexts"
              className="text-gray-100 hover:text-blue transition-colors"
            >
              projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

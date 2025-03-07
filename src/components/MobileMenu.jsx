const MobileMenu = ({ menuOpen, setmenuOpen }) => {
  return (
    <div
      className={`fixed w-full z-40 top-0 right-0 bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setmenuOpen(false)}
        className="text-3xl top-0 right-0 text-white focus-outline-none cursor-pointer"
      >
        &times;
      </button>
      <a
        href="#home"
        className={`text-2xl my-4 font-semibold text-white transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        onClick={() => setmenuOpen(false)}
      >
        home
      </a>
      <a
        href="#about"
        className={`text-2xl my-4 font-semibold text-white transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        onClick={() => setmenuOpen(false)}
      >
        about us
      </a>
      <a
        href="#contact"
        className={`text-2xl my-4 font-semibold text-white transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        onClick={() => setmenuOpen(false)}
      >
        contact
      </a>
      <a
        href="#projexts"
        className={`text-2xl my-4 font-semibold text-white transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        onClick={() => setmenuOpen(false)}
      >
        projects
      </a>
    </div>
  );
};
export default MobileMenu;

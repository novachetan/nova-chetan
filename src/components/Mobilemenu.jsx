import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 
      flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out
      ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl cursor-pointer"
      >
        &times;
      </button>

      {/* Menu Links */}
      <a
        onClick={() => setMenuOpen(false)}
        href="#home"
        className= { ` text-2xl font-semibold text-white my-4 tranform transition-transform duration-300
              ${
                menuOpen
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-5"
              }

        `}
      >
        Home
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="#about"
        className= { ` text-2xl font-semibold text-white my-4 tranform transition-transform duration-300
              ${
                menuOpen
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-5"
              }
           ` }
      >
        About
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="#project"
       className=  { ` text-2xl font-semibold text-white my-4 tranform transition-transform duration-300
              ${
                menuOpen
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-5"
              }
           ` }
      >
        Project
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="#contact"
       className=  { ` text-2xl font-semibold text-white my-4 tranform transition-transform duration-300
              ${
                menuOpen
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-5"
              }
           ` }
      >
        Contact
      </a>
    </div>
  );
};
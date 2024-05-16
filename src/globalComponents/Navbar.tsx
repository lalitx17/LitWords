import { useState } from "react";

import Image from "next/image";

interface NavbarProps {
  imageSrc: string;
  className?: string;

}

const Navbar: React.FC<NavbarProps> = ({ imageSrc, className }) => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
  
    const toggleMenu = () => {
      setIsMenuVisible(!isMenuVisible);
    };
  
    return (
      <nav className="p-4">
        <div className="border-b-[1px] md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between ">
            <div className="text-xl font-bold text-white">
              <Image src={imageSrc} width={200} height={50} alt="Your Logo" />
            </div>
            <div className="md:hidden">
              {/* Hamburger menu button */}
              <button className="text-white" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`font-complementary tracking-wide md:me-10  md:flex md:space-x-4  ${
              isMenuVisible ? "flex flex-col" : "hidden"
            }`}
          >
            {" "}
            {/* display:hidden and display:flex makes the toggle possible */}
            <a href="#" className={`${className}`}>
              Blogs
            </a>
            <a href="#" className={`${className}`}>
              Reviews
            </a>
          </div>
        </div>
      </nav>
    );
  }

  export default Navbar;
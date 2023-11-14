import Head from "next/head";

import { useState } from "react";

import Image from "next/image";

import logo from "../../public/image/litwords4.png"
import quirkyLalit from "../../public/image/QuirkyLality2.jpg"

export default function Home() {
  return (
    <>
      <Head>
        <title>LitWords</title>
      </Head>

      <main>
        <div className="mx-auto my-12 w-[93%] rounded-lg bg-secondaryBackground">
          <div className="h-10 rounded-t-lg bg-gradient-to-r from-purpleG to-blueG">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <Navbar />
          <HomeScreen />
        </div>
      </main>
    </>
  );
}

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <nav className="p-4">
      <div className="md:flex md:items-center md:justify-between border-b-[1px]">
        <div className="flex items-center justify-between ">
          <div className="text-xl font-bold text-white">
            <Image
            src={logo.src}
            width={200}
            height={50}
            alt="Your Logo"
             />

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
        <div className={` md:space-x-4  md:flex md:me-10  ${isMenuVisible ? "flex flex-col" : "hidden"}`}> {/* display:hidden and display:flex makes the toggle possible */}
          <a href="#" className="text-white">
            Blogs
          </a>
          <a href="#" className="text-white">
            Reviews
          </a>

        </div>
      </div>
    </nav>
  );
}


function HomeScreen(){

  return (
    <div className="nd flex flex-col items-center my-10">
      <div className="text-white">
        WELCOME TO MY BLOG
      </div>
      <div className="my-5">
        <Image
        src={quirkyLalit.src}
        width={250}
        height={250}
        alt="quirkyLalit"
        className="rounded-full"
        />
      </div>

    </div>
  )
}

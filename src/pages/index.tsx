import Head from "next/head";

import { useState } from "react";

import Image from "next/image";

import logo from "../../public/image/litwords4.png";
import quirkyLalit from "../../public/image/QuirkyLality2.jpg";

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
      <div className="border-b-[1px] md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between ">
          <div className="text-xl font-bold text-white">
            <Image src={logo.src} width={200} height={50} alt="Your Logo" />
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

function HomeScreen() {
  return (
    <div className="my-10 flex flex-col items-center">
      <div className="font-complemetary font-[500] tracking-widest text-white">
        WELCOME TO MY BLOG
      </div>
      <div className="mb-10 mt-16">
        <Image
          src={quirkyLalit.src}
          width={250}
          height={250}
          alt="quirkyLalit"
          className="rounded-full"
        />
      </div>
      <div className="font-complemetary my-5 flex w-4/5 justify-center text-center text-lg font-[300] tracking-wide text-white opacity-80 md:w-2/5">
        I am Lalit Yadav, developer from Lahan, Nepal. I share my adventures
        within myself, as well as coding tips and many more.
      </div>
      <button
        type="button"
        className="mb-2 me-2 mt-5 rounded-full border border-gray-200 bg-white px-10 py-2.5 text-md font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Alternative
      </button>
    </div>
  );
}

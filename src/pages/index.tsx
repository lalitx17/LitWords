import Head from "next/head";

import { useState } from "react";

import Image from "next/image";

import logo from "../../public/image/litwords4.png";
import quirkyLalit from "../../public/image/QuirkyLality2.jpg";
import solitude from "../../public/image/solitude.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>LitWords</title>
        <style>
          {`
            .bg1{
              background-image:url(${solitude.src});
              background-repeat: no-repeat;
              background-position: center;
              background-size: cover;
              height: 140vh;
          }
          .bg2{
            background-image:url(${solitude.src});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 120vh;
        }
            `}
        </style>
      </Head>

      <main>
        <div className="mx-auto my-12 w-[93%] rounded-lg bg-secondaryBackground ">
          <div className="h-10 rounded-t-lg bg-gradient-to-r from-purpleG to-blueG">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="bg2 md:bg1">
            <div className="backdrop-blur h-full">
              <Navbar />
              <HomeScreen />
              <svg viewBox="0 89.467 500 88.832" className="absolute bottom-0 mb-[-5px]">
              <path
                style={{
                  fill: "#262d36",
                  stroke: "#262d36",
                  strokeWidth: "0px",
                }}
                d="M -6.661 97.557 C 47.498 68.577 239.101 140.782 280.776 139.435 C 383.076 145.463 536.336 70.461 521.892 89.943 C 521.892 103.979 521.258 183.561 521.258 178.141 L -3.489 180.044 C -6.629 180.661 -6.093 101.519 -6.661 97.557 Z"
                transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, -7.105427357601002e-15, 7.105427357601002e-15)"
              />
            </svg>
            </div>
            
          </div>
          <div>
            <Blogcard />
          </div>
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
        className="text-md mb-2 me-2 mt-5 rounded-full border border-gray-200 bg-white px-10 py-2.5 font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        Alternative
      </button>
    </div>
  );
}

function Blogcard() {
  return (
    <div className="m-4 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href="#">
        <Image
          src={solitude.src}
          width={600}
          height={400}
          alt="solitude"
          className="rounded-t-lg p-4"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

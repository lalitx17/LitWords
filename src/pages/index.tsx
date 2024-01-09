import Head from "next/head";

import Navbar from "~/globalComponents/Navbar";

import HomeScreen from "~/globalComponents/Homescreen";

import Image from "next/image";

import solitude from "../../public/image/solitude.jpg";

import quirkyLalit from "../../public/image/QuirkyLality2.jpg";

import spring from "../../public/image/spring.jpg";

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
              height: 100vh;
          }
          
          @media only screen and (min-width:768px){
          .bg2{
            background-image:url(${solitude.src});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 125vh;
        }
      }
            `}
        </style>
      </Head>

      <main>
        <div className="mx-auto my-12 w-[93%] rounded-lg bg-secondaryBackground ">
          <div className="h-10 rounded-t-lg bg-gradient-to-r from-purpleG to-blueG">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="bg1 bg2">
            <div className="h-full backdrop-blur">
              <Navbar />
              <HomeScreen />
              <svg
                viewBox="0 89.467 500 88.832"
                className="absolute bottom-0 mb-[-5px]"
              >
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
          <BlogHouse />
        </div>
      </main>
    </>
  );
}

function BlogHouse() {
  return (
    <div className="flex flex-row flex-wrap content-evenly">
      <div className="flex basis-4/12 flex-col">
        <Blogcard />
        <Blogcard />
      </div>
      <div className="flex basis-4/12 flex-col">
        <Blogcard />
        <Blogcard />
      </div>
      <div className="flex basis-4/12 flex-col">
        <Banner />
        <Banner />
      </div>
    </div>
  );
}

function Blogcard() {
  return (
    <div className="m-8 max-w-md rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
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
        <div className="my-2 flex flex-row">
          <Image
            src={quirkyLalit.src}
            width={50}
            height={50}
            alt="quirkyLalit"
            className="rounded-full"
          />
          <div className="mx-2 my-auto font-montser  text-[14px] text-white">
            <span>
              <i>By</i>
            </span>
            <span className="mx-2 font-[600]">
              <i>Lalit Yadav</i>
            </span>
            <span className="mx-4">
              <i>June 8, 2024</i>
            </span>
          </div>
        </div>

        <p className="my-4 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronolo.....
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

function Banner() {
  return (
    <div className="m-8 max-w-md rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <div className="relative">
        <Image
          src={spring.src}
          width={600}
          height={400}
          alt="solitude"
          className="rounded-[40px] p-8"
        />
        <div className="absolute inset-[60px] backdrop-blur-sm"></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
          <p className="mt-2 font-primary text-lg">“To go wrong in one&#39;s own way is better than to go right in someone else&#39;s.”</p>
        </div>
      </div>
    </div>
  );
}

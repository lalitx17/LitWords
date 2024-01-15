
import Image from "next/image";

import solitude from "../../public/image/solitude.jpg";

import quirkyLalit from "../../public/image/QuirkyLality2.jpg";



export default function Blogcard() {
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
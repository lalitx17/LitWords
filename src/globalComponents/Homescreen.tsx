import Image from "next/image";

import quirkyLalit from "../../public/image/QuirkyLality2.jpg";
import lalitx from "../../public/image/lalitx.jpg";

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

  export default HomeScreen;
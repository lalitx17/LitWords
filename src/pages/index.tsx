import Head from "next/head";
import Navbar from "~/globalComponents/Navbar";
import HomeScreen from "~/globalComponents/Homescreen";
import solitude from "../../public/image/solitude.jpg";
import Footer from "~/globalComponents/Footer";
import BlogHouse from "~/globalComponents/BlogHouse";
import LitwordsWhite from "../../public/image/litwordsWhite.png";
import Instagram from "../../public/image/instagram-logo.png";
import Github from "../../public/image/github.png";
import Twitter from "../../public/image/twitter.png";
import Image from "next/image";

export default function Home() {
  console.log("server side rendering");
  return (
    <>
      <Head>
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
            <div className="flex flex-row items-center justify-center md:gap-x-10 gap-x-6 md:justify-end md:me-14">
              <div className="mt-2">
                <Image src={Instagram.src} alt="Litwords" width={22} height={50} />
              </div>
              <div className="mt-2">
                <Image src={Github.src} alt="Litwords" width={22} height={50} />
              </div>
              <div className="mt-2">
                <Image src={Twitter.src} alt="Litwords" width={19} height={50} />
              </div>
            </div>
          </div>
          <div className="bg1 bg2">
            <div className="h-full backdrop-blur">
            <Navbar imageSrc={LitwordsWhite.src} className={"text-white"}/>
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
          <Footer classNameColor={"bg-secondary-background, text-white"}  />
        </div>
        
      </main>
      
    </>
  );
}





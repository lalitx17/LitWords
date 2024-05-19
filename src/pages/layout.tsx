import type { ReactNode } from 'react';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import LitWordsBlack from '../../public/image/litwordsBlack.png';
import Instagram from "../../public/image/instagram-logo.png";
import Github from "../../public/image/github.png";
import Twitter from "../../public/image/twitter.png";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
     <main>
        <div className="mx-auto my-12 w-[93%] rounded-lg bg-white ">
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
          <Navbar imageSrc={LitWordsBlack.src} className={"text-black"}/>
          <main>{children}</main>
          <Footer classNameColor={"bg-white, text-black"} />
        </div>
        
      </main>
    </>
  );
}

export default Layout;


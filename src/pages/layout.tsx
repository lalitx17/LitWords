import type { ReactNode } from 'react';
import Footer from '../globalComponents/Footer';
import Navbar from '../globalComponents/Navbar';
import LitWordsBlack from '../../public/image/litwordsBlack.png';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
     <main>
        <div className="mx-auto my-12 w-[93%] rounded-lg bg-white ">
          <div className="h-10 rounded-t-lg bg-gradient-to-r from-purpleG to-blueG">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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


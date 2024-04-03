import Image from "next/image";
import spring from "../../public/image/spring.jpg";

export default function Banner() {
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
            <p className="mt-2 font-primary text-lg">
              “To go wrong in one&#39;s own way is better than to go right in
              someone else&#39;s.”
            </p>
          </div>
        </div>
      </div>
    );
  }
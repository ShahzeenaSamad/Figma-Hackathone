

import Image from "next/image";
import React from "react";

const TopSelling = () => {
  return (
    <div className="relative w-[1440px] h-745px] bg-white">
      <div className="absolute w-[346px] h-[58px] top-[1728px] left-[546px] flex justify-center items-center ">
        <p className="font-extrabold text-5xl">TOP SELLING</p>
      </div>

      
         {/* BOX 1 */}

      {/* Second div hover effect */}
      <div className="absolute w-[295px] h-[298px] top-[1841px] left-[100px] rounded-2xl bg-slate-200 hover:border-2 hover:border-blue-500">
      <Image
          src="/images/image 7 (1).png"
          alt="Stars"
          width={295}
          height={298}
          className="rounded-2xl"
        />
      </div>

      {/* Third div and text */}
      <div className="absolute w-[194px] h-[27px] top-[2155px] left-[100px] flex justify-center items-center">
        <p className="text-[15px] font-bold ">VERTICAL STRIPED SHIRT</p>
      </div>

      {/* Fourth div */}
      <div className="absolute w-[150px] h-[19px] top-[2190px] left-[100px] flex justify-center items-center">
        <Image
          src="/images/stars.png"
          alt="Stars"
          width={150}
          height={19}
        />
      </div>

      {/* Fifth div  */}
      <div className="absolute w-[55px] h-[32px] top-[2217px] left-[100px] flex justify-center items-center">
        <Image src="/images/$120.png" alt="Price" width={55} height={32} />
      </div>

       {/* BOX 2 */}

      {/* Second div hover effect */}
      <div className="absolute w-[295px] h-[298px] items-center justify-center top-[1841px] left-[415px] bg- hover:border-2 hover:border-blue-500">
      <Image
          src="/images/image 8 (1).png"
          alt="Stars"
          width={295}
          height={298}
          className="rounded-2xl"
        />
      </div>

      {/* Third div and text */}
      <div className="absolute w-[226px] h-[27px] top-[2155px] left-[415px] flex justify-center items-center">
        <p className="text-[15px] font-bold ">COURAGE GRAPHIC T-SHIRT</p>
      </div>

      {/* Fourth div */}
      <div className="absolute w-[150px] h-[19px] top-[2190px] left-[415px] flex justify-center items-center">
        <Image
          src="/images/stars.png"
          alt="Stars"
          width={150}
          height={19}
        />
      </div>

      {/* Fifth div  */}
      <div className="absolute w-[200px] h-[32px] top-[2217px] left-[415px] flex justify-center items-center">
        <Image src="/images/Frame 59 (2).png" alt="Price" width={200} height={32} />
      </div>

      {/* BOX 3 */}

     {/* Second div hover effect */}
     <div className="absolute w-[295px] h-[298px] top-[1841px] left-[730px] rounded-2xl bg-slate-200 hover:border-2 hover:border-blue-500">
     <Image
          src="/images/image 9 (1).png"
          alt="Stars"
          width={295}
          height={298}
          className="rounded-2xl"
        />
      </div>

      {/* Third div and text */}
      <div className="absolute w-[239px] h-[27px] top-[2155px] left-[730px] flex justify-center items-center">
        <p className="text-[15px] font-bold ">LOOSE FIT BERMUDA SHORTS</p>
      </div>

      {/* Fourth div */}
      <div className="absolute w-[150px] h-[19px] top-[2190px] left-[730px] flex justify-center items-center">
        <Image
          src="/images/stars.png"
          alt="Stars"
          width={150}
          height={19}
        />
      </div>

      {/* Fifth div  */}
      <div className="absolute w-[56px] h-[32px] top-[2217px] left-[730px] flex justify-center items-center">
        <Image src="/images/$180.png" alt="Price" width={55} height={32} />
      </div>
      {/* BOX 4 */}

      {/* Second div hover effect */}
      <div className="absolute w-[295px] h-[298px] top-[1841px] rounded-2xl left-[1045px] bg-[#F0EEED] hover:border-2 hover:border-blue-500">
      <Image
          src="/images/image 10 (1).png"
          alt="Stars"
          width={250}
          height={298}
          className="rounded-2xl"
        />
      </div>

      {/* Third div and text */}
      <div className="absolute w-[185px] h-[27px] top-[2155px] left-[1045px] flex justify-center items-center">
        <p className="text-[15px] font-bold ">FADED SKINNY JEANS</p>
      </div>

      {/* Fourth div */}
      <div className="absolute w-[150px] h-[19px] top-[2190px] left-[1045px] flex justify-center items-center">
        <Image
          src="/images/stars.png"
          alt="Stars"
          width={150}
          height={19}
        />
      </div>

      {/* Fifth div  */}
      <div className="absolute w-[189px] h-[32px] top-[2217px] left-[1045px] flex justify-center items-center">
        <Image src="/images/Frame 44.png" alt="Price" width={189} height={32} />
      </div>
       {/* View All Button */}
      <div className="absolute w-[218px] h-[52px] top-[2285px] left-[611px] border border-gray-400 rounded-full flex justify-center items-center hover:border-blue-500">
        <p className="font-semibold text-lg">View All</p>
      </div>

      </div>

  );
};

export default TopSelling;

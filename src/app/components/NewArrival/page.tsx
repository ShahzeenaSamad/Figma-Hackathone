import Image from "next/image";
import React from "react";

const NewArrival = () => {
  return (
    <div className="relative w-[1440px] h-745px] bg-white">
      <div className="absolute w-[403px] h-[58px] top-[991px] left-[518px] flex justify-center items-center ">
        <p className="font-extrabold text-5xl">NEW ARRIVALS</p>
      </div>

      
         {/* BOX 1 */}

      {/* Second div hover effect */}
      <div className="absolute w-[295px] h-[298px] top-[1104px] left-[100px] rounded-2xl bg-slate-200 hover:border-2 hover:border-blue-500">
      <Image
          src="/images/image 7.png"
          alt="Stars"
          width={296}
          height={444}
          className="rounded-2xl"
        />
      </div>

      {/* Third div and text */}
      <div className="absolute w-[225px] h-[27px] top-[1418px] left-[100px] flex justify-center items-center">
        <p className="text-[15px] font-bold ">T-SHIRT WITH TAPE DETAILS</p>
      </div>

      {/* Fourth div */}
      <div className="absolute w-[150px] h-[19px] top-[1453px] left-[100px] flex justify-center items-center">
        <Image
          src="/images/stars.png"
          alt="Stars"
          width={150}
          height={19}
        />
      </div>

      {/* Fifth div  */}
      <div className="absolute w-[55px] h-[32px] top-[1480px] left-[100px] flex justify-center items-center">
        <Image src="/images/$120.png" alt="Price" width={55} height={32} />
      </div>

       {/* BOX 2 */}

      {/* Second div hover effect */}
      <div className="absolute w-[295px] h-[298px] items-center justify-center top-[1104px] left-[415px] bg-[#F0EEED] hover:border-2 hover:border-blue-500">
      <Image
          src="/images/image 8.png"
          alt="Stars"
          width={270}
          height={298}
          className="rounded-2xl"
        />
      </div>

      {/* Third div and text */}
      <div className="absolute w-[150px] h-[27px] top-[1418px] left-[415px] flex justify-center items-center">
        <p className="text-[15px] font-bold ">SKINNY FIT JEANS</p>
      </div>

      {/* Fourth div */}
      <div className="absolute w-[150px] h-[19px] top-[1453px] left-[415px] flex justify-center items-center">
        <Image
          src="/images/stars.png"
          alt="Stars"
          width={150}
          height={19}
        />
      </div>

      {/* Fifth div  */}
      <div className="absolute w-[200px] h-[32px] top-[1480px] left-[415px] flex justify-center items-center">
        <Image src="/images/Frame 59 (2).png" alt="Price" width={200} height={32} />
      </div>

      {/* BOX 3 */}

     {/* Second div hover effect */}
     <div className="absolute w-[295px] h-[298px] top-[1104px] left-[730px] rounded-2xl bg-slate-200 hover:border-2 hover:border-blue-500">
     <Image
          src="/images/image 9.png"
          alt="Stars"
          width={296}
          height={444}
          className="rounded-2xl"
        />
      </div>

      {/* Third div and text */}
      <div className="absolute w-[151px] h-[27px] top-[1418px] left-[730px] flex justify-center items-center">
        <p className="text-[15px] font-bold ">CHECKERED SHIRT</p>
      </div>

      {/* Fourth div */}
      <div className="absolute w-[150px] h-[19px] top-[1453px] left-[730px] flex justify-center items-center">
        <Image
          src="/images/stars.png"
          alt="Stars"
          width={150}
          height={19}
        />
      </div>

      {/* Fifth div  */}
      <div className="absolute w-[56px] h-[32px] top-[1480px] left-[730px] flex justify-center items-center">
        <Image src="/images/$180.png" alt="Price" width={55} height={32} />
      </div>
      {/* BOX 4 */}

      {/* Second div hover effect */}
      <div className="absolute w-[295px] h-[298px] top-[1104px] rounded-2xl left-[1045px] bg-slate-200 hover:border-2 hover:border-blue-500">
      <Image
          src="/images/image 10.png"
          alt="Stars"
          width={296}
          height={444}
          className="rounded-2xl"
        />
      </div>

      {/* Third div and text */}
      <div className="absolute w-[199px] h-[27px] top-[1418px] left-[1045px] flex justify-center items-center">
        <p className="text-[15px] font-bold ">SLEEVE STRIPED T-SHIRT</p>
      </div>

      {/* Fourth div */}
      <div className="absolute w-[150px] h-[19px] top-[1453px] left-[1045px] flex justify-center items-center">
        <Image
          src="/images/stars.png"
          alt="Stars"
          width={150}
          height={19}
        />
      </div>

      {/* Fifth div  */}
      <div className="absolute w-[189px] h-[32px] top-[1480px] left-[1045px] flex justify-center items-center">
        <Image src="/images/Frame 44.png" alt="Price" width={189} height={32} />
      </div>
       {/* View All Button */}
      <div className="absolute w-[218px] h-[52px] top-[1548px] left-[611px] border border-gray-400 rounded-full flex justify-center items-center hover:border-blue-500">
        <p className="font-semibold text-lg">View All</p>
      </div>

      </div>

  );
};

export default NewArrival;

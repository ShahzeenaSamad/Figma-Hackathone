import Image from "next/image";
import React from "react";

const MyCart = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
       <div className="absolute w-[290px] h-[48px] left-[100px] top-[204px]">
        <p className="font-extrabold text-5xl">YOUR CART</p>
       </div>
    <div className="absolute w-[715px] h-[508px] left-[100px] top-[276px] border rounded-2xl">
      {/* First Inner Div */}
      <div className="absolute w-[667px] h-[124px] left-[24px] top-[20px] ">
        <div className="absolute w-[124px] h-[124px] left-[0px] top-[0px] ">
          <Image
            src="/images/Frame 33.png"
            alt="logo"
            width={124}
            height={124}
          />
        </div>
        <div className="absolute w-[227px] h-[118px] left-[164px] top-[0px]">
          <p className="font-bold text-1xl">Gradient Graphic T-shirt</p>
          <p className="text-sm pt-2">Size: Large</p>
          <p className="text-sm pt-2"> Color: White </p>
          <p className="font-bold text-2xl pt-2">$145</p>
        </div>
        <div className="absolute w-[225px] h-[124px] left-[442px] top-[0px] ">
          <Image
            src="/images/Frame 95.png"
            alt="logo"
            width={225}
            height={124}
          />
        </div>
      </div>

      {/* Second Inner Div */}
      <div className="absolute w-[667px] h-[124px] left-[24px] top-[192px]  ">
        <div className="absolute w-[124px] h-[124px] left-[0px] top-[0px]">
          <Image
            src="/images/Frame 72.png"
            alt="logo"
            width={124}
            height={124}
          />
        </div>
        <div className="absolute w-[151px] h-[118px] left-[164px] top-[0px] ">
          <p className="font-bold text-1xl">Checkered Shirt</p>
          <p className="text-sm pt-2">Size: Medium</p>
          <p className="text-sm pt-2"> Color: Red </p>
          <p className="font-bold text-2xl pt-2">$180</p>
        </div>
        <div className="absolute w-[225px] h-[124px] left-[442px] top-[0px]">
          <Image
            src="/images/Frame 95.png"
            alt="logo"
            width={225}
            height={124}
          />
        </div>
      </div>

      {/* Third Inner Div */}
      <div className="absolute w-[667px] h-[124px] left-[24px] top-[364px] ">
        <div className="absolute w-[124px] h-[124px] left-[0px] top-[0px] ">
          <Image
            src="/images/Frame 71.png"
            alt="logo"
            width={124}
            height={124}
          />
        </div>
        <div className="absolute w-[150px] h-[118px] left-[164px] top-[0px] ">
          <p className="font-bold text-1xl">Skinny Fit Jeans</p>
          <p className="text-sm pt-2">Size: Large</p>
          <p className="text-sm pt-2"> Color: Blue </p>
          <p className="font-bold text-2xl pt-2">$240</p>
        </div>
        <div className="absolute w-[225px] h-[124px] left-[442px] top-[0px] ">
          <Image
            src="/images/Frame 95.png"
            alt="logo"
            width={225}
            height={124}
          />
        </div>
      </div>
    </div>

    {/* Right Side Div */}
<div className="absolute w-[505px] h-[458px] left-[835px] top-[276px] border rounded-2xl">
<div className="absolute w-[179px] h-[32px] left-[24px] top-[20px]">
  <p className="text-xl font-bold">Order Summary</p>
</div>
<div className="absolute w-[457px] h-[193px] left-[24px] top-[76px]">
<Image
            src="/images/Frame 102.png"
            alt="logo"
            width={457}
            height={193}
          />
</div>
<div className="absolute w-[457px] h-[48px] left-[24px] top-[293px]">
<Image
            src="/images/Frame 101.png"
            alt="logo"
            width={457}
            height={48}
          />
</div>
<div className="absolute w-[457px] h-[60px] left-[24px] top-[365px]">
<Image
            src="/images/Frame 14.png"
            alt="logo"
            width={457}
            height={60}
          />
</div>
</div>

</div>
  );
};

export default MyCart;

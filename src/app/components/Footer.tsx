

import React from 'react';

const Footer = () => {
  return (
    <div className="relative min-h-screen">
      <div className= "w-[1441px] h-[589px] -mt-[3781px]">
      <div className="w-[1441px] h-[499px] bg-[#F0F0F0] -mt-[90px] relative">
        <div className="absolute w-[1240px] h-[177px] bg-red-300 top-[140px] left-[100px]">
          {/* First inner div */}
          <div className="absolute w-[248px] h-[177px] top-0 left-0 bg-blue-300"></div>
          {/* Second inner div */}
          <div className="absolute w-[104px] h-[177px] top-0 left-[361.5px] bg-green-300"></div>
          {/* Third inner div */}
          <div className="absolute w-[136px] h-[177px] top-0 left-[579px] bg-yellow-300"></div>
          {/* Fourth inner div */}
          <div className="absolute w-[149px] h-[177px] top-0 left-[828px] bg-purple-300"></div>
          {/* Fifth inner div */}
          <div className="absolute w-[149px] h-[177px] top-0 left-[1091px] bg-orange-300"></div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
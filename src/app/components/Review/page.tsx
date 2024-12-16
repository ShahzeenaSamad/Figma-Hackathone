import Image from "next/image";

const Reviews = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="absolute w-[654px] h-[58px] left-[100px] top-[3363px]">
        <p className="font-extrabold text-5xl pt-2">OUR HAPPY CUSTOMERS</p>
      </div>

      {/* Box 1 */}
      <div className="absolute w-[400px] h-[240px] left-[100px] top-[3461px]">
        <div className="absolute w-[336px] h-[183px] left-[32px] top-[28px]">
          <Image
            src="/images/Frame 30.png"
            alt="Stars"
            width={336}
            height={183}
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* Box 2 */}
      <div className="absolute w-[400px] h-[240px] left-[520px] top-[3461px] ">
        <div className="absolute w-[336px] h-[183px] left-[32px] top-[28px] ">
          <Image
            src="/images/Frame 30 (1).png"
            alt="Stars"
            width={336}
            height={183}
            className="rounded-2xl"
          />
        </div>
      </div>

      {/* Box 3 */}
      <div className="absolute w-[400px] h-[240px] left-[940px] top-[3461px]">
        <div className="absolute w-[336px] h-[183px] left-[32px] top-[28px] ">
          <Image
            src="/images/Frame 30 (2).png"
            alt="Stars"
            width={336}
            height={183}
            className="rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;

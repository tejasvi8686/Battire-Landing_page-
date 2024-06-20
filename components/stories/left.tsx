import Image, { StaticImageData } from "next/image";
import React from "react";
import Map from "@/public/assets/map.svg";

interface LeftProps {
  scooterImage: StaticImageData;
  selectedColor: string;
}

const Left: React.FC<LeftProps> = ({ scooterImage, selectedColor }) => {
  const colorName = selectedColor === "#a0cabb" ? "Sparkling Green" : "Sparkling Gray";

  return (
    <section className="bg-grey sm:w-[45%] w-full sm:pl-24 pl-5 sm:pr-16 pr-5 sm:pt-16 pt-11 sm:pb-20 pb-5">
      <div className="flex flex-row justify-between items-center ">
        <h1 className="text-2xl font-semibold">Stories</h1>
        <div className="flex flex-row gap-2 items-center 2">
          <div className="h-8 w-8 rounded-full" style={{ backgroundColor: selectedColor }}></div>
          <span className="font-normal text-sm">{colorName}</span>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="border-0 md:border-2 md:border-dashed mt-20 mx-16">
        <div className="p-2">
          <Image src={scooterImage} width={374} height={263} alt="scooty" />
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col sm:gap-0 gap-7">
          <span className="text-sm font-normal">Booking Amount</span>
          <span className="sm:text-[40px] text-[25px] font-semibold">₹2,500/-</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-5 items-baseline">
            <div className="flex flex-col space-y-1">
              <p className="text-[10px] font-normal text-gray-500">
                *Ex-showroom price in
              </p>
              <p className="text-[10px] font-normal text-gray-400">
                (incl. FAME II Subsidy )
              </p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <p className="sm:text-base text-[10px]">New Delhi</p>
              <div className="border-dashed border-[1px] p-[2px]">
                <Image src={Map} height={20} width={16} alt="map" />
              </div>
            </div>
          </div>

          <p className="text-[22px] font-normal">₹ 1,17,357/-</p>
        </div>
      </div>
    </section>
  );
};

export default Left;

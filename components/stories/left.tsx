"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import React from "react";
import LocationDropdown from "@/components/Location";

interface LeftProps {
  scooterImage: StaticImageData;
  selectedColor: string;
  selectedLocation: string;
  onLocationSelect: (location: string) => void;
}

const Left: React.FC<LeftProps> = ({
  scooterImage,
  selectedColor,
  selectedLocation,
  onLocationSelect,
}) => {
  const colorName =
    selectedColor === "#a0cabb" ? "Sparkling Green" : "Sparkling Gray";

  return (
    <section className="bg-grey md:w-[45%] w-full sm:pl-16 pl-5 sm:pr-16 pr-5 sm:pt-16 pt-11 sm:pb-20 pb-5">
      <div className="flex flex-row justify-between items-center ">
        <h1 className="text-2xl font-semibold">Stories</h1>
        <div className="flex flex-row gap-2 items-center 2">
          <div
            className="h-8 w-8 rounded-full"
            style={{ backgroundColor: selectedColor }}
          ></div>
          <span className="font-normal text-sm">{colorName}</span>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="border-0 md:border-2 md:border-dashed mt-20 mx-16">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="p-2"
        >
          <Image src={scooterImage} width={374} height={263} alt="scooty" />
        </motion.div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col sm:gap-0 gap-7">
          <span className="text-sm font-normal">Booking Amount</span>
          <span className="sm:text-[40px] text-[25px] font-semibold">
            ₹2,500/-
          </span>
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
              <p className="sm:text-base text-[10px]">{selectedLocation}</p>

              <LocationDropdown onSelectLocation={onLocationSelect} />
            </div>
          </div>

          <p className="text-[22px] font-normal">₹ 1,17,357/-</p>
        </div>
      </div>
    </section>
  );
};

export default Left;

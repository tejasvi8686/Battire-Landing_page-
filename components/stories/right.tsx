import Image from "next/image";
import React from "react";
import Tick from "@/public/assets/tick.svg";
import Scooter from "@/public/assets/scooter(g) .svg";
import { Button } from "../ui/button";
import Arrow from "@/public/assets/Arrow.svg";

const steps = [
  { text: "01 Select Model", className: "hidden sm:block" },
  { text: "02 Select Color", className: "" },
  { text: "03 Your Detail and preferred location", className: "text-[#ABAB]" },
];

const commonClassName = "text-xs font-semibold leading-4 uppercase";

const Step = ({ text, className, isLast }) => (
  <p className={`${commonClassName} ${className} ${isLast ? "sm:text-[#ABAB]" : ""}`}>
    {isLast ? (
      <span className="block sm:hidden">{text.slice(0, 25) + (text.length > 25 ? "..." : "")}</span>
    ) : null}
    <span className={isLast ? "hidden sm:block" : ""}>{text}</span>
  </p>
);

const ColorOption = ({ color }) => (
  <div className="h-5 w-5 rounded-full" style={{ backgroundColor: color }}></div>
);

const Right = () => {
  const colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#808080"];

  return (
    <section className="bg-[#F4F4F4] sm:w-[55%] w-full sm:px-16 px-5 sm:pt-16 pt-14 sm:pb-8 pb-14">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mb-8">
          {steps.map((step, index) => (
            <Step key={index} text={step.text} className={step.className} isLast={index === 2} />
          ))}
        </div>

        <h1 className="text-3xl font-semibold text-left">
          Choose <br /> a colour
        </h1>

        <div className="flex flex-col bg-white sm:p-10 p-8 mt-6 mb-10 ">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row sm:gap-4 gap-3 items-center ">
              <Image src={Tick} height={25} width={23} alt="tick"  />
              <div>
                <h3 className="sm:text-lg text-base font-semibold">Stories</h3>
                <p className="text-sm font-normal">Sparkling Green</p>
              </div>
            </div>
            <div className="sm:w-32 w-24">
              <Image src={Scooter} layout="responsive" width={130} height={99} alt="scooter" />
            </div>
          </div>

          <div className="flex flex-row flex-wrap justify-between mt-10">
            {colors.map((color, index) => (
              <ColorOption key={index} color={color} />
            ))}
          </div>
        </div>

        <Button className="rounded-none bg-black flex flex-row justify-between p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase">Confirm</p>
          <Image src={Arrow} height={12} width={36} alt="arrow" />
        </Button>
      </div>
    </section>
  );
};

export default Right;

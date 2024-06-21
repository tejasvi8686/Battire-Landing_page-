"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Tick from "@/public/assets/tick.svg";
import { Button } from "../ui/button";
import Arrow from "@/public/assets/Arrow.svg";

interface StepProps {
  text: string;
  className: string;
  isLast: boolean;
}

interface ColorOptionProps {
  color: string;
  onSelect: (color: string) => void;
  isActive: boolean;
}

interface RightProps {
  onColorSelect: (color: string) => void;
  selectedColor: string;
  scooterImages: { [key: string]: StaticImageData };
}

const steps = [
  { text: "01 Select Model", className: "hidden sm:block" },
  { text: "02 Select Color", className: "" },
  { text: "03 Your Detail and preferred location", className: "text-[#ABAB]" },
];

const commonClassName = "text-xs font-semibold leading-4 uppercase";

const Step: React.FC<StepProps> = ({ text, className, isLast }) => (
  <p
    className={`${commonClassName} ${className} ${
      isLast ? "sm:text-[#ABAB]" : ""
    }`}
  >
    {isLast ? (
      <span className="block sm:hidden">
        {text.slice(0, 25) + (text.length > 25 ? "..." : "")}
      </span>
    ) : null}
    <span className={isLast ? "hidden sm:block" : ""}>{text}</span>
  </p>
);

const ColorOption: React.FC<ColorOptionProps> = ({
  color,
  onSelect,
  isActive,
}) => (
  <div
    className={`h-7 w-7 rounded-full cursor-pointer ${
      isActive ? "border-[3px] border-black" : ""
    }`}
    style={{ backgroundColor: color }}
    onClick={() => onSelect(color)}
  ></div>
);

const Right: React.FC<RightProps> = ({
  onColorSelect,
  selectedColor,
  scooterImages,
}) => {
  const colors = Object.keys(scooterImages);
  const colorName =
    selectedColor === "#a0cabb" ? "Sparkling Green" : "Sparkling Gray";

  return (
    <section className="bg-[#F4F4F4] md:w-[55%] w-full sm:px-16 px-5 sm:pt-16 pt-14 sm:pb-8 pb-14">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between mb-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              text={step.text}
              className={step.className}
              isLast={index === 2}
            />
          ))}
        </div>

        <h1 className="text-3xl font-semibold text-left mb-8">
          Choose <br /> a colour
        </h1>

        <div className="flex flex-col bg-white sm:p-10 p-8 mt-6 mb-20">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row sm:gap-4 gap-3 items-center ">
              <Image src={Tick} height={25} width={23} alt="tick" />
              <div>
                <h3 className="sm:text-2xl text-base font-semibold">Stories</h3>
                <p className="text-sm font-normal">{colorName}</p>
              </div>
            </div>
            <div className="sm:w-32 w-24">
              <Image
                src={scooterImages[selectedColor]}
                layout="responsive"
                width={130}
                height={99}
                alt="scooter"
              />
            </div>
          </div>

          <div className="flex flex-row flex-wrap gap-4 mt-10">
            {colors.map((color, index) => (
              <ColorOption
                key={index}
                color={color}
                onSelect={onColorSelect}
                isActive={color === selectedColor}
              />
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

'use client'
import React, { useState } from "react";
import Left from "@/components/stories/left";
import Right from "@/components/stories/right";
import ScooterGreen from "@/public/assets/scooter(g) .svg";
import ScooterWhite from "@/public/assets/scooter(w).svg";
import { StaticImageData } from "next/image";

interface ScooterImages {
  [key: string]: StaticImageData;
}

export default function Home() {
  const [selectedColor, setSelectedColor] = useState<string>("#a0cabb"); 
  const [scooterImage, setScooterImage] = useState<StaticImageData>(ScooterGreen); 

  const scooterImages: ScooterImages = {
    "#a0cabb": ScooterGreen,
    "#707485": ScooterWhite,
    
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setScooterImage(scooterImages[color]);
  };

  return (
    <main className="mt-[56px] flex sm:flex-row flex-col">
      <Left scooterImage={scooterImage} selectedColor={selectedColor} />
      <Right onColorSelect={handleColorSelect} selectedColor={selectedColor} scooterImages={scooterImages} />
    </main>
  );
}

'use client'
import React, { useState } from "react";
import Left from "@/components/stories/left";
import Right from "@/components/stories/right";
import ScooterGreen from "@/public/assets/scooter(g) .svg";
import ScooterWhite from "@/public/assets/scooter(w).svg";

export default function Home() {
  const [selectedColor, setSelectedColor] = useState("#a0cabb"); 
  const [scooterImage, setScooterImage] = useState(ScooterGreen);  

  const scooterImages = {
    "#a0cabb": ScooterGreen,
    "#707485": ScooterWhite,
  };

  const handleColorSelect = (color) => {
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

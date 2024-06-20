'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Map from "@/public/assets/map.svg"
const locations = ['New Delhi', 'Mumbai', 'Bangalore'];

interface LocationDropdownProps {
  onSelectLocation: (location: string) => void;
}

const LocationDropdown: React.FC<LocationDropdownProps> = ({ onSelectLocation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocationSelect = (location: string) => {
    onSelectLocation(location);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className='border-dashed border-[1px] p-[2px] cursor-pointer'
        onClick={toggleDropdown}
      >
        <Image src={Map} height={20} width={16} alt='map' />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {locations.map((location) => (
              <button
                key={location}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                onClick={() => handleLocationSelect(location)}
              >
                {location}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;

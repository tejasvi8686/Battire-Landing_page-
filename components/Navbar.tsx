"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo1 from "@/public/assets/logo.svg";
import { Button } from "./ui/button";
import Hamburg from "@/public/assets/hamburg.svg";
import { itemleft, itemright } from "@/constants";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  

  return (
    <nav className="bg-black opacity-80 fixed w-full z-20 top-0 start-0 sm:px-8 px-0 h-[60px]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/"
            className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
          >
            <Image src={Logo1} alt=" Logo" height={21} width={76} />
          </Link>

          <ul className="hidden md:flex space-x-8 rtl:space-x-reverse items-center">
            {itemleft.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-white text-sm font-normal"
                  href={item.href}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <Link className="text-white text-sm font-normal" href="/">
              Superbike{"   "}
              <sup className="bg-amber-400 text-black px-[4px] py-[1px] rounded-[1px]">
                new
              </sup>
            </Link>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
          <ul className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {itemright.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-white text-sm font-normal"
                  href={item.href}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-sticky"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden   dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <Image src={Hamburg} height={16} width={16} alt="hamburg" />
        </button>
      </div>
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col px-4 font-medium    rtl:space-x-reverse md:flex-row  ">
          {itemleft.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
          <Link className="text-black" href="/">
            Superbike{"  "}
            <sup className="bg-amber-400 text-black px-[4px] py-[1px] rounded-[1px]">
              new
            </sup>
          </Link>
          {itemright.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

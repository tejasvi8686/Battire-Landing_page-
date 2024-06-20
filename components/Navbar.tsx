"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo1 from "@/public/assets/logo.svg";
import Hamburg from "@/public/assets/hamburg.svg";
import { itemleft, itemright } from "@/constants";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#313131]  fixed w-full z-5 top-0  px-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link
            href="/"
            className="flex flex-row items-center space-x-2 rtl:space-x-reverse mr-5"
          >
            <Image src={Logo1} alt=" Logo" height={30} width={86} />
          </Link>
          <div className="md:hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
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
        </div>

        <div className="md:hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
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
          className="inline-flex items-center w-10 h-10 justify-center  lg:hidden "
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <Image src={Hamburg} height={16} width={16} alt="hamburg" />
        </button>
      </div>
      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col px-4 py-4  lg:flex-row bg-slate-700 h-[100vh]  gap-5">
          {itemleft.map((item, index) => (
            <li key={index}>
              <Link className="text-lg  text-white" href={item.href}>
                {item.text}
              </Link>
            </li>
          ))}
          <Link className="text-white text-lg" href="/">
            Superbike{"  "}
            <sup className="bg-amber-400 text-white px-[4px] py-[1px] rounded-[1px]">
              new
            </sup>
          </Link>
          {itemright.map((item, index) => (
            <li key={index}>
              <Link className="text-lg text-white" href={item.href}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

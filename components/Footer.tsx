import Image from "next/image";
import Link from "next/link";
import React from "react";
import {links} from "@/constants/index"
import { footerLinks } from "@/constants/index";
import { Button } from "./ui/button";



const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto sm:px-24 sm:py-16 px-6 py-9">
        <div className="flex sm:flex-row sm:gap-0 gap-5 flex-col items-center justify-between">
          <h1 className="sm:text-5xl text-2xl font-semibold text-white">
            Stay Informed <br />
            About Battre
          </h1>

          <div className=" flex flex-row  sm:items-center">
            <input
              type="email"
              placeholder="Your email ID"
              className="flex-grow p-5 bg-[#434343] text-white placeholder-gray-400 focus:outline-none"
            />
            <Button className=" p-8 px-8 text-sm bg-gray-200 text-black hover:bg-gray-300 transition duration-200 rounded-none">
              SUBSCRIBE
            </Button>
          </div>
        </div>
        <hr className="my-6 border-[#434343] sm:mx-auto  lg:my-8" />
        <div className="grid grid-cols-1 md:grid-cols-5 sm:gap-4 my-16 gap-4">
          <p className="text-white text-left text-sm font-normal">
            Kasra No 351, 80 Feet Road Vinayak City Guru Marg, Sirsi Road
            Neemera, Bindayaka, <br /> <br /> Jaipur, Rajasthan, 302041 <br />{" "}
            <br /> CIN: U29100RJ2017PTC059452
          </p>

          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col">
              <h2 className="mb-4 text-sm font-normal text-[#898989] sm:text-center">
                {section.title}
              </h2>
              <ul className="flex flex-col gap-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="sm:text-center text-sm">
                    <Link
                      href={link.href}
                      className="hover:underline font-normal text-sm text-white leading-7"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-6 border-[#434343] sm:mx-auto  lg:my-8" />
        <div className="flex sm:flex-row flex-col items-center justify-between sm:gap-0 gap-4">
          <span className="text-sm text-center text-[#434343] font-normal">
            {" "}
            © 2023 Batt:RE. All rights reserved
          </span>{" "}
          <div className="flex flex-row">
            <span className="text-sm text-center text-[#434343] font-normal">
              PRIVACY POLICY
            </span>
            <span className="text-sm text-center text-[#434343] font-normal">
              TERMS & CONDITIONS
            </span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            {links.map((link, index) => (
              <Link key={index} href={link.href} target="_blank">
                <Image
                  src={link.src}
                  height={24}
                  width={24}
                  alt={link.alt}
                  className="opacity-25"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

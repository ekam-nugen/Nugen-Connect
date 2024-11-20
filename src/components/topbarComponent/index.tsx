"use client";
import Image from "next/image";
import React from "react";
import image from '../../../public/theme_logo.png'
import SearchBox from "@/resuableComponents/SearchBox";
import { Button } from "@/resuableComponents";
import { CgGirl } from "react-icons/cg";
import { MdAccessibility } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiCustomerService2Line } from "react-icons/ri";
import imagesss from '../../../public/Waterfall-landscape.jpg'



const TopbarComponent = () => {
  return (
    <>
      <div className="py-2 px-4 w-full flex items-center justify-between">
        <div className="flex gap-2 shrink">
          <Image src={image} alt="Logo" width={200} height={200} className="object-scale-down" />
          <SearchBox />
        </div>
        <div className="flex gap-4 items-center shrink">
          <div className=" px-2 border-l-2 flex justify-center">
            <Button className="rounded-full bg-[#af52de]">Upgrade</Button>
          </div>
          <div className="text-[#2998ff] flex items-center px-2 border-l-2">
            <div className="text-2xl"><CgGirl /></div>
            <div className="whitespace-nowrap">Talk to an Expert</div>
          </div>
          <div className="text-[#2998ff] flex items-center px-2 border-l-2">Help</div>
          <div className="flex items-center gap-4 text-[#8B939C] px-2 border-l-2">
            <MdAccessibility className="text-2xl" />
            <PiChats className="text-2xl" />
            <RiCustomerService2Line className="text-2xl" />
            <IoMdNotificationsOutline className="text-2xl" />
          </div>
          <div className="flex items-center gap-2 px-2 border-l-2">
            <div className="relative">
              <div className="z-0 w-12 h-12 rounded-full">
                <Image src={imagesss} alt="image" className="w-fill rounded-full h-full " />
              </div>
              <div className="z-40 absolute h-6 -bottom-1 right-0 w-6 border-[3px] border-white rounded-full">
                <Image src={imagesss} alt="image" className="w-full h-full rounded-full" />
              </div>
            </div>
            <div className="text-[#2998ff]">
              <p>Pardeep Kumar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopbarComponent;

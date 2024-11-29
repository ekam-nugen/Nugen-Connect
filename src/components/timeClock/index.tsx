"use client";
import { Card } from "@/resuableComponents/card";
import FilterSearchHeader from "@/resuableComponents/filterSearchHeader";
import HeaderBox from "@/resuableComponents/headerBox/headerBox";
import { Button } from "@mui/material";
import { CircleCheck, GraduationCap, Timer } from "lucide-react";
import React, { useState } from "react";
import { TbLayoutBottombarCollapse } from "react-icons/tb";
import Image from "next/image";
import TimeClock from "@/resuableComponents/timeClock/timeClock";
import { IoMdArrowDropdown } from "react-icons/io";

function TimeClockComponent() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index: any) => {
    setActiveCard(index);
  };
  return (
    <div className="mt-5">
      <div className="m-5">
        <HeaderBox
          header={"Time Clock lobby"}
          headerIcon={<Timer />}
          title={"PK"}
          secondayButtonIcon={<GraduationCap />}
          secondaryButtonClassName="text-emerlad-500"
          borderClassName="hover:border-emerald-500 text-emerald-500 hover:bg-gray-100"
        />
      </div>
      <div className="flex">
        <div
          className={`mx-5 mt-5 h-full ${
            activeCard === 0 ? "w-1/2 bg-white " : "w-full bg-zinc-100"
          }`}
        >
          <div
            className={`flex justify-center h-10 text-lg pb-10 pt-6 !rounded-none ${
              activeCard === 0 ? "bg-white" : ""
            }`}
            onClick={() => handleCardClick(0)}
          >
            <Button
              className={` text-blue-500 gap-2
                ${
                  activeCard === 0
                    ? "border-b border-blue-500 text-blue-500 bg-white"
                    : "text-gray-400 bg-zinc-100"
                }`}
            >
              <CircleCheck className="h-4 w-4" />
              <div className="text-lg capitalize">Active</div>
            </Button>
          </div>
        </div>

        <div
          className={`mx-5 mt-5 h-full ${
            activeCard === 1 ? "w-full bg-white" : "w-1/2 bg-zinc-100 "
          }`}
        >
          <div
            className={`flex justify-center h-10 text-lg pb-10 pt-6  ${
              activeCard === 1 ? "bg-white" : ""
            }`}
            onClick={() => handleCardClick(1)}
          >
            <Button
              className={` text-blue-500 gap-2
                ${
                  activeCard === 1
                    ? "border-b border-blue-500 text-blue-500 bg-white"
                    : "text-gray-400 bg-zinc-100"
                }`}
            >
              <TbLayoutBottombarCollapse className="h-6 w-6" />
              <div className="text-lg capitalize"> Archived</div>
            </Button>
          </div>
        </div>
      </div>

      {activeCard === 0 && (
        <Card className="mx-5 border-none shadow-none rounded-b-xl">
          <FilterSearchHeader buttonIcon={<IoMdArrowDropdown />} />
          <hr className="border-1 border-gray-200 mb-3 mx-5" />

          <div className="flex gap-2 justify-items-center px-5 pb-10">
            <TimeClock
              smallTitle={"Time Clock"}
              largeTitle={"Time Clock"}
              assigned={"Assigned"}
              groupLabel={"All users groups"}
              nameTitle={"PK"}
              name={"Pardeep Kumar"}
              buttonText={"Access clock"}
              roles={"Admins"}
            />
          </div>
        </Card>
      )}

      {activeCard === 1 && (
        <Card className="mx-5 border-none shadow-none rounded-b-xl">
          <FilterSearchHeader />
          <hr className="border-1 border-gray-200 mb-3 mx-5" />
          <div className="mt-12 mb-5 flex justify-center">
            <Image
              src={
                "https://app.connecteam.com/images/common/asset-list/empty.png"
              }
              alt={"images"}
              height={50}
              width={80}
            />
          </div>

          <div className="text-center text-lg text-zinc-600 pb-10">
            No archived content
          </div>
        </Card>
      )}
    </div>
  );
}

export default TimeClockComponent;

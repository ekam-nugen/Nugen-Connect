"use client";
import { quickTask, attendance, checklistItems } from "@/json/dashboard";
import { DropdownMenu } from "@/resuableComponents";
import { Card, CardTitle, CardDescription } from "@/resuableComponents/card";
import SearchBox from "@/resuableComponents/SearchBox";
import { Button } from "@mui/material";
import { GiUbisoftSun } from "react-icons/gi";
import React from "react";
import { RotateCw } from "lucide-react";
import { motion } from "framer-motion";
import LeftSideDashboard from "../leftSideDashboard";

function DashboardComponent() {
  return (
    <div className="flex justify-between gap-4 md:gap-2 lg:gap-4">
      <div className="w-full">
        {/* Scroll Animation Wrapper */}
        {/* <motion.div
          className="w-full"
          initial={{ y: 0 }}
          animate={{ y: [-600] }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 1
          }}
        > */}
        <Card className="p-5 md:p-3 lg:p-5 shadow-none">
          <CardTitle className="text-xl md:text-lg lg:text-xl text-zinc-700 font-bold m-3 md:m-2 lg:m-3">
            Quick Actions
          </CardTitle>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {quickTask?.map((item, index) => (
              <div key={item.color + index}>
                <Card className="rounded-xl px-3 py-4 md:px-1 lg:px-3 flex flex-col items-center justify-center text-center shadow-sm shadow-gray-100 hover:bg-gray-200 cursor-pointer">
                  <CardTitle className={`${item?.color} p-2`}>
                    {item?.icons}
                  </CardTitle>
                  <CardDescription className="text-sm lg:text-sm md:text-xs text-gray-600 font-medium text-nowrap">
                    {item?.iconDescription}
                  </CardDescription>
                </Card>
              </div>
            ))}
          </div>
        </Card>

        {/* {/ attendance /} */}
        <Card className="p-5 md:p-3 lg:p-5 mt-5 md:mt-3 lg:mt-5">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl md:text-lg lg:text-xl text-zinc-700 font-bold p-2">
              Attendance
            </CardTitle>
            <div className="flex p-4 md:p-2 lg:p-4 justify-end gap-2 items-center">
              <SearchBox placeholder={"Search"} />
              <div className="flex justify-center text-blue-500 bg-gary-200 md:h-8 md:w-8 h-10 w-10 border-2 rounded-full items-center cursor-pointer">
                <RotateCw className="h-5 w-5 flex justify-center items-center md:h-4 md:w-5 lg:h-5 lg:w-5" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {attendance?.map((item, index) => (
              <div key={item.iconDescription + index}>
                <Card className="rounded-lg px-3 md:px-1 lg:px-3 md:py-4 lg:py-8 py-8 flex gap-2 items-center justify-center text-center shadow-sm cursor-pointer">
                  <CardTitle className="text-gray-400">{item.icons}</CardTitle>
                  <CardDescription className="text-sm text-gray-400 font-semibold">
                    {item.iconDescription}
                  </CardDescription>
                </Card>
              </div>
            ))}
          </div>
        </Card>

        {/* {/ Engagement /} */}
        <Card className="p-5 md:p-3 lg:p-5 mt-5 md:mt-3 lg:mt-5">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl md:text-lg lg:text-xl text-zinc-700 font-bold p-2">
              Engagement
            </CardTitle>
            <div>
              <DropdownMenu />
            </div>
            <div className="flex p-4 justify-end gap-2 items-center">
              <SearchBox placeholder={"Search"} />
              <div className="flex justify-center text-blue-500 bg-gary-200 md:h-6 md:w-6 h-8 w-8 rounded-full items-center cursor-pointer">
                <RotateCw className="h-5 w-5 flex justify-center items-center md:h-4 md:w-5 lg:h-5 lg:w-5" />
              </div>
            </div>
          </div>
        </Card>

        {/* {/ Activities /} */}

        <motion.div
          className="p-5 mt-5 md:mt-3 lg:mt-5 bg-white shadow-md rounded-lg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.01, 1, 1.01, 1] }}
          transition={{
            duration: 1.5,
            repeat: 1,
            ease: "easeInOut"
          }}
        >
          {checklistItems?.map((item, index) => (
            <div
              key={item?.title + index}
              className="mb-4 shadow-sm rounded-xl"
            >
              <Card className="flex w-full h-24 md:h-20 lg:h-24 justify-between gap-5 md:gap-0 lg:gap-5 rounded-x ">
                <div className="flex justify-start">
                  <div
                    className={`${item?.color} flex justify-start pr-2.5 rounded-l-xl`}
                  ></div>
                  <div className="flex flex-col items-start justify-center md:items-center md:tracking-tight lg:normal-case md:justify-start lg:justify-start max-w-full px-6 md:px-2 py-2 md:py-1 text-center">
                    {item?.title && (
                      <CardDescription className="text-lg md:text-sm flex lg:text-lg  px-4 text-zinc-600 font-normal text-start">
                        {item?.title}
                      </CardDescription>
                    )}
                    {item?.description && (
                      <CardDescription className="text-lg md:text-base lg:text-lg px-4 text-zinc-300 font-normal">
                        {item?.description}
                      </CardDescription>
                    )}
                  </div>
                </div>
                <div className="flex justify-end items-center">
                  {item.progress && (
                    <CardTitle className="text-md md:text-sm text-gray-300 font-normal px-2">
                      {item.progress}
                    </CardTitle>
                  )}
                  {item.icon && (
                    <div className="flex mx-4 text-white bg-blue-500 h-10 w-10 md:h-8 md:w-8 rounded-full items-center justify-center cursor-pointer">
                      <div className="h-6 w-6 md:h-4 md:w-4 flex md:justify-center md:items-center">
                        {item?.icon}
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </motion.div>

        {/* {/ daily Activity /} */}
        <Card className="p-5 md:hidden lg:p-5 my-5 mb-auto">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl md:text-lg lg:text-xl text-zinc-700 font-bold p-2">
              Daily Activity
            </CardTitle>
            <Button className="bg-white text-blue-500 text-lg md:text-base lg:text-lg md:py-2 lg:py-4 md:px-2 lg:px-4 flex px-4 py-2 justify-end gap-2 items-center capitalize rounded-3xl ring-2 ring-gray-200 hover:ring-blue-500">
              View History
            </Button>
          </div>
          <div className="flex flex-col justify-center items-center text-gray-300 mt-10">
            <GiUbisoftSun className="h-28 w-60" />
            <div className="text-blue-500 font-semibold text-2xl pt-4 pb-2">
              There is nothing to display
            </div>
            <div className="text-gray-600 text-lg pt-2">
              Your employees need to engage
            </div>
            <div className="text-gray-600 text-lg"> with your content</div>
          </div>
        </Card>
        {/* </motion.div> */}
      </div>
      {/* {/ leftsidedashboard /} */}
      <div className="flex justify-end">
        <LeftSideDashboard />
      </div>
    </div>
  );
}

export default DashboardComponent;

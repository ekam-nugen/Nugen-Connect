import { quickTask, attendance, checklistItems } from "@/json/dashboard";
import { DropdownMenu } from "@/resuableComponents";
import { Card, CardTitle, CardDescription } from "@/resuableComponents/card";
import SearchBox from "@/resuableComponents/SearchBox";
import { Button } from "@mui/material";
import { GiUbisoftSun } from "react-icons/gi";
import React from "react";
import { RotateCw } from "lucide-react";

function DashboardComponent() {
  return (
    <div className="mt-5">
      <Card className="p-5">
        <CardTitle className="text-xl text-zinc-700 font-bold m-3">
          Quick Actions
        </CardTitle>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {quickTask?.map((item, index) => (
            <div key={item.color + index}>
              <Card className="rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center shadow-[0px 0px 6px 0px] hover:bg-gray-200 cursor-pointer">
                <CardTitle className={`${item?.color} p-2`}>
                  {item?.icons}
                </CardTitle>
                <CardDescription className="text-sm text-gray-600 font-medium">
                  {item?.iconDescription}
                </CardDescription>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {/* attendance */}
      <Card className="p-5 mt-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-zinc-700 font-bold p-2">
            Attendance
          </CardTitle>
          <div className="flex p-4 justify-end gap-2 items-center">
            <SearchBox />
            <div className="flex justify-center text-blue-500 bg-gary-200 h-8 w-8 rounded-full items-center cursor-pointer">
              <RotateCw className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {attendance?.map((item, index) => (
            <div key={item.iconDescription + index}>
              <Card className="rounded-lg px-3 py-8 flex gap-2 items-center justify-center text-center shadow-sm cursor-pointer">
                <CardTitle className="text-gray-400">{item.icons}</CardTitle>
                <CardDescription className="text-sm text-gray-400 font-semibold">
                  {item.iconDescription}
                </CardDescription>
              </Card>
            </div>
          ))}
        </div>
      </Card>

      {/* Engagement */}
      <Card className="p-5 mt-5">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-zinc-700 font-bold p-2">
            Engagement
          </CardTitle>
          <div>
            <DropdownMenu />
          </div>
          <div className="flex p-4 justify-end gap-2 items-center">
            <SearchBox />
            <div className="flex justify-center text-blue-500 bg-gary-200 h-8 w-8 rounded-full items-center cursor-pointer">
              <RotateCw className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Card>

      {/* Activities */}
      <Card className="p-5 mt-5">
        {checklistItems?.map((item, index) => (
          <div key={item.title + index} className="mb-4 shadow-sm rounded-xl">
            <Card className="flex w-full h-24 justify-between gap-5 rounded-x ">
              <div className="flex justify-start">
                <div
                  className={`${item.color}flex justify-start pr-3 rounded-l-xl`}
                ></div>
                <div className="flex flex-col items-start justify-center max-w-full overflow-y-auto px-6 text-center">
                  <CardDescription className="text-lg px-4 text-zinc-600 font-normal text-start">
                    {item.title}
                  </CardDescription>
                  <CardDescription className="text-lg px-4 text-zinc-300 font-normal">
                    {item.description}
                  </CardDescription>
                </div>
              </div>
              <div className="flex justify-end items-center">
                {item.progress && (
                  <CardTitle className="text-md text-gray-300 font-normal px-2">
                    {item.progress}
                  </CardTitle>
                )}
                {item.icon && (
                  <div className="flex mx-4 text-white bg-blue-500 h-10 w-10 rounded-full items-center justify-center cursor-pointer">
                    <div className="h-6 w-6">{item?.icon}</div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        ))}
      </Card>

      {/* daily Activity */}
      <Card className="p-5 mt-5 mb-auto">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-zinc-700 font-bold p-2">
            Daily Activity
          </CardTitle>
          <Button className="bg-white text-blue-500 text-lg flex px-4 py-2 justify-end gap-2 items-center capitalize rounded-3xl ring-2 ring-gray-200 hover:ring-blue-500">
            View History
          </Button>
        </div>
        <div className="flex flex-col justify-center items-center text-gray-300 mt-16">
          <GiUbisoftSun className="h-32 w-60" />
          <div className="text-blue-500 font-semibold text-2xl pt-4 pb-2">
            There is nothing to display
          </div>
          <div className="text-gray-600 text-lg pt-2">
            Your employees need to engage
          </div>
          <div className="text-gray-600 text-lg"> with your content</div>
        </div>
      </Card>
    </div>
  );
}

export default DashboardComponent;

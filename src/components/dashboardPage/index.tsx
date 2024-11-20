import { quickTask, attendance, checklistItems } from "@/json/dashboard";
import { DropdownMenu } from "@/resuableComponents";
import { Card, CardTitle, CardDescription } from "@/resuableComponents/card";
import SearchBox from "@/resuableComponents/SearchBox";
import { RotateCw } from "lucide-react";
import React from "react";

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
    </div>
  );
}

export default DashboardComponent;

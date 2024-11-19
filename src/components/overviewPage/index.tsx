import { quickTask, attendance } from "@/json/dashboard";
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
            <div key={index}>
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
            <div key={index}>
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
    </div>
  );
}

export default DashboardComponent;

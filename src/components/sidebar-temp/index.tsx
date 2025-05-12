"use client";
import React from "react";
import { ADD_NEW } from "@/en";
import { sidebarItemType } from "@/types/sidebarType";
import { CirclePlus, EllipsisVertical, Grip } from "lucide-react";
import { OverviewItems, userItems, sidebarItems } from "@/json/sidebar/inedx";
import Tooltip from "@mui/material/Tooltip";

export default function SidebarComponent({ isCollapsed }: sidebarItemType) {
  return (
    <div
      className={`overflow-y-auto transition-all
      duration-100 ease-in-out`}
    >
      <div className="mb-2 px-2 md:px-1 lg:px-2">
        {OverviewItems.map((item: any, index: number) => (
          <Tooltip
            title={`${isCollapsed ? "" : item?.label}`}
            placement="right"
            key={index + item.label + item.label}
          >
            <div
              key={item.label + index}
              className={`flex items-center mb-2 h-9 md:h-6 lg:h-9 rounded-md px-1 group hover:bg-gray-100 shadow-x-lg hover:cursor-pointer ${
                !isCollapsed ? "justify-center" : ""
              }`}
            >
              <span className="text-xl lg:h-7.5 lg:w-7.5 h-7.5 w-7.5 md:h-6 md:w-6 text-zinc-600 flex items-center justify-center rounded-md px-1">
                <item.icon />
              </span>
              {isCollapsed && (
                <p className="ml-1 font-normal text-sm md:text-xs lg:text-sm text-gray-700">
                  {item?.label}
                </p>
              )}
            </div>
          </Tooltip>
        ))}
        <hr className="border-1 border-zinc-200"></hr>
      </div>

      {/* user Area  */}

      <div className="mb-2 px-2 md:px-1 lg:px-2">
        {userItems?.map((item: any, index: number) => (
          <Tooltip
            title={`${isCollapsed ? "" : item?.label}`}
            placement="right"
            key={index + item.label}
          >
            <div
              key={item.label + index}
              className={`flex items-center mb-2 h-9 md:h-6 lg:h-9 rounded-md px-1 hover:bg-gray-100 group hover:cursor-pointer ${
                !isCollapsed ? "justify-center" : ""
              }`}
            >
              <span className="text-xl lg:h-7.5 lg:w-7.5 h-7.5 w-7.5 md:h-6 md:w-6 text-zinc-600 flex items-center justify-center rounded-md px-1 ">
                <item.icon />
              </span>

              {isCollapsed && (
                <p className="ml-1 font-normal text-sm md:text-xs lg:text-sm text-gray-700">
                  {item?.label}
                </p>
              )}
            </div>
          </Tooltip>
        ))}
        <hr className="border-1 border-zinc-200"></hr>
      </div>

      {/* sidebar components tabs */}

      <div className="mb-4 items-center">
        {sidebarItems?.map((item: any, index: number) => (
          <Tooltip
            title={`${isCollapsed ? "" : item?.label}`}
            key={index + item.label}
            placement="right"
          >
            <div
              key={item.label + index}
              className={`flex items-center mb-0.5 h-10 md:h-9 lg:h-10 rounded-md pr-1 hover:bg-gray-100 transition-all group relative hover:cursor-pointer ${
                !isCollapsed
                  ? "justify-center px-1"
                  : "duration-500 hover:translate-x-1 transition-transform mr-4 md:mr-2 lg:mr-4"
              }`}
            >
              {isCollapsed && (
                <div
                  className={`${
                    !isCollapsed
                      ? "hidden"
                      : "absolute left-0 flex opacity-0 group-hover:opacity-90 mr-1.5"
                  } transition-opacity duration-100`}
                >
                  <Grip className="h-4 w-4 md:h-3 md:w-3 lg:h-4 lg:w-4 text-gray-500" />
                </div>
              )}
              <span
                className={`text-xl h-6 w-6 text-white flex items-center justify-center rounded-md px-1 ${
                  item.color
                } ${!isCollapsed ? "ml-0" : "ml-4 md:ml-3 lg:ml-4"}`}
              >
                <item.icon />
              </span>
              {isCollapsed && (
                <p className="ml-1 font-normal text-sm md:text-xs lg:text-sm text-gray-700 group-hover:truncate max-w-[120px] text-nowrap">
                  {item?.label}
                </p>
              )}
              {isCollapsed && (
                <div className="ml-auto flex justify-end">
                  <span className="group-hover:opacity-90 opacity-0 transition-opacity duration-300">
                    <EllipsisVertical className="h-4 w-4 md:h-3 md:w-3 lg:h-4 lg:w-4 text-gray-500" />
                  </span>
                </div>
              )}
            </div>
          </Tooltip>
        ))}

        {sidebarItems?.map((item: any, index: number) => (
          <Tooltip
            title={`${isCollapsed ? "" : item?.label}`}
            key={index + item.label}
            placement="right"
          >
            <div
              key={item.label + index}
              className={`flex items-center mb-0.5 h-10 rounded-md pr-1 hover:bg-gray-100 transition-all group relative hover:cursor-pointer ${
                !isCollapsed
                  ? "justify-center"
                  : "duration-500 hover:translate-x-1 transition-transform mr-4 md:mr-2 lg:mr-4"
              }`}
            >
              {isCollapsed && (
                <div
                  className={`${
                    !isCollapsed
                      ? "hidden"
                      : "absolute left-0 flex opacity-0 group-hover:opacity-90 mr-1.5"
                  } transition-opacity duration-100 `}
                >
                  <Grip className="h-4 w-4 text-gray-500" />
                </div>
              )}
              <span
                className={`text-xl h-6 w-6 text-white flex items-center justify-center rounded-md px-1   ${
                  item.color
                } ${!isCollapsed ? "ml-0" : "ml-4 md:ml-3 lg:ml-4"}`}
              >
                <item.icon />
              </span>
              {isCollapsed && (
                <p className="ml-1 font-normal text-sm md:text-xs lg:text-sm text-gray-700 group-hover:truncate max-w-[120px] text-nowrap">
                  {item?.label}
                </p>
              )}
              {isCollapsed && (
                <div className="ml-auto flex justify-end">
                  <span className="group-hover:opacity-90 opacity-0 transition-opacity duration-300">
                    <EllipsisVertical className="h-4 w-4 text-gray-500" />
                  </span>
                </div>
              )}
            </div>
          </Tooltip>
        ))}

        <div
          className={`pb-6 flex items-center px-4 py-2 h-10 mt-2 hover:text-blue-500 gap-2 rounded-xl ${
            !isCollapsed ? "justify-center" : ""
          }`}
        >
          <span className="text-zinc-900 rounded-full text-center">
            <CirclePlus className="text-blue-500 h-4 w-4 hover:text-gray-400" />
          </span>
          {isCollapsed && <p className="text-blue-500">{ADD_NEW}</p>}
        </div>
      </div>
    </div>
  );
}

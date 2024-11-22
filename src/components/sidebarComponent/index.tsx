"use client";
import React from "react";
import { ADD_NEW, ADD_SECTION } from "@/en";
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
      <div className="mb-2 px-2 h-full">
        {OverviewItems.map((item: any, index: number) => (
          <Tooltip
            title={`${isCollapsed ? "" : item?.label}`}
            placement="right"
            key={index + item.label + item.label}
          >
            <div
              key={index}
              className={`flex items-center mb-2 h-9 rounded-md px-1 group hover:bg-gray-100 shadow-x-lg hover:cursor-pointer ${
                !isCollapsed ? "justify-center" : ""
              }`}
            >
              <span className="text-xl h-7.5 w-7.5 text-zinc-600 flex items-center justify-center rounded-md px-1">
                <item.icon />
              </span>
              {isCollapsed && (
                <p className="ml-1 font-normal text-sm text-gray-700">
                  {item?.label}
                </p>
              )}
            </div>
          </Tooltip>
        ))}
        <hr className="border-1 border-zinc-200"></hr>
      </div>

      {/* user Area */}
      <div className="mb-2 px-2 h-full">
        {userItems?.map((item: any, index: number) => (
          <Tooltip
            title={`${isCollapsed ? "" : item?.label}`}
            placement="right"
            key={index + item.label}
          >
            <div
              key={index}
              className={`flex items-center mb-2 h-9 rounded-md px-1 hover:bg-gray-100 group hover:cursor-pointer ${
                !isCollapsed ? "justify-center" : ""
              }`}
            >
              <span className="text-xl h-7.5 w-7.5 text-zinc-600 flex items-center justify-center rounded-md px-1 ">
                <item.icon />
              </span>

              {isCollapsed && (
                <p className="ml-1 font-normal text-sm text-gray-700">
                  {item?.label}
                </p>
              )}
            </div>
          </Tooltip>
        ))}
        <hr className="border-1 border-zinc-200"></hr>
      </div>

      {/* sidebar components tabs */}
      <div className="mb-4 h-full items-center">
        {sidebarItems?.map((item: any, index: number) => (
          <Tooltip
            title={`${isCollapsed ? "" : item?.label}`}
            key={index + item.label}
            placement="right"
          >
            <div
              key={index}
              className={`flex items-center mb-0.5 h-10 rounded-md px-1 hover:bg-gray-100 transition-all group relative hover:cursor-pointer ${
                !isCollapsed
                  ? "justify-center gap-2"
                  : "duration-100 hover:translate-x-2 transition-transform"
              }`}
            >
              <div
                className={`${
                  !isCollapsed
                    ? "hidden"
                    : "absolute left-0 flex opacity-0 group-hover:opacity-90"
                } transition-opacity duration-300`}
              >
                <Grip className="h-4 w-4 text-gray-500" />
              </div>

              <span
                className={`text-xl h-6 w-6 text-white flex items-center justify-center rounded-md px-1 group-hover:ml-4  ${item.color}`}
              >
                <item.icon />
              </span>
              {isCollapsed && (
                <p className="ml-1 font-normal text-sm text-gray-700 group-hover:truncate max-w-[120px] text-nowrap">
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

        {sidebarItems?.map((item: any, index: number) => (
          <Tooltip
            title={`${isCollapsed ? "" : item?.label}`}
            placement="right"
            key={index + item.label + 11}
          >
            <div
              key={index}
              className={`flex items-center mb-0.5 h-10 rounded-md px-2 hover:bg-gray-100 transition-all group relative hover:cursor-pointer ${
                !isCollapsed
                  ? "justify-center gap-2"
                  : "duration-100 hover:translate-x-2 transition-transform"
              }`}
            >
              <div
                className={`${
                  !isCollapsed
                    ? "hidden"
                    : "absolute left-0 flex opacity-0 group-hover:opacity-90"
                } transition-opacity duration-300`}
              >
                <Grip className="h-4 w-4 text-gray-500" />
              </div>

              <span
                className={`text-xl h-6 w-6 text-white flex items-center justify-center rounded-md px-1 group-hover:ml-4  ${item.color}`}
              >
                <item.icon />
              </span>
              {isCollapsed && (
                <p className="ml-1 font-normal text-sm text-gray-700 group-hover:truncate max-w-[120px] text-nowrap">
                  {item?.label}
                </p>
              )}
              {isCollapsed && (
                <div className="ml-auto flex justify-end pr-4">
                  <span className="group-hover:opacity-90 opacity-0 transition-opacity duration-300">
                    <EllipsisVertical className="h-4 w-4 text-gray-500" />
                  </span>
                </div>
              )}
            </div>
          </Tooltip>
        ))}

        <div
          className={`pb-6 flex items-center px-2 h-10 mt-2 hover:text-blue-500 gap-2 rounded-xl ${
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

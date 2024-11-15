"use client";
import {
  AlignJustify,
  BrickWall,
  CirclePlus,
  EllipsisVertical,
  FileCheck,
  Grip,
  LayoutDashboard,
  Mail,
  MessageCircleMore,
  MessageSquareText,
  SquareLibrary,
  TimerOff,
  TimerReset,
  User,
  Users,
} from "lucide-react";
import React from "react";

export type sidebarItemType = {
  icon: string;
  label: string;
  color?: string;
};

const sidebarItems = [
  { icon: MessageCircleMore, label: "Chat", color: "bg-orange-500" },
  { icon: FileCheck, label: "Quick Task", color: "bg-red-500" },
  { icon: TimerReset, label: "Time Clock", color: "bg-yellow-500" },
  { icon: TimerOff, label: "Time Off", color: "bg-lime-500" },
  { icon: Mail, label: "Update", color: "bg-green-500" },
  { icon: BrickWall, label: "Event", color: "bg-emerald-500" },
  { icon: MessageSquareText, label: "Text Message", color: "bg-teal-500" },
  { icon: SquareLibrary, label: "Help Desk", color: "bg-cyan-500" },
  { icon: SquareLibrary, label: "Knowledge Base", color: "bg-sky-500" },
];

const userItems = [
  { icon: User, label: "Users" },
  { icon: Users, label: "Smart groups" },
];

const OverviewItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: AlignJustify, label: "Activity" },
];

export default function SidebarComponent({}: sidebarItemType) {
  return (
    <div className="relative sidebar w-48 min-h-screen top-0 border-r ">
      <div className="mb-2 px-2 h-full">
        {OverviewItems.map((item, index: number) => (
          <div
            key={index}
            className="flex items-center mb-2 h-9 gap-2 rounded-md px-1 hover:bg-gray-100 shadow-x-lg"
          >
            <span className="text-xl h-7.5 w-7.5 text-zinc-600 flex items-center justify-center rounded-md px-1">
              <item.icon />
            </span>
            <p className="ml-1 font-normal text-normal text-gray-700">
              {item?.label}
            </p>
          </div>
        ))}
        <hr className="border-1 border-zinc-200"></hr>
      </div>

      {/* user Area */}
      <div className="mb-2 px-2 h-full">
        {userItems?.map((item, index: number) => (
          <div
            key={index}
            className="flex items-center mb-2 h-9 gap-2 rounded-md px-1 hover:bg-gray-100"
          >
            <span className="text-xl h-7.5 w-7.5 text-zinc-600 flex items-center justify-center rounded-md px-1 ">
              <item.icon />
            </span>
            <p className="ml-1 font-normal text-normal text-gray-700">
              {item?.label}
            </p>
          </div>
        ))}
        <hr className="border-1 border-zinc-200"></hr>
      </div>

      {/* sidebar components tabs */}
      <div className="mb-4 px-2 h-full items-center">
        {sidebarItems?.map((item, index: number) => (
          <div
            key={index}
            className="flex items-center mb-0.5 h-10 gap-2 rounded-md px-1 hover:bg-gray-100 hover:translate-x-2 transition-transform transition-all duration-300 group relative"
          >
            <div className="absolute left-0 flex opacity-0 group-hover:opacity-90 transition-opacity duration-300">
              <Grip className="h-4 w-4 text-gray-500" />
            </div>

            <span
              className={`text-xl h-6 w-6 text-white flex items-center justify-center rounded-md px-1 group-hover:ml-4  ${item.color}`}
            >
              <item.icon />
            </span>
            <p className="ml-1 font-normal text-normal text-gray-700 group-hover:truncate max-w-[120px] text-nowrap">
              {item?.label}
            </p>
            <div className="ml-auto flex justify-end">
              <span className="group-hover:opacity-90 opacity-0 transition-opacity duration-300">
                <EllipsisVertical className="h-4 w-4 text-gray-500" />
              </span>
            </div>
          </div>
        ))}

        <div className="flex items-center mb-auto px-2 h-10 mt-2 hover:text-blue-500 gap-2 rounded-xl">
          <span className="text-zinc-900 rounded-full text-center">
            <CirclePlus className="text-blue-500 h-4 w-4 hover:text-gray-400" />
          </span>
          <p className="text-blue-500">Add New</p>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-48 border-1 border border-zinc-200 bg-white">
        <hr />
        <div className=" mt-auto flex items-center h-10 mt-2 hover:text-blue-500 gap-2 rounded-xl cursor-pointer">
          <span className="text-zinc-700 rounded-full px-2">
            <CirclePlus className="text-white h-4 w-4 bg-blue-500 rounded-full" />
          </span>
          <p>Add section</p>
        </div>
      </div>
    </div>
  );
}

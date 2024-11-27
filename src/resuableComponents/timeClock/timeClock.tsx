import { Card } from "@mui/material";
import Button from "@mui/material/Button";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import React from "react";

export interface TimeClockProp {
    
    smallTitle: string
    largeTitle:string
    assigned:string
    groupLabel:string
    nameTitle:string
    name:string
    buttonText:string
    roles:string 
}

const TimeClock = ({ smallTitle,largeTitle,assigned,groupLabel,nameTitle,name,buttonText,roles }: TimeClockProp) => {
  return(
<div className="flex justify-start p-3">
    <Card className="h-auto rounded-lg w-full ">
      <div className="flex justify-center  ">
      <Image 
      src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="A sample image from Unsplash"
      width={300} 
      height={56} 
    />
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-600 mb-2">{smallTitle}</div>

        <div className="text-lg font-bold text-zinc-900 mb-4">{largeTitle}</div>
    
        <div className="flex items-center mb-4">
          <span className="text-base text-zinc-900 mr-2 ">{assigned}</span>
          <div className="truncate w-[100px] bg-blue-100 rounded-full px-4 py-1 text-sm text-zinc-900">
            {groupLabel}
          </div>
        </div>

        <div className="flex items-center mb-1">
          <span className="text-base text-zinc-900 mr-2 w-14">{roles}</span>
          <div className="flex items-center space-x-2">
            <div className="rounded-full flex justify-center items-center text-xs font-bold  bg-green-400 text-white">
              {nameTitle}
            </div>
            <div className="text-sm text-zinc-900 capitalize">{name}</div>
          </div>
        </div>
      </div>
      <hr className="border-1 border-gray-200" />
        <div className=" border-slate-400 flex  items-center py-3 px-3 gap-6">
          <div className="w-10 h-10 flex justify-center items-center cursor-pointer rounded-full border-2 text-slate-400">
            <Ellipsis />
          </div>
          <Button className="bg-blue-600 text-white rounded-3xl text-base   ">
            {buttonText}
          </Button>
        </div>

    </Card>
  </div>
  );
  
};

export default TimeClock;

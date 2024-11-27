import { Card } from "@mui/material";
import { ArrowDownToLine, ContactRound, Smartphone } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { IoMdArrowDropdown } from "react-icons/io";

export interface HeaderBoxProp {
    header?:string,
    icon?:React.ReactNode,
    permission?:string,
    title?:string,
    button?:string

}
const  HeaderBox =({header,permission,title,button,icon}:HeaderBoxProp) => {
  return (
    <div>
      <Card className="flex text-sm h-20 justify-between items-center mb-3 rounded-xl  shadow-sm pl-3">
        <div className=" text-sm justify-center  flex items-center gap-3 ">
      <div className="text-blue-600 text-2xl [&_svg]:w-8 [&_svg]:h-8">{icon}</div>  
          <div className="text-2xl">{header}</div>
        </div>
        <div className="flex  text-sm justify-between items-center gap-2 pr-4 ">
          <div className="flex gap-2 ">
            <div className="items-center flex text-sm  ">
              {permission}
            </div>
            <div className="items-center bg-green-400 rounded-full cursor-pointer flex text-xs font-bold  justify-center  ">
             <div className="text-white font-bold h-7 w-7 flex justify-center items-center">{title}</div> 
            </div>
          </div>
          <div className="pl-1">
            <Button className="text-blue border border-solid rounded-full flex text-base bg-white font-normal">
              <Smartphone className="h-4 w-4 text-blue-600" />
              <div className="text-blue-600 text-sm font-normal w-24">Mobile Preview</div>
            </Button>
          </div>

          <div></div>
          <Button className="w-28 px-4  font-normal text-base border  bg-white flex rounded-full ">
            <div className="text-sm  text-blue-600">{button}</div>
            <IoMdArrowDropdown className="h-6 w-6 text-gray-400" />
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default HeaderBox;
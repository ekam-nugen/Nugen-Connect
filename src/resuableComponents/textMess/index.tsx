import React from "react";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { Button } from "@mui/material";
import { GoPlus } from "react-icons/go";
import Image from "next/image";

export interface TextComponentProp {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  imageUrl: string;
  ctaClassName?: string;
}
const TextComponent = ({
  icon,
  title,
  description,
  ctaText,
  imageUrl,
  ctaClassName,
}: TextComponentProp) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-white pt-8">
        {imageUrl && (
          <div className="h-36 w-36 mb-7 rounded-full border-slate-100 border-2  flex justify-center items-center">
            <Image
              className="text-blue-400"
              src={imageUrl}
              alt={"logoimage"}
              height={500}
              width={500}
            />
          </div>
        )}
        <div className="flex flex-col pb-10 justify-center text-center items-center">
          {title && <div className="text-zinc-600">{title}</div>}
          <div className="flex flex-col justify-center items-center text-center text-gray-300">
            {description && (
              <div className="text-center  text-gray-300 pt-2 ">
                {description}
              </div>
            )}
          </div>
          <Button
            className={`w-fit text-sm  flex justify-center text-center text-white mt-2 ${ctaClassName}`}
          >
            {icon} {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextComponent;

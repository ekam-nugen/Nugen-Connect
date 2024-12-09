import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";

export type TableImageText = {
  imageURL: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcons: React.ReactNode;
};
const TableImageText = ({
  imageURL,
  title,
  description,
  buttonLabel,
  buttonIcons
}: TableImageText) => {
  return (
    <div className="text-center mx-auto flex flex-col justify-center items-center mt-10">
      {imageURL && (
        <div className="w-[290px] h-[85px] flex items-center justify-center mx-20">
          <Image src={imageURL} alt={""} width={290} height={85}></Image>
        </div>
      )}
      {title && (
        <div className="font-bold text-3xl mb-2 text-zinc-600 flex items-center justify-center">
          {title}
        </div>
      )}
      {description && (
        <div className="text-center flex items-center justify-center mx-auto">
          {description}
        </div>
      )}
      <div className="text-center flex justify-center items-center mt-4 mb-3">
        <Button className="bg-blue-500 hover:bg-blue-600 text-center text-white px-4 py-2 rounded-full normal-case gap-2">
          <div className="h-4 w-4 text-white flex items-center">
            {buttonIcons}
          </div>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
};

export default TableImageText;

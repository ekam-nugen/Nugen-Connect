import { Card } from "@mui/material";
import React from "react";

export interface HeaderBoxProp {
  header: string;
  headerIcon: React.ReactNode;
  title: string;
  buttonIcon?: React.ReactNode;
  buttonLabel?: string;
  secondayButtonIcon?: React.ReactNode;
  secondrayButtonLabel?: string;
  secondaryButtonClassName?: string;
  borderClassName?: string;
}
const HeaderBox = ({
  header,
  title,
  headerIcon,
  buttonIcon,
  buttonLabel,
  secondayButtonIcon,
  secondrayButtonLabel,
  borderClassName
}: HeaderBoxProp) => {
  return (
    <div>
      <Card className="flex text-sm h-20 justify-between items-center mb-3 rounded-xl shadow-sm pl-3">
        <div className=" text-sm justify-center  flex items-center ml-7">
          <div className="text-blue-500 text-2xl [&_svg]:w-8 [&_svg]:h-8 mr-4">
            {headerIcon}
          </div>
          <div className="text-2xl text-zinc-600">{header}</div>
        </div>
        <div className="flex  text-sm justify-between items-center gap-2 pr-4 ">
          <div className="flex gap-2 ">
            <div className="items-center flex text-sm">Permission</div>
            <div className="items-center bg-[#689F38] rounded-full cursor-pointer flex text-xs font-bold  justify-center mr-4">
              <div className="text-white font-bold h-7 w-7 flex justify-center items-center">
                {title}
              </div>
            </div>
          </div>
          <div className="px-2">
            {buttonIcon && (
              <div className="pl-1">
                <div className="border border-gray-300 hover:border-blue-500 rounded-full flex gap-2 justify-center items-center px-2 py-2">
                  {buttonIcon && (
                    <div className="h-5 w-5 text-blue-500 flex items-center">
                      {buttonIcon}
                    </div>
                  )}
                  {buttonLabel && (
                    <div className="text-blue-500 text-base font-normal">
                      {buttonLabel}
                    </div>
                  )}
                </div>
              </div>
            )}

            {secondayButtonIcon && (
              <div
                className={`border border-gray-300 bg-white gap-2 flex rounded-full items-center justify-center px-2 py-2 ${borderClassName}`}
              >
                {secondayButtonIcon && (
                  <div className="h-5 w-5 items-center flex">
                    {secondayButtonIcon}
                  </div>
                )}
                {secondrayButtonLabel && (
                  <div className="text-base font-normal">
                    {secondrayButtonLabel}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HeaderBox;

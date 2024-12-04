import React from "react";
import LoginUserIcon from "../loginUserIcon";

export interface ModalDataItem {
  icon: React.ReactNode;
  text: string;
}
interface IconTextModalProps {
  Modaldata: ModalDataItem[];
  loginUserIcon?: boolean;
}

const IconTextModal = ({ Modaldata, loginUserIcon }: IconTextModalProps) => {
  return (
    <div className="shadow-2xl rounded-xl w-fit p-2 mx-4 mt-1 mb-4 bg-white">
      {loginUserIcon && (
        <>
          <div className="pb-2">
            <LoginUserIcon />
          </div>
          <hr className="border-1   border-gray-200 " />
        </>
      )}
      <div className="rounded-xl ">
        {Modaldata.map((item, index) => (
          <div
            key={index}
            className="hover:cursor-pointer hover:bg-gray-200 hover:rounded-xl p-2"
          >
            <div className="flex gap-2">
              {item?.icon && (
                <div className="flex justify-center items-center ">
                  <div className="flex items-center h-4 w-4">{item.icon}</div>
                </div>
              )}
              <div className="text-sm items-center flex justify-center">
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconTextModal;

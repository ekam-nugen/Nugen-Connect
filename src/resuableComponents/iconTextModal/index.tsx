import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LiaFileExportSolid } from "react-icons/lia";
import { IoIosInformationCircleOutline } from "react-icons/io";

export interface ModalDataItem {
  icon: React.ReactNode;
  text: string;
}
interface IconTextModalProps {
  Modaldata: ModalDataItem[];
}

const IconTextModal = ({ Modaldata }: IconTextModalProps) => {
  return (
    <div className="shadow-2xl  rounded-xl w-fit p-2 bg-white">
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

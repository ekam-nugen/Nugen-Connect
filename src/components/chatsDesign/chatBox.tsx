"use client";
import { Input } from "@/resuableComponents";
import IconTextModal from "@/resuableComponents/iconTextModal";
import { Users, Search, Ellipsis, Link2, AtSign, Mic } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { LiaFileExportSolid } from "react-icons/lia";
import { MdAttachFile } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}
export const ModalCardData1 = [
  { icon: <RiDeleteBin6Line />, text: "Delete Account" },
  { icon: <LiaFileExportSolid />, text: "Export Data" },
  { icon: <IoIosInformationCircleOutline />, text: "View Profile" },
];

const ChatBox: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [text, setText] = useState<string>("");
  const [modalcard, setModalcard] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModel = () => {
    setModalcard(true);
  };
  const closeModel = () => {
    setModalcard(false);
  };

  const handleSend = () => {
    if (text.trim()) {
      onSendMessage(text);
      setText("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalcard &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModel();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [modalcard]);

  return (
    <div className="w-full">
      <div className="flex justify-between px-4 py-3 items-center">
        <div className="flex gap-2">
          <div className="rounded-full  bg-green-700 h-12 w-12 flex items-center justify-center">
            <Users className="text-white h-6  w-6 " />
          </div>
          <div className="gap-0">
            <div className="font-bold text-lg text-zinc-600 tracking-wide">
              All users' team chat
            </div>
            <div className=" text-gray-400 text-base">4 members</div>
          </div>
        </div>
        <div className="justify-end flex gap-2 pl-2">
          <div className="rounded-full border-gary-200 border h-10 w-10 flex items-center justify-center">
            <Search className="text-blue-500 h-5  w-5 " />
          </div>
          <div
            className="rounded-full border-gary-200 border h-10 w-10 flex items-center justify-center"
            onClick={openModel}
          >
            <Ellipsis className="text-blue-500 h-5 z-50 w-5" />
          </div>

          {modalcard && (
            <div
              className="absolute pt-12  z-50  flex justify-center items-center"
              onClick={closeModel}
            >
              <div ref={modalRef}>
                <IconTextModal Modaldata={ModalCardData1} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-blue-100 h-[500px] w-full"></div>
      <div className="bg-blue-100 pb-5">
        <div className="mx-5 pb-4 pt-2 px-5 gap-2 bg-white border border-gray-300 rounded-xl flex flex-col">
          <Input
            placeholder="Write something..."
            className="bg-blue-100 text-gray-400 w-full"
            value={text}
          />
          <div className="flex justify-between">
            <div className="flex gap-2 px-2">
              <MdAttachFile className="h-4 w-4 text-gray-400" />
              <FaRegSmileBeam className="h-4 w-4 text-gray-400" />
              <Link2 className="h-4 w-4 text-gray-400" />
              <AtSign className="h-4 w-4 text-gray-400" />
            </div>
            {text ? (
              <IoSend
                onClick={handleSend}
                className="absolute right-2 top-2 text-gray-400 cursor-pointer"
              />
            ) : (
              <div className="flex ">
                <Mic className="h-4 w-4 text-gray-400" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;

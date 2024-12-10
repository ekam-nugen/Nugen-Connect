"use client";
import { Card, CardDescription } from "@/resuableComponents/card";
import SearchBox from "@/resuableComponents/SearchBox";
import { Button } from "@mui/material";
import { BsPinFill } from "react-icons/bs";
import {
  Ellipsis,
  GraduationCap,
  MessagesSquare,
  Settings
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import ChatBox from "./chatBox";

import IconTextModal from "@/resuableComponents/iconTextModal";
import { MdOutlineArchive } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";

export const chatsMenu = [
  { heading: "All" },
  { heading: "Unread" },
  { heading: "Teams" }
];

export const chatPerson = [
  { title: "All user Teams Chats", description: "This is a new chat" },
  { title: "Connecteam Tips", description: "" },
  {
    title: "Pardeep Kumar",
    description: "hiiiiiiiiiiiiiiiiiiiiiiiii"
  },
  { title: "Harmandeep Singh", description: "" }
];

export type ChatPerson = {
  title: string;
  description: string;
};

export type ChatsMenu = {
  heading: string;
};
export const ModalCardData2 = [
  { icon: <MdOutlineArchive />, text: "Archived Conversation" },
  { icon: <RiShutDownLine />, text: "Deactivate" }
];

const Chats = () => {
  const [modalcard, setModalcard] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const openModel = () => {
    setModalcard(true);
  };
  const closeModel = () => {
    setModalcard(false);
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
    <div className="m-5 h-auto">
      <Card className="w-[100%] h-full">
        <div className="text-xl text-blue-500 flex justify-center gap-4  mt-2.5">
          <MessagesSquare />
          CHATS
        </div>

        {/* {/ chat /} */}
        <Card className="h-full flex rounded-xl m-5">
          {/* {/ people list /} */}
          <div className="w-[460px] border-r-2">
            <div className="flex justify-between p-4 border-b-2 items-center">
              <Button className="bg-blue-500 text-white rounded-3xl px-4 py-2">
                Add New
              </Button>
              <div className="justify-end flex gap-2 pl-2" onClick={openModel}>
                <div className="rounded-full border-gary-200 border h-10 w-10 flex items-center justify-center">
                  <Ellipsis className="text-blue-500 h-5  w-5 " />
                </div>

                {modalcard && (
                  <div className="absolute pt-12  z-50  flex justify-center items-center">
                    <div ref={modalRef}>
                      <IconTextModal Modaldata={ModalCardData2} />
                    </div>
                  </div>
                )}

                <div className="rounded-full border-gary-200 border h-10 w-10 flex items-center justify-center">
                  <Settings className="text-blue-500 h-5 w-5" />
                </div>
                <div className="rounded-full border-gary-200 border h-10 w-10 flex items-center justify-center">
                  <GraduationCap className="text-cyan-500 h-5 w-5" />
                </div>
              </div>
            </div>
            {/* {/ chats details /} */}
            <div className="m-5">
              <div className="p-4">
                <SearchBox placeholder={"Search"} />
              </div>

              {/* {/ chatMenus /} */}
              <div className="flex gap-2 px-4">
                {chatsMenu?.map((items, index) => (
                  <div key={items?.heading + index}>
                    <div className="rounded-full bg-blue-100 text-blue-500 px-3 py-1 font-bold text-sm">
                      {items?.heading}
                    </div>
                  </div>
                ))}
              </div>

              {/* {/ chats people /} */}
              <div className="h-full mt-4">
                <div>
                  {chatPerson.map((items, index) => (
                    <div key={items?.title + index}>
                      <Card
                        className="border-none shadow-none flex h-16 w-[400px]"
                        key={items?.title + index}
                      >
                        <div className="flex pl-2 px-4 py-4 justify-between items-center rounded-2xl hover:bg-gray-100 w-[400px] group">
                          <div className="flex gap-1">
                            <div className="rounded-full border-gary-200 bg-blue-200 border h-12 w-12 tracking-wide flex uppercase text-white items-center justify-center text-base font-bold">
                              pk
                            </div>
                            <div className="flex px-1 w-56 md:w-48 lg:w-56 justify-start items-start">
                              <div className="flex flex-col">
                                <div className="text-base font-medium truncate w-[150px] text-zinc-600">
                                  {items?.title}
                                </div>
                                {items.description && (
                                  <div className="text-sm font-normal truncate w-[150px] text-zinc-400 ">
                                    {items?.description}
                                  </div>
                                )}
                              </div>
                              <div className="flex flex-col justify-center items-center">
                                <div className="border-2 rounded-xl text-gray-400 text-sm px-1 ml-2.5">
                                  Unavaliable
                                </div>
                                <div></div>
                              </div>
                            </div>
                          </div>
                          {/* {/ pin and dates /} */}

                          <div className="flex flex-col justify-end gap-1.5">
                            <div className="text-sm text-gray-400 ml-2">
                              15/06/2004
                            </div>

                            <div className="flex justify-end items-end pr-4 gap-2 ">
                              {BsPinFill && (
                                <div>
                                  <BsPinFill
                                    className="text-gray-400 h-3 w-3 "
                                    style={{ transform: "rotate(90deg)" }}
                                  />
                                </div>
                              )}
                              {Ellipsis && (
                                <div className="ellipsis-container opacity-0 group-hover:opacity-100">
                                  <Ellipsis className="text-gray-400 h-3  w-3" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                      <hr className="border-t-1 border-gray-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* {/ chat area /} */}
          <ChatBox
            onSendMessage={function (message: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        </Card>
      </Card>
    </div>
  );
};

export default Chats;

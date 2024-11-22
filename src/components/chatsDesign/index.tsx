import { Card } from "@/resuableComponents/card";
import SearchBox from "@/resuableComponents/SearchBox";
import { Button } from "@mui/material";
import { BsPinAngle } from "react-icons/bs";
import {
  Ellipsis,
  GraduationCap,
  MessagesSquare,
  Settings
} from "lucide-react";
import React from "react";

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
    description:
      "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"
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
function Chats() {
  return (
    <div className="m-5">
      <Card className="w-[100%]">
        <div className="text-xl text-blue-500 flex justify-center gap-4">
          <MessagesSquare />
          CHATS
        </div>

        {/* chat */}
        <Card className="h-full flex rounded-xl m-5">
          {/* people list */}
          <div className="w-[40%] border-r-2 ">
            <div className="flex justify-between p-4 border-b-2 items-center">
              <Button className="bg-blue-500 text-white rounded-3xl px-4 py-2">
                Add New
              </Button>
              <div className="justify-end flex gap-2 pl-2">
                <div className="rounded-full border-gary-200 border h-10 w-10 flex items-center justify-center">
                  <Ellipsis className="text-blue-500 h-5  w-5 " />
                </div>
                <div className="rounded-full border-gary-200 border h-10 w-10 flex items-center justify-center">
                  <Settings className="text-blue-500 h-5 w-5" />
                </div>
                <div className="rounded-full border-gary-200 border h-10 w-10 flex items-center justify-center">
                  <GraduationCap className="text-cyan-500 h-5 w-5" />
                </div>
              </div>
            </div>
            {/* chats details */}
            <div className="m-5">
              <div className="p-4">
                <SearchBox placeholder={"Search"} />
              </div>

              {/* chatMenus */}
              <div className="flex gap-2 px-4">
                {chatsMenu?.map((items, index) => (
                  <div key={items?.heading + index}>
                    <div className="rounded-full bg-blue-100 text-blue-500 px-3 py-1 font-bold text-md">
                      {items?.heading}
                    </div>
                  </div>
                ))}
              </div>

              {/* chats people */}
              <div className="h-full mt-4">
                <div>
                  {chatPerson.map((items, index) => (
                    <div key={items?.title + index}>
                      <Card className="border-none shadow-none flex">
                        <div className="flex pl-2 px-4 py-4 justify-between items-center rounded-2xl hover:bg-gray-100 gap-2 w-full">
                          <div className="flex justify-start gap-2">
                            <div className="rounded-full border-gary-200 bg-green-900 border h-12 w-12 flex items-center justify-center">
                              pk
                            </div>
                            <div className="flex flex-col px-1 w-1/2 justify-start items-start">
                              <div className="text-lg font-medium truncate w-[200px] text-zinc-600">
                                {items?.title}
                              </div>
                              {items.description && (
                                <div className="text-md font-normal truncate w-[200px] text-zinc-400 ">
                                  {items?.description}
                                </div>
                              )}
                            </div>
                          </div>
                          {/* pin and dates */}
                          <div className="flex justify-end items-end pr-4">
                            <div>
                              <BsPinAngle />
                            </div>
                            <div className="ellipsis-container opacity-0 hover:opacity-100">
                              <Ellipsis />
                            </div>
                          </div>
                        </div>
                      </Card>
                      <hr className="border-b-1 border-gray-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* chat area */}
          <div className="w-[60%] ">hii</div>
        </Card>
      </Card>
    </div>
  );
}

export default Chats;

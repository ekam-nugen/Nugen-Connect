"use client";

import "./globals.css";

import { ChevronLeft, ChevronRight, CirclePlus } from "lucide-react";
import { useState } from "react";
import { ADD_SECTION } from "@/en";
import TopbarComponent from "@/components/topbar";
import SidebarComponent from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  return (
    <html lang="en">
      <body>
        <div className="h-screen overflow-y-scroll w-screen">
          <div className="shadow-md w-full sticky top-0 bg-white h-[9%]">
            <TopbarComponent />
          </div>

          <div className="z-10 flex h-[91%] overflow-auto">
            <div
              className={`overflow-y-auto h-full ${
                isCollapsed ? "w-56 md:w-48 lg:w-56" : "w-16 md:w-14 lg:w-16"
              }`}
            >
              <div
                className={`sticky z-40 top-0 bg-white flex ${
                  isCollapsed ? "justify-end px-2" : "justify-center"
                }`}
              >
                <button
                  onClick={toggleSidebar}
                  className="flex text-gray-900 h-5 w-5 items-center bg-gray-200 rounded-md"
                >
                  {isCollapsed ? <ChevronLeft /> : <ChevronRight />}
                </button>
              </div>
              <SidebarComponent label="" icon="" isCollapsed={isCollapsed} />
              <div
                className={`fixed bottom-0 left-0 bg-white ${
                  !isCollapsed ? "w-16 hidden" : "w-44 md:w-36 lg:w-44"
                }`}
              >
                <hr />
                <div className="mt-auto py-4 px-4 flex items-center hover:text-blue-500 gap-2 rounded-xl cursor-pointer">
                  <span className="text-white bg-blue-500 rounded-full ">
                    <CirclePlus className="h-4 w-4 " />
                  </span>
                  <p className="text-sm md:text-xs lg:text-sm">{ADD_SECTION}</p>
                </div>
              </div>
            </div>
            <div className="overflow-y-auto w-full h-full bg-[#f6f6f6]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

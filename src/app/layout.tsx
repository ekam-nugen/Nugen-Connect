"use client"
import TopbarComponent from "@/components/topbarComponent";
import "./globals.css";
import SidebarComponent from "@/components/sidebarComponent";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  return (
    <html lang="en">
      <body className="h-screen">
        <div className="shadow-md w-max 1200:w-full sticky z-50 top-0 bg-white h-[9%]">
          <TopbarComponent />
        </div>

        <div className="z-10 flex gap-2 h-[91%] overflow-auto">
          <div className={`overflow-y-auto h-full ${isCollapsed ? 'w-72' : 'w-20'}`}>
            <div
              className={`sticky z-40 top-0 bg-white flex ${isCollapsed
                ? "justify-end px-2"
                : "justify-center"
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
          </div>
          <div className="overflow-y-auto w-full h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}

"use client";
import { Button } from "@/resuableComponents";
import { Input } from "@/resuableComponents/input";
import { BellRing, CircleUserRound, Mail, Podcast } from "lucide-react";
import React from "react";

const TopbarComponent = () => {
  return (
    <div className="container mx-auto px-4 py-1 flex justify-between items-center border-b-2 shadow-lg">
      <div className="flex">
        <div className="flex items-center justify-evenly">
          <a href="#" className="font-bold text-3xl text-cyan-500">
            connecteam
          </a>
          <Input
            type="text"
            placeholder="Search anything"
            className="text-gray-300 border-gray-600 rounded-md p-2 ml-4 w-auto"
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex gap-2 justify-center items-center">
            <div className="text-gray-500">Free trial ends in</div>
            <a href="#" className="text-gray-500">
              5 days
            </a>
          </div>
          <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-3xl">
            Upgrade
          </Button>

          <div className="border-x text-gray-500 flex px-4">
            <Podcast />
            <a href="#" className="text-gray-500 px-3">
              Talk to an expert
            </a>
            <a href="#" className="text-gray-500 border-l px-3">
              Help
            </a>
          </div>
          <div>
            <Button className="text-gray-500 flex gap-6">
              <Mail />
              <BellRing />
            </Button>
            <div className="hidden absolute top-full right-0 mt-2  border border-gray-200 rounded-md shadow-md">
              <div className="p-4"></div>
            </div>
          </div>
          <Button className="text-gray-500 flex gap-2 border-l px-4">
            <CircleUserRound />
            <span className="">Pardeep</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopbarComponent;

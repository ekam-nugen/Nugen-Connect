"use client";
import { Button } from "@/resuableComponents";
import { Input } from "@/resuableComponents/input";
import { Badge } from "lucide-react";
import React from "react";

const TopbarComponent = () => {
  return (
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
            <path d="M8 14a5 5 0 1 1 8 0" />
            <circle cx="12" cy="11" r="1" />
            <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
          </svg>
          <a href="#" className="text-gray-500 px-3">
            Talk to an expert
          </a>
          <a href="#" className="text-gray-500 border-l px-3">
            Help
          </a>
        </div>
        <div>
          <Button className="text-gray-500 flex gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              <path d="M4 2C2.8 3.7 2 5.7 2 8" />
              <path d="M22 8c0-2.3-.8-4.3-2-6" />
            </svg>
          </Button>
          <div className="hidden absolute top-full right-0 mt-2  border border-gray-200 rounded-md shadow-md">
            <div className="p-4"></div>
          </div>
        </div>
        <Button className="text-gray-500 flex gap-2 border-l px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
          </svg>
          <span className="">Pardeep</span>
        </Button>
      </div>
    </div>
  );
};

export default TopbarComponent;

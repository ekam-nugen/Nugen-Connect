import { ArrowDownToLine, CircleCheck, CirclePlus, ListFilter } from "lucide-react";
import React from "react";
import SearchBox from "../SearchBox";
import { Button } from "@/resuableComponents";



function FilterSearchHeader() {
  return (
    <div className="bg-white">
         <div className="flex justify-center h-10 text-lg pt-2 mb-5">
          <Button className="bg-white text-blue-600 ">
            <CircleCheck className="h-4 w-4" />
            <div className="text-lg">Active</div>
          </Button>
        </div>
      <div className="flex justify-between p-5">
        <Button className="font-normal text-base bg-white  flex rounded-3xl border text-blue-600 ">
          <ListFilter />
          <div className="text-lg">Filter</div>
        </Button>

        <div className="flex justify-between gap-3  ">
          <SearchBox className="w-32 lg:w-full" placeholder={"Search"} />
          <div className="border-l-2 bg-gray-300"></div>
          <Button className="font-normal text-base border  flex rounded-3xl bg-white">
            <div className="text-lg text-blue-600">Export</div>
            <ArrowDownToLine className="h-4 w-4 text-slate-400" />
          </Button>
          <Button className=" font-normal text-base border  flex rounded-3xl">
            <CirclePlus className="h-4 w-4" />
            <div className="text-lg">Add new</div>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FilterSearchHeader;

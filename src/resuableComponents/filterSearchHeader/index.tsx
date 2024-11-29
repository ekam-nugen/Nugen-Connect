import { CirclePlus, ListFilter } from "lucide-react";
import React from "react";
import SearchBox from "../SearchBox";
import { Button } from "@/resuableComponents";
import { Card } from "../card";

export interface FilterSearchHeaderProps {
  buttonIcon?: React.ReactNode;
}
const FilterSearchHeader = ({ buttonIcon }: FilterSearchHeaderProps) => {
  return (
    <Card className="bg-white border-none shadow-none rounded-none flex justify-between px-5 py-8">
      <div className="flex justify-start">
        <Button className="font-normal text-base bg-white  flex rounded-3xl border text-blue-500 ">
          <ListFilter />
          <div className="text-lg">Filter</div>
        </Button>
      </div>
      <div className="flex">
        <div className="flex justify-end gap-3">
          <SearchBox className="w-32 lg:w-full" placeholder={"Search"} />
          <div className="border-r border-gray-200 px-2" />
        </div>
        {buttonIcon && (
          <div className="gap-3 flex px-4">
            {buttonIcon && (
              <Button className="font-normal text-base border flex rounded-3xl bg-white items-center justify-center">
                <div className="text-lg text-blue-500">Export</div>
                <div className="h-6 w-6 text-slate-400 flex items-center">
                  {buttonIcon}
                </div>
              </Button>
            )}
            <div className="border-r bg-gray-200" />
            {CirclePlus && (
              <Button className=" font-normal text-base border bg-blue-500  flex rounded-3xl">
                <CirclePlus className="h-4 w-4" />
                <div className="text-lg">Add new</div>
              </Button>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default FilterSearchHeader;

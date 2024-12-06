import { CirclePlus, ListFilter } from "lucide-react";
import React from "react";
import SearchBox from "../SearchBox";
import { Button } from "@/resuableComponents";
import { Card } from "../card";
import { DatePickerWithRange } from "../datepicker";

export interface FilterSearchHeaderProps {
  buttonIcon?: React.ReactNode;
  filter?: boolean;
  searchbox?: boolean;
  secondaryButtonLabel?: string;
  buttonLabel?: string;
  secondaryButtonIcon?: React.ReactNode;
}
const FilterSearchHeader = ({
  buttonIcon,
  filter,
  searchbox,
  secondaryButtonLabel,
  buttonLabel,
  secondaryButtonIcon
}: FilterSearchHeaderProps) => {
  return (
    <Card className="bg-white border-none shadow-none rounded-none flex justify-between px-5 py-8">
      {datePickerWithRange && (
        <div>
          <DatePickerWithRange />
        </div>
      )}
      {filter && (
        <div className="flex justify-start">
          <Button className="font-normal text-base bg-white  flex rounded-3xl border text-blue-500 ">
            <ListFilter />
            <div className="text-lg">Filter</div>
          </Button>
        </div>
      )}
      <div className="flex">
        {searchbox && (
          <div className="flex justify-end gap-3">
            <SearchBox className="w-32 lg:w-full" placeholder={"Search"} />
            <div className="border-r border-gray-200 px-2" />
          </div>
        )}

        <div className="gap-3 flex px-4">
          {buttonIcon && buttonLabel && (
            <>
              <Button className="font-normal text-base border flex rounded-3xl bg-white items-center justify-center">
                {buttonLabel && (
                  <div className="text-lg text-blue-500">{buttonLabel}</div>
                )}
                <div className="h-6 w-6 text-slate-400 flex items-center">
                  {buttonIcon}
                </div>
              </Button>
              <div className="border-r bg-gray-200" />
            </>
          )}

          {secondaryButtonLabel && secondaryButtonIcon && (
            <Button className=" font-normal text-base border text-white bg-blue-500 gap-2 flex rounded-3xl">
              {secondaryButtonIcon && (
                <div className="h-4 w-4 flex items-center">
                  {secondaryButtonIcon}
                </div>
              )}
              <div className="text-lg">{secondaryButtonLabel}</div>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FilterSearchHeader;

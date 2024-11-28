import { Card } from "@/resuableComponents/card";
import FilterSearchHeader from "@/resuableComponents/filterSearchHeader";
import HeaderBox from "@/resuableComponents/headerBox/headerBox";
import TimeClock from "@/resuableComponents/timeClock/timeClock";
import { Button } from "@mui/material";
import { CircleCheck, GraduationCap, Timer } from "lucide-react";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function TimeClockComponent() {
  return (
    <div className="mt-5">
      <div className="m-5">
        <HeaderBox
          header={"Time Clock lobby"}
          headerIcon={<Timer />}
          title={"PK"}
          secondayButtonIcon={<GraduationCap />}
          secondaryButtonClassName="text-emerlad-500"
          borderClassName="hover:border-emerald-500 text-emerald-500 hover:bg-gray-100"
        />
      </div>
      <Card className="m-5 h-full rounded-xl">
        <div className="flex justify-center h-10 text-lg pt-2 mb-5">
          <Button className="bg-white text-blue-500 gap-2">
            <CircleCheck className="h-4 w-4" />
            <div className="text-lg capitalize">Active</div>
          </Button>
        </div>
        <FilterSearchHeader buttonIcon={<IoMdArrowDropdown />} />
        <hr className="border-1 border-gray-200 mb-3" />
        <div className="flex gap-2 justify-items-center px-5 mb-10">
          <TimeClock
            smallTitle={"Time Clock"}
            largeTitle={"Time Clock"}
            assigned={"Assigned"}
            groupLabel={"All users groups"}
            nameTitle={"PK"}
            name={"Pardeep Kumar"}
            buttonText={"Access clock"}
            roles={"Admins"}
          />

          <TimeClock
            smallTitle={"Time Clock"}
            largeTitle={"Time Clock"}
            assigned={"Assigned"}
            groupLabel={"All users groups"}
            nameTitle={"PK"}
            name={"Pardeep Kumar"}
            buttonText={"Access clock"}
            roles={"Admins"}
          />
        </div>
      </Card>
    </div>
  );
}

export default TimeClockComponent;

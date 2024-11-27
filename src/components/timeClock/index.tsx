import { Button } from "@/resuableComponents";
import { Card } from "@/resuableComponents/card";
import FilterSearchHeader from "@/resuableComponents/filterSearchHeader";
import SearchBox from "@/resuableComponents/SearchBox";
import SelectSearch from "@/resuableComponents/selectbox/selectSearch";
import TimeClock from "@/resuableComponents/timeClock/timeClock";
import {
  ArrowDownToLine,
  CircleCheck,
  CirclePlus,
  ListFilter,
  ListFilterIcon,
} from "lucide-react";
import React from "react";

function TimeClockComponent() {
  return (
    <div>
      <Card>
        <FilterSearchHeader />
        <hr className="border-1 border-gray-200 mb-3" />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center px-5">
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

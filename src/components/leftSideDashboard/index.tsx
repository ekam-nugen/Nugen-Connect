"use client";
import { Card, CardTitle } from "@/resuableComponents/card";
import SmallCard from "@/resuableComponents/smallCard";
import { Check, X } from "lucide-react";
import React from "react";
import { PiNumberThreeBold } from "react-icons/pi";
import VideoPlayer from "../VideoPlayer";

function LeftSideDashboard() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <SmallCard
        title={"You're in the clear"}
        description={
          "New time off requests, shift requests, and requests to join the app will show up right here"
        }
        icon={<Check />}
        iconClassName="text-green-500"
        className={"bg-green-100"}
      />

      {/* vedio */}
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-zinc-600">
            All about Connecteam
          </CardTitle>
          <X className="h-4 w-4" />
        </div>
        <div className="w-[308px] h-[173px]">
          <VideoPlayer
            src="/video/smart_groups_activiation.mp4"
            type="video/mp4"
            controls
            autoPlay={true}
            loop
          />
        </div>
      </Card>

      {/*  get credit*/}
      <SmallCard
        description={
          "Get up to 170$ worth of credits to use when upgrading to our paid"
        }
        descriptionClassName="text-sm"
        buttonLabel={" Get Credit"}
        imageUrl="https://app.connecteam.com/images/base-line/boarding/widgets/free-credits.svg"
      />

      {/* select users */}
      <SmallCard
        description={"Users didn't log in to the app yet"}
        buttonLabel="Select users to invite"
        icon={<PiNumberThreeBold />}
        iconClassName="text-white bg-gradient-to-r from-blue-600 to-violet-600 rounded-md text-2xl shadow-xl"
      />

      {/* alerts */}
      <SmallCard
        description={"No new alerts to display at this time"}
        descriptionClassName="text-base text-blue-500"
        title="You’re all caught up"
        titleClassName="text-blue-500 text-xl"
        icon={<Check />}
        iconClassName="text-white bg-blue-500 rounded-full"
        heading="Alerts"
      />

      {/* achieve milestones */}
      <Card className="p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-zinc-600">
            Achieved milestones
          </CardTitle>
        </div>
        <div></div>
      </Card>
    </div>
  );
}

export default LeftSideDashboard;

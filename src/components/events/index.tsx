import CardWithImage from "@/components/cardWithImage";
import VideoPlayer from "@/resuableComponents/videoPlayer-temp";
import { Button } from "@/resuableComponents";
import React from "react";
import image from "../../../public/Waterfall-landscape.jpg";
import SmallCard from "@/resuableComponents/smallCard";
import { cards, smallcards } from "@/json/event";

export default function Events() {
  return (
    <div className="bg-white flex flex-col items-center rounded-3xl p-8">
      <div className="w-[538px] h-[303px]">
        <VideoPlayer
          src="/video/smart_groups_activiation.mp4"
          type="video/mp4"
          controls
          autoPlay={true}
          loop
        />
      </div>
      <div className="flex flex-col items-center w-3/5 py-8">
        <div className="text-3xl font-bold text-[#3f4648]">
          Get Started with Events
        </div>
        <div className="text-sm text-center pt-3 pb-6 w-3/4">
          Create a beautiful agenda of all company events, make it simple for
          users to access event's details and mark their attendance, and bring
          people together effortlessly
        </div>
        <Button className="rounded-full bg-[#2998ff]">Get Started</Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((value, index) => {
          return (
            <CardWithImage
              key={value?.title + index}
              title={value?.title}
              description={value?.description}
              imgURL={image}
            />
          );
        })}
      </div>

      <p className="text-xl font-bold text-[#3f4648] py-8">
        Fully packed, out of the box
      </p>

      <div className="flex flex-wrap w-3/5 gap-4 justify-center items-center">
        {smallcards.map((value, index) => {
          return (
            <SmallCard
              key={value?.title + index + value?.title}
              title={value?.title}
              icon={value?.icon}
              description={""}
            />
          );
        })}
      </div>
    </div>
  );
}

import CardWithImage from "@/components/cardWithImage";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/resuableComponents";
import React from "react";
import image from "../../../public/Waterfall-landscape.jpg";
import SmallCard from "@/components/smallCard";
import { CiChat1 } from "react-icons/ci";
import {
  Armchair,
  ArrowRightFromLine,
  MonitorSmartphone,
  TimerReset,
  UserRound,
  Wallpaper
} from "lucide-react";

export default function Events() {
  const cards = [
    {
      title: "Detailed events",
      description:
        "Add a detailed description to any event, including location, media and a gorgeous event cover",
      image: image
    },
    {
      title: "Attendance tracking",
      description:
        "Allow users to register to an event and view who's attending from their colleagues",
      image: image
    },
    {
      title: "Advanced settings",
      description:
        "Fully customize your event's preferences with advanced options to suit any need",
      image: image
    }
  ];

  const smallcards = [
    {
      title: "Customizable cover image",
      icon: <Wallpaper />,
      iconColor: "text-blue-500"
    },
    {
      title: "Schedule ahead and save time",
      icon: <TimerReset />,
      iconColor: "text-purple-500"
    },
    {
      title: "Manage number of spots per event",
      icon: <Armchair />,
      iconColor: "text-cyan-500"
    },
    {
      title: "Set registration limitations",
      icon: <UserRound />,
      iconColor: "text-green-500"
    },
    {
      title: "Live mobile preview when creating an event",
      icon: <MonitorSmartphone />,
      iconColor: "text-emeranld-500"
    },
    {
      title: "Engaging comments thread for each event ",
      icon: <CiChat1 />,
      iconColor: "text-yellow-500"
    },
    {
      title: "Export attendance reports",
      icon: <ArrowRightFromLine />,
      iconColor: "text-red-500"
    }
  ];
  return (
    <div className="bg-white flex flex-col items-center rounded-3xl p-8">
      <VideoPlayer
        src="/video/smart_groups_activiation.mp4"
        type="video/mp4"
        controls
        autoPlay={true}
        loop
      />
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
            <>
              <CardWithImage
                key={value?.title + index}
                title={value?.title}
                img={value?.image}
                description={value?.description}
              />
            </>
          );
        })}
      </div>

      <p className="text-xl font-bold text-[#3f4648] py-8">
        Fully packed, out of the box
      </p>

      <div className="flex flex-wrap w-3/5 gap-4 justify-center items-center">
        {smallcards.map((value, index) => {
          return (
            <>
              <SmallCard
                key={value?.title + index + value?.title}
                title={value?.title}
                icon={value?.icon}
                iconColor={value?.iconColor}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

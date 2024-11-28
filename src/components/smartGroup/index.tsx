import CardWithImage from "@/components/cardWithImage";
import VideoPlayer from "@/resuableComponents/VideoPlayer";
import { Button } from "@/resuableComponents";
import React from "react";
import image from "../../../public/Waterfall-landscape.jpg";
import { CiChat1 } from "react-icons/ci";
import SmallCardWithIcon from "../../resuableComponents/smallCardWithIcon";

export default function SmartGroup() {
  const cards = [
    {
      title: "Information based groups",
      description:
        "Hi this is new title and everyone please get updated with this",
      image: image
    },
    {
      title: "Add title",
      description:
        "Hi this is new title and everyone please get updated with this",
      image: image
    },
    {
      title: "Add title",
      description:
        "Hi this is new title and everyone please get updated with this",
      image: image
    }
  ];

  const smallcards = [
    {
      title: "Add title",
      icon: <CiChat1 />,
      iconColor: "text-yellow-500"
    },
    {
      title: "Add title",
      icon: <CiChat1 />,
      iconColor: "text-yellow-500"
    },
    {
      title: "Add title",
      icon: <CiChat1 />,
      iconColor: "text-yellow-500"
    },
    {
      title: "Add title",
      icon: <CiChat1 />,
      iconColor: "text-yellow-500"
    },
    {
      title: "Add title",
      icon: <CiChat1 />,
      iconColor: "text-yellow-500"
    },
    {
      title: "Add title",
      icon: <CiChat1 />,
      iconColor: "text-yellow-500"
    }
  ];
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
      <div className="flex flex-col items-center w-1/2 py-8">
        <div className="text-3xl font-bold text-[#3f4648]">
          Not ordinary groups. Meet Smart Groups.
        </div>
        <div className="text-sm text-center pt-3 pb-6">
          Smart Groups allow you to segment users into groups that update
          automatically according to roles, branches, qualifications, or
          anything else you need to maximize operational efficiency.
        </div>
        <Button className="rounded-full bg-[#2998ff]">Get Started</Button>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((value, index) => {
          return (
            <CardWithImage
              key={value?.title + index}
              title={value?.title}
              img={value?.image}
              description={value?.description}
            />
          );
        })}
      </div>

      <p className="text-xl font-bold text-[#3f4648] py-8">
        So smart, you can base them on anything
      </p>

      <div className="flex flex-wrap w-4/5 gap-4 justify-center items-center">
        {smallcards.map((value, index) => {
          return (
            <SmallCardWithIcon
              key={value?.title + index + value?.title}
              title={value?.title}
              icon={value?.icon}
              iconColor={value?.iconColor}
            />
          );
        })}
      </div>
    </div>
  );
}

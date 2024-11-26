import CardWithImage from "@/components/cardWithImage";
import DashboardComponent from "@/components/dashboardComponent";
import image from '../../public/Waterfall-landscape.jpg'
import SmallCard from "@/components/smallCard";
import { PiImageSquareThin } from "react-icons/pi";
import { FaRegImage } from "react-icons/fa";
import { RxStopwatch } from "react-icons/rx";
import { CiChat1 } from "react-icons/ci"
import Video from 'next-video';
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <>
      <div className="bg-white w-full p-8 flex flex-col gap-8">
        <CardWithImage title="Add title" img={image} description="Hi this is new title and everyone please get updated with this " />

        <div className=" flex gap-4 flex-wrap">
          <SmallCard title={"hiiiiii"} icon={<CiChat1/>} iconColor={"text-yellow-500"} />
          <VideoPlayer
            src="/video/smart_groups_activiation.mp4"
            type="video/mp4"
            controls
            autoPlay={true}
            loop
          />
        </div>
      </div>
      {/* <DashboardComponent /> */}
    </>
  );
}

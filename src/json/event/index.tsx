import {
  Wallpaper,
  TimerReset,
  Armchair,
  UserRound,
  MonitorSmartphone,
  ArrowRightFromLine
} from "lucide-react";
import image from "next/image";
import { CiChat1 } from "react-icons/ci";

export const cards = [
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

export const smallcards = [
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

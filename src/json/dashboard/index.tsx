import { Clock, CopyCheck, Crown, Mail, UserPlus } from "lucide-react";
import { FaRunning } from "react-icons/fa";

export const quickTask = [
  {
    icons: <UserPlus />,
    iconDescription: "Add Users",
    color: "text-green-500",
  },
  { icons: <Crown />, iconDescription: "Add Admin", color: "text-amber-500" },
  {
    icons: <CopyCheck />,
    iconDescription: "Add a Task",
    color: "text-purple-500",
  },
  {
    icons: <Mail />,
    iconDescription: "Send an Update",
    color: "text-blue-500",
  },
];

export const attendance = [
  { icons: <FaRunning />, iconDescription: "Nobody is running late" },
  { icons: <Clock />, iconDescription: "Nobody is clocked in" },
];

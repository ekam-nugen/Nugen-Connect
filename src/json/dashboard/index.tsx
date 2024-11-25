import {
  ChevronRight,
  Clock,
  CopyCheck,
  Crown,
  Download,
  Mail,
  UserPlus
} from "lucide-react";
import { FaRunning } from "react-icons/fa";

export const quickTask = [
  {
    icons: <UserPlus />,
    iconDescription: "Add Users",
    color: "text-green-500"
  },
  { icons: <Crown />, iconDescription: "Add Admin", color: "text-amber-500" },
  {
    icons: <CopyCheck />,
    iconDescription: "Add a Task",
    color: "text-purple-500"
  },
  {
    icons: <Mail />,
    iconDescription: "Send an Update",
    color: "text-blue-500"
  }
];

export const attendance = [
  { icons: <FaRunning />, iconDescription: "Nobody is running late" },
  { icons: <Clock />, iconDescription: "Nobody is clocked in" }
];

export const checklistItems = [
  {
    id: 1,
    title: "Activate 5 features",
    icon: "",
    progress: "5/5",
    status: "completed",
    color: "bg-gradient-to-b from-red-500 via-orange-500 to-amber-900"
  },
  {
    id: 2,
    title: "Add 3 admins to your dashboard",
    icon: <ChevronRight />,
    progress: "1/3",
    status: "in_progress",
    color: "bg-gradient-to-b from-teal-200 via-cyan-500 to-teal-900"
  },
  {
    id: 3,
    title: "Add 10 users to test the mobile app",
    icon: <ChevronRight />,
    progress: "5/10",
    status: "in_progress",
    color: "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 "
  },
  {
    id: 4,
    title: "Download our product presentation",
    description:
      "It will guide you on how to evaluate Connecteam for your company",
    icon: <Download />,
    progress: "",
    status: "pending",
    color: "bg-gradient-to-b from-amber-200 via-orange-500 to-yellow-900 "
  },
  {
    id: 5,
    title: "Follow this checklist during your trial",
    icon: <Download />,
    progress: "",
    status: "pending",
    color: "bg-gradient-to-b from-teal-400 via-cyan-500 to-green-900"
  },
  {
    id: 6,
    title: "Download our product presentation",
    description:
      "Share it with colleagues and other decision makers in your company",
    icon: <ChevronRight />,
    progress: "1/3",
    status: "in_progress",
    color: "bg-gradient-to-b from-indigo-400 via-sky-500 to-cyan-900"
  },
  {
    id: 7,
    title: "Add 10 users to test the mobile app",
    icon: <ChevronRight />,
    progress: "5/10",
    status: "in_progress",
    color: "bg-gradient-to-b from-amber-200 via-orange-500 to-yellow-900 "
  },
  {
    id: 8,
    title: "Download our product presentation",
    description:
      "It will guide you on how to evaluate Connecteam for your company",
    icon: <Download />,
    progress: "",
    status: "pending",
    color: "bg-gradient-to-b from-teal-900 via-cyan-500 to-green-900"
  }
];

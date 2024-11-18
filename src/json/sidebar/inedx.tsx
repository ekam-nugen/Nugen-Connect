import {
  AlignJustify,
  BrickWall,
  FileCheck,
  LayoutDashboard,
  Mail,
  MessageCircleMore,
  MessageSquareText,
  SquareLibrary,
  TimerOff,
  TimerReset,
  User,
  Users,
} from "lucide-react";

 export const sidebarItems = [
  { icon: MessageCircleMore, label: "Chat", color: "bg-orange-500" },
  { icon: FileCheck, label: "Quick Task", color: "bg-red-500" },
  { icon: TimerReset, label: "Time Clock", color: "bg-yellow-500" },
  { icon: TimerOff, label: "Time Off", color: "bg-lime-500" },
  { icon: Mail, label: "Update", color: "bg-green-500" },
  { icon: BrickWall, label: "Event", color: "bg-emerald-500" },
  { icon: MessageSquareText, label: "Text Message", color: "bg-teal-500" },
  { icon: SquareLibrary, label: "Help Desk", color: "bg-cyan-500" },
  { icon: SquareLibrary, label: "Knowledge Base", color: "bg-sky-500" },
];

export const userItems = [
  { icon: User, label: "Users" },
  { icon: Users, label: "Smart Groups" },
];

export const OverviewItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: AlignJustify, label: "Activity" },
];

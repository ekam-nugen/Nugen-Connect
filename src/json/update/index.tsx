import { TableHead } from "@/resuableComponents";
import { Columns3, Square } from "lucide-react";
import { comment } from "postcss";
import { IoMdArrowDropdown } from "react-icons/io";
import { LiaCircleSolid } from "react-icons/lia";

export const UpdateTableHead = [
  { TableHead: <LiaCircleSolid className="w-7 h-7" /> },
  { TableHead: "" },
  { TableHead: "Publish date" },
  { TableHead: "Name" },
  { TableHead: "Publish time" },
  { TableHead: "Status" },
  { TableHead: "Comments" },
  { TableHead: "Likes" },
  { TableHead: "Views" },
  { TableHead: "Employees" },
  { TableHead: "Assigned To" },
  { TableHead: "Created by" },
  { TableHead: "Administered by" },
  { TableHead: "Date Created" },

  {
    tableHead: (
      <div className="flex gap-1 justify-end items-end">
        <Columns3 />
        <IoMdArrowDropdown />
      </div>
    ),
  },
];
export const UpdateTableRow = [
  {
    publish_date: "tue 5/11",
    name: "hi",
    publish_time: "11:39",
    status: "Published",
    comments: 1,
    likes: 1,
    Views: 1,
    Employees: 1,
    assigned_to: "Pardeep kumar",
    created_by: "Pardeep kumar",
    administrated_by: "Pardeep kumar",
    date_created: "5/11/2024",
  },
];
export const ScheduledTableRow = [
  { TableHead: <LiaCircleSolid className="w-7 h-7" /> },
  { TableHead: "" },
  { TableHead: "Publish date" },
  { TableHead: "Name" },
  { TableHead: "Publish time" },
  { TableHead: "Assigned To" },
  { TableHead: "Created by" },
  { TableHead: "Administered by" },
  { TableHead: "Date Created" },

  {
    tableHead: (
      <div className="flex gap-1 justify-end items-end">
        <Columns3 />
        <IoMdArrowDropdown />
      </div>
    ),
  },
];
export const ArchieveTableRow = [
  { TableHead: <LiaCircleSolid className="w-7 h-7" /> },
  { TableHead: "" },
  {TableHead:"Name"},
  {TableHead:"Comments"},
  {TableHead:"Likes"},
  {TableHead:"Views"},
  {TableHead:"Employees"},
  {TableHead:"Assigned To"},
  {TableHead:"Created By"},
  {TableHead:"Administered by"},
  {TableHead:"Date Created"},
  {
    tableHead: (
      <div className="flex gap-1 justify-end items-end">
        <Columns3 />
        <IoMdArrowDropdown />
      </div>
    ),
  },
]

import { Square, Columns3 } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";

export const ArchieveTableHead = [
  { tableHead: <Square /> },
  { tableHead: "First name" },
  { tableHead: "Last name" },
  { tableHead: "Title" },
  { tableHead: "Employment Start Date" },
  { tableHead: "Team" },
  { tableHead: "Department" },
  { tableHead: "Kiosk code" },
  { tableHead: "Date added" },
  { tableHead: "Last login" },
  { tableHead: "Archived at" },
  { tableHead: "Archived by" },
  { tableHead: "" },
  {
    tableHead: (
      <div className="flex gap-1 justify-end items-end">
        <Columns3 />
        <IoMdArrowDropdown />
      </div>
    )
  }
];

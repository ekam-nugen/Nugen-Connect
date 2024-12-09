import ControlledSwitches from "@/resuableComponents/switch";
import { Check, Columns3 } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiCrownSimpleFill } from "react-icons/pi";

export const adminTableCell = [
  {
    firstName: "pardeep",
    lastName: "singh",
    accessLevel: (
      <div className="gap-0.5 flex items-center justify-start">
        <PiCrownSimpleFill />
        Owner <IoMdArrowDropdown />
      </div>
    ),
    managedGroup: "All group",
    permission: "All features",
    AdminTab: (
      <div>
        <ControlledSwitches />
      </div>
    ),
    accepted: (
      <div className="text-green-400">
        <Check />
      </div>
    ),
    lastLogin: "05/12/24"
  }
];

export const adminTableHead = [
  { tableHead: "" },
  { tableHead: "First name" },
  { tableHead: "Last name" },
  { tableHead: "Access level" },
  { tableHead: "Managed Groups" },
  { tableHead: "Permissions" },
  { tableHead: "Admin tab" },
  { tableHead: "Accepted" },
  { tableHead: "Last login" },
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

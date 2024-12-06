import { Square, Columns3 } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";

export const UserTableHead = [
  { tableHead: <Square /> },
  { tableHead: "" },
  { tableHead: "Fist name" },
  { tableHead: "Last name" },
  { tableHead: "Mobile phone" },
  { tableHead: "Avaliable info" },
  {
    tableHead: (
      <div className="flex gap-1 justify-end items-end">
        <Columns3 />
        <IoMdArrowDropdown />
      </div>
    )
  }
];

export const UserTableRow = [
  {
    first_name: "Pardeep",
    last_name: "kumar",
    mobile_phone: 7657080539,
    available_info: "Email"
  },
  {
    first_name: "Pardeep",
    last_name: "kumar",
    mobile_phone: "7657080539",
    available_info: "Email"
  },
  {
    first_name: "Pardeep",
    last_name: "kumar",
    mobile_phone: "7657080539",
    available_info: "Email"
  },
  {
    first_name: "Pardeep",
    last_name: "kumar",
    mobile_phone: "7657080539",
    available_info: "Email"
  }
];

export const workContactHeader = [
  { tableHead: <Square /> },
  { tableHead: "Name" },
  { tableHead: "Description" },
  { tableHead: "Visible in App" }
];

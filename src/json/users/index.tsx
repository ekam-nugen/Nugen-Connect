import { Square, Columns3 } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";

export const UserTableHead = [
  { tableHead: <Square /> },
  { tableHead: "" },
  { tableHead: "Fisrt name" },
  { tableHead: "Last name" },
  { tableHead: "Title" },
  {
    tableHead: (
      <div className="gap-1 flex items-center justify-center">
        {" "}
        Employment Start Date
        <IoMdArrowDropdown />
      </div>
    )
  },
  {
    tableHead: (
      <div className="gap-1 flex items-center justify-center">
        Team <IoMdArrowDropdown />
      </div>
    )
  },
  { tableHead: "Department" },
  { tableHead: "Kiosk code" },
  { tableHead: "Date added" },
  { tableHead: "last login" },
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

export const UserTableRow = [
  {
    first_name: "pardeep",
    last_name: "kumar",
    title: "junior Developer",
    employementStartDate: "",
    team: "",
    department: "",
    kiosk_date: "1680",
    date_added: "05/11/2024",
    last_login: "never_logged in"
  },
  {
    first_name: "pardeep",
    last_name: "kumar",
    title: "junior Developer",
    employementStartDate: "",
    team: "",
    department: "",
    kiosk_date: "1680",
    date_added: "05/11/2024",
    last_login: "never_logged in"
  },
  {
    first_name: "pardeep",
    last_name: "kumar",
    title: "junior Developer",
    employementStartDate: "",
    team: "",
    department: "",
    kiosk_date: "1680",
    date_added: "05/11/2024",
    last_login: "never_logged in"
  },
  {
    first_name: "pardeep",
    last_name: "kumar",
    title: "junior Developer",
    employementStartDate: "",
    team: "",
    department: "",
    kiosk_date: "1680",
    date_added: "05/11/2024",
    last_login: "never_logged in"
  },
  {
    first_name: "pardeep",
    last_name: "kumar",
    title: "junior Developer",
    employementStartDate: "",
    team: "",
    department: "",
    kiosk_date: "1680",
    date_added: "05/11/2024",
    last_login: "never_logged in"
  },
  {
    first_name: "pardeep",
    last_name: "kumar",
    title: "junior Developer",
    employementStartDate: "",
    team: "",
    department: "",
    kiosk_date: "1680",
    date_added: "05/11/2024",
    last_login: "never_logged in"
  }
];

"use client";

import React from "react";
import TableComponent from "@/components/common/Table";
import { CommonTableHeader } from "@/components/common/Table/constants";
import { QrCode } from "lucide-react";


const Page = () => {
  const header: CommonTableHeader[] = [
    { accessKey: "name", title: "Name", sortable: true },
    { accessKey: "email", title: "Email", sortable: true },
    { accessKey: "phone", title: "Contact" },
    // { accessKey: "image", title: "Image" },
    { accessKey: "icon", title: "Icon" },
  ];

  const data = [
    {
      name: "Alice",
      email: "alice@test.com",
      phone: "1234567890",
      // image: "../../../../public/theme_logo.png",
      icon: <QrCode className="w-5 h-5" />,
    },
    {
      name: "Bob",
      email: "bob@test.com",
      phone: "9876543210",
      // image: "../../../../public/theme_logo.png",
      icon: <QrCode className="w-5 h-5" />,
    },
    {
      name: "Charlie",
      email: "charlie@test.com",
      phone: "1234567890",
      // image: "../../../../public/theme_logo.png",
      icon: <QrCode className="w-5 h-5" />,
    },
  ];

  return (
    <div>
      <TableComponent headers={header} data={data} isAction isHeaders />
    </div>
  );
};

export default Page;

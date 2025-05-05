"use client";

import React from "react";
import TableComponent from "@/components/common/Table"; 
import { CommonTableHeader } from "@/components/common/Table/constants";

const Page = () => {
   const header: CommonTableHeader[] = [
    { accessKey: "name", title: "Name" },
    { accessKey: "email", title: "Email" },
    { accessKey: "phone", title: "Contact" },
    { accessKey: "action", title: "Action" },
  ];

  const data = [
    { name: "Alice", email: "alice@test.com" , phone: "1234567890" },
    { name: "Bob", email: "bob@test.com" , phone: "9876543210" },
    { name: "Charlie", email: "charlie@test.com" , phone: "1234567890" },
  ];

  return (
    <div>
      <TableComponent
        headers={header}
        data={data} 
        isAction
        isHeaders
      />
    </div>
  );
};

export default Page;

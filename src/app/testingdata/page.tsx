"use client";

import React from "react";
import TableComponent from "@/components/common/Table"; // adjust if path is different

const Page = () => {
  const headers = [
    { title: "Name", accessKey: "name", sortable: true },
    { title: "Email", accessKey: "email", sortable: true },
  ];

  const data = [
    { name: "Alice", email: "alice@test.com" },
    { name: "Bob", email: "bob@test.com" },
  ];

  return (
    <div>
      <TableComponent
        headers={headers}
        data={data}
        onActionClick={(row) => console.log("Clicked row:", row)}
        // onDataChange={(newData) => console.log("Updated data:", newData)}
      />
    </div>
  );
};

export default Page;

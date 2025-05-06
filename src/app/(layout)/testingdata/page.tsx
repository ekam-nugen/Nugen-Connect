"use client";
import TableComponent from "@/components/common/Table";
import { QrCode } from "lucide-react";
import { ChangeEvent, useState } from "react";

const Page = () => {
  const [tableData, setTableData] = useState([
    {
      id: "1",
      name: "Alice",
      email: "alice@test.com",
      phone: "1234567890",
      // image: "../../../../public/theme_logo.png",
      icon: <QrCode className="w-5 h-5" />,
    },
    {
      id: "2",
      name: "Bob",
      email: "bob@test.com",
      phone: "9876543210",
      // image: "../../../../public/theme_logo.png",
      icon: <QrCode className="w-5 h-5" />,
    },
    {
      id: "3",
      name: "Charlie",
      email: "charlie@test.com",
      phone: "1234567890",
      // image: "../../../../public/theme_logo.png",
      icon: <QrCode className="w-5 h-5" />,
    },
  ]);

  const handleInputChange = (
    id: string,
    key: string,
    value: string | number
  ) => {
    const updated = tableData.map((item) =>
      item.id === id ? { ...item, [key]: value } : item
    );
    setTableData(updated);
  };

  const header: any[] = [
    {
      accessKey: "name",
      title: "Name",
      sortable: true,
      cell: ({ row, getValue }: { row: { id: string }; getValue: () => string }) => (
        <input
          className="w-full"
          defaultValue={getValue()}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(row.id, "name", e.target.value)
          }
        />
      ),
    },
    {
      accessKey: "email",
      title: "Email",
      sortable: true,
      cell: ({ row, getValue }: { row: { id: string }; getValue: () => string }) => (
        <input
          className="w-full"
          defaultValue={getValue()}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(row.id, "email", e.target.value)
          }
        />
      ),
    },
    {
      accessKey: "phone",
      title: "Contact",
      cell: ({ row, getValue }: { row: { id: string }; getValue: () => string }) => (
        <input
          className="w-full"
          defaultValue={getValue()}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(row.id, "phone", e.target.value)
          }
        />
      ),
    },
    { accessKey: "icon", title: "Icon" },
  ];

  return (
    <div className="p-4">
      <TableComponent
        headers={header}
        data={tableData}
        isAction={false}
        isHeaders={true}
      />
    </div>
  );
};

export default Page;

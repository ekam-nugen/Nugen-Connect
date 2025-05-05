"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil } from "lucide-react";

type TableHeaderType = {
  title: string;
  accessKey: string;
  sortable?: boolean;
};

type TableComponentProps = {
  headers: TableHeaderType[];
  data: Record<string, any>[];
  onActionClick?: (row: Record<string, any>) => void;
};

const TableComponent: React.FC<TableComponentProps> = ({
  headers,
  data,
  onActionClick,
}) => {
  const [tableData, setTableData] = useState(data);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (column: string) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    const sortedData = [...tableData].sort((a, b) => {
      if (a[column] < b[column]) return order === "asc" ? -1 : 1;
      if (a[column] > b[column]) return order === "asc" ? 1 : -1;
      return 0;
    });

    setTableData(sortedData);
    setSortColumn(column);
    setSortOrder(order);
  };

  return (
    <div className="overflow-auto max-h-[75vh] w-full rounded-md border border-gray-200 shadow-sm">
      <Table className="min-w-full text-sm text-gray-700 bg-white rounded-md">
        <TableHeader className="bg-gray-100 text-gray-600 uppercase tracking-wide text-xs font-medium">
          <TableRow>
            {headers.map((header) => (
              <TableHead
                key={header.accessKey}
                onClick={() => header.sortable && handleSort(header.accessKey)}
                className={`px-4 py-3 text-left cursor-pointer select-none ${
                  header.sortable ? "hover:underline" : ""
                }`}
              >
                <div className="flex items-center gap-1">
                  {header.title}
                  {header.sortable && (
                    <span className="text-xs">
                      {sortColumn === header.accessKey
                        ? sortOrder === "asc"
                          ? "↑"
                          : "↓"
                        : "↕"}
                    </span>
                  )}
                </div>
              </TableHead>
            ))}
            <TableHead className="px-4 py-3">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              {headers.map((header) => (
                <TableCell
                  key={header.accessKey}
                  className="px-4 py-3 whitespace-nowrap"
                >
                  {row[header.accessKey]}
                </TableCell>
              ))}
              <TableCell className="px-4 py-3">
                <button
                  onClick={() => onActionClick?.(row)}
                  className="bg-gray-100 p-2 rounded-md hover:bg-gray-200 transition"
                >
                  <Pencil className="w-4 h-4 text-gray-700" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;

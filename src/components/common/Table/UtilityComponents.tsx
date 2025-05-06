import { TableHead, TableHeader, TableRow } from "@/resuableComponents/table";
import { CommonTableHeader } from "./constants";
import ChevronDown from "../../../../public/ChevronDown";
import { cn } from "@/lib/utils";

export const TableHeaderComponent = ({
  headers,
  sortOrder,
  sortColumn,
  headerCellClass,
  handleTableDataSort,
}: {
  sortColumn: string;
  sortOrder: number;
  headerCellClass?: string;
  headers: CommonTableHeader[];
  handleTableDataSort: (column: string) => void;
}) => {
  return (
    <TableHeader className="w-full bg-slate-100">
      <TableRow className="w-full">
        {headers?.map((header: CommonTableHeader, index: number) => {
          const { accessKey, title, sortable } = header;
          return (
            <TableHead
              key={title + index.toString()}
              className={cn(
                "sticky top-0 z-30 w-[11%] bg-slate-100 text-black font-bold border-b-2",
                headerCellClass
              )}
            >
              <div
                className={cn(
                  "flex justify-center items-center gap-2",
                  accessKey === "request" && "justify-start"
                )}
              >
                {title}
                {sortable && (
                  <button
                    title="Sort"
                    onClick={() => {
                      handleTableDataSort(accessKey);
                    }}
                  >
                    <ChevronDown
                      className={`w-3 ease-in-out transition-all ${
                        sortColumn === accessKey && sortOrder
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                )}
              </div>
            </TableHead>
          );
        })}
      </TableRow>
    </TableHeader>
  );
};

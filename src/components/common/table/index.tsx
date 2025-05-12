"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/resuableComponents";
import { TableDataType, TableProps } from "./constants";
import { TableHeaderComponent } from "./UtilityComponents";
import { useTableUtility } from "@/hooks/useTableUtility";
import ViewImageModal from "@/components/viewImageModal";
import { Pencil } from "lucide-react";
import Switch from "@/resuableComponents/switch";

export default function TableComponent({
  data,
  headers,
  onActionClick,
  className,
  isHeaders,
  headerCellClass,
  notScrolable,
}: Readonly<TableProps>) {
  const sortingData = { sortBy: "", sortOrder: 1 };
  const { handleTableDataSort, sortColumn, sortOrder } = useTableUtility({
    sortingData,
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageClick = (imageUrl: string) => setSelectedImage(imageUrl);
  const closeModal = () => setSelectedImage(null);

  return (
    <div
      className={cn(
        className,
        "relative w-full",
        !notScrolable && "overflow-scroll scrollbar-thin",
        "max-h-[76vh] 2xl:max-h-[80vh]"
      )}
    >
      <Table className="bg-white rounded-lg">
        {isHeaders && (
          <TableHeaderComponent
            sortColumn={sortColumn}
            sortOrder={sortOrder}
            headerCellClass={headerCellClass}
            headers={headers}
            handleTableDataSort={handleTableDataSort}
          />
        )}

        <TableBody className="p-20">
          {data?.map((rowData: TableDataType, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="cursor-pointer hover:bg-gray-100 transition-colors duration-200"
            >
              {headers?.map((header, index) => {
                const { accessKey, title, cell } = header;
                const value =
                  typeof accessKey === "string"
                    ? rowData[accessKey]
                    : undefined;

                // Custom cell renderer
                if (cell) {
                  return (
                    <TableCell
                      key={title + index}
                      className="text-center capitalize pl-4 md:pl-12 lg:pl-24"
                    >
                      {cell({
                        row: rowData,
                        getValue: () => value,
                        prevValue: data,
                        setFunction: (newData) => {
                          onActionClick?.onEdit?.(newData);
                        },
                      })}
                    </TableCell>
                  );
                }

                // Image column
                if (accessKey?.toLowerCase() === "image" && rowData.image) {
                  const imageSrc =
                    typeof rowData.image === "string"
                      ? rowData.image
                      : rowData.image.src;

                  return (
                    <TableCell key={title + index} className="text-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(imageSrc);
                        }}
                        className="cursor-pointer"
                      >
                        <img
                          src={imageSrc}
                          alt={title}
                          width={50}
                          height={50}
                          className="object-cover rounded-md"
                        />
                      </button>
                    </TableCell>
                  );
                }

                // Button column
                if (accessKey?.toLowerCase() === "button" && rowData.button) {
                  const buttonLabel =
                    typeof rowData.button === "string"
                      ? rowData.button
                      : rowData.button.label || "Click";

                  const buttonAction =
                    typeof rowData.button === "object" &&
                    typeof rowData.button.onClick === "function"
                      ? rowData.button.onClick
                      : () => console.log("Button clicked");

                  return (
                    <TableCell
                      key={title + index}
                      className="text-center pl-4 md:pl-12 lg:pl-24"
                    >
                      <Button
                        variant="ghost"
                        onClick={(e) => {
                          e.stopPropagation();
                          buttonAction(rowData);
                        }}
                        className="px-3 py-1 text-sm border shadow-md flex items-center gap-1 rounded-md"
                      >
                        <Pencil size={14} />
                        {buttonLabel}
                      </Button>
                    </TableCell>
                  );
                }

                // Switch column
                if (accessKey?.toLowerCase() === "switch") {
                  return (
                    <TableCell
                      key={title + index}
                      className="text-center pl-4 md:pl-12 lg:pl-24"
                    >
                      <div className="w-full flex justify-center items-center">
                        <Switch
                          checked={rowData.isActive || false}
                          onChange={(e) => {
                            e.stopPropagation();
                            onActionClick?.onToggle?.(rowData);
                          }}
                        />
                      </div>
                    </TableCell>
                  );
                }

                // Default case
                return (
                  <TableCell
                    key={title + index}
                    className="text-center capitalize pl-4 md:pl-24 lg:pl-32"
                  >
                    {value as ReactNode}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {selectedImage && (
        <ViewImageModal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
}

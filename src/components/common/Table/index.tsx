"use client";

import React, { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/resuableComponents";
import { TableDataType, TableProps } from "./constants";
import { TableHeaderComponent } from "./UtilityComponents";
import { useTableUtility } from "@/hooks/useTableUtility";
import ViewImageModal from "@/components/viewImageModal";
export default function TableComponent({
  data,
  headers,
  onActionClick,
  // actionButtonLabel = [{ label: "Action" }],
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
        <TableBody>
          {data?.map(
            (
              rowData: TableDataType,
              rowIndex: React.Key | null | undefined
            ) => (
              <TableRow
                key={rowIndex}
                className="cursor-pointer hover:bg-gray-100"
              >
                {headers?.map((header, index) => {
                  const { accessKey, title, cell } = header;
                  const value =
                    typeof accessKey === "string"
                      ? rowData[accessKey]
                      : undefined;

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
                            className="object-cover"
                          />
                        </button>
                      </TableCell>
                    );
                  }
                  return (
                    <TableCell
                      key={title + index}
                      className="text-center capitalize pl-4 md:pl-12 lg:pl-24"
                    >
                      {value as ReactNode}
                    </TableCell>
                  );
                })}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      {selectedImage && (
        <ViewImageModal closeModal={closeModal} selectedImage={selectedImage} />
      )}
    </div>
  );
}

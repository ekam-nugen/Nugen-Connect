"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/resuableComponents";
import { LogIn, LogOut, Printer } from "lucide-react";
import { CommonTableHeader, RoomApiDataProps, TableProps } from "./constants";
import { TableHeaderComponent } from "./UtilityComponents";
import { useTableUtility } from "@/hooks/useTableUtility";
// import Image, { StaticImageData } from "next/image";
// import ViewImageModal from "@/components/viewImageModal";
// import DefaultImage from "../../../../public/Waterfall-landscape.jpg";
export default function TableComponent({
  data,
  headers,
  onActionClick,
  actionButtonLabel = [{ label: "Action" }],
  className,
  isHeaders,
  headerCellClass,
  notScrolable,
}: Readonly<TableProps>) {
  const sortingData = { sortBy: "", sortOrder: 1 };
  const { handleTableDataSort, sortColumn, sortOrder } = useTableUtility({
    sortingData,
  });
  // const [selectedImage, setSelectedImage] = useState<StaticImageData | null>(null);
  // const handleImageClick = (imageUrl: StaticImageData) => {
  //   setSelectedImage(imageUrl);
  // };

  // const closeModal = () => {
  //   setSelectedImage(null);
  // };
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
              rowData: RoomApiDataProps,
              rowIndex: React.Key | null | undefined
            ) => {
              return (
                <TableRow
                  key={rowIndex}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  {headers?.map((header: CommonTableHeader, index: number) => {
                    const { accessKey, title } = header;
                    const value =
                      typeof accessKey === "string"
                        ? rowData[accessKey]
                        : undefined;

                    if (accessKey?.toLowerCase() === "action") {
                      return (
                        <TableCell
                          key={title + index.toString()}
                          className="flex justify-center mx-auto"
                        >
                          <div className="flex justify-center border-4">
                            {/* {accessKey?.toLowerCase() === "image" &&
                              rowData.image && (
                                <button
                                  onClick={() => handleImageClick(rowData?.image)}
                                  className="cursor-pointer"
                                  aria-label="View image"
                                >
                                  <img
                                    src={rowData.image}
                                    alt=""
                                    width={60}
                                    height={60}
                                    className="object-cover"
                                  />
                                </button>
                              )} */}
                            {accessKey?.toLowerCase() === "icon" &&
                              rowData.icon && (
                                <div className="cursor-pointer text-center text-gray-700 hover:text-gray-900">
                                  {rowData?.icon}
                                </div>
                              )}
                            {actionButtonLabel?.[0]?.label === "Print Bill" ? (
                              <Button
                                className="shadow-md border border-gray-300 text-card-foreground"
                                variant="ghost"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onActionClick?.fn1(rowData);
                                }}
                              >
                                {actionButtonLabel[0]?.label}
                                <Printer size={20} />
                              </Button>
                            ) : (
                              <Button
                                onClick={() =>
                                  !rowData?.isBooked
                                    ? onActionClick?.fn1(rowData)
                                    : onActionClick?.fn2
                                    ? onActionClick.fn2(rowData)
                                    : null
                                }
                                className={
                                  rowData?.isBooked
                                    ? "bg-card-foreground hover:opacity-80"
                                    : "bg-primary"
                                }
                                disabled={!rowData.isActive}
                              >
                                <div className="flex gap-2 justify-center">
                                  {rowData?.isBooked ? (
                                    <>
                                      <LogOut size={20} />
                                      {actionButtonLabel?.[1]?.label}
                                    </>
                                  ) : (
                                    <>
                                      <LogIn size={20} />
                                      {actionButtonLabel?.[0]?.label}
                                    </>
                                  )}
                                </div>
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      );
                    }

                    return (
                      <TableCell
                        key={title + index.toString()}
                        className="text-center capitalize"
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            }
          )}
        </TableBody>
      </Table>
      {/* {selectedImage && (
        <ViewImageModal closeModal={closeModal} selectedImage={selectedImage} />
      )} */}
    </div>
  );
}

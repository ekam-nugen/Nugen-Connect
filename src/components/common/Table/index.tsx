"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Table, TableBody, TableCell, TableRow } from "@/resuableComponents";
import { RoomApiDataProps, TableProps } from "./constants";
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
                        className="text-center capitalize pl-4 md:pl-12 lg:pl-32"
                      >
                        {cell({
                          row: rowData,
                          getValue: () => value,
                          prevValue: data,
                          setFunction: (newData) => {
                            onActionClick?.onEdit?.(newData);
                          },
                        })}
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
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell
                      key={title + index}
                      className="text-center capitalize pl-4 md:pl-12 lg:pl-44"
                    >
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      {/* {selectedImage && (
        <ViewImageModal closeModal={closeModal} selectedImage={selectedImage} />
      )} */}
    </div>
  );
}

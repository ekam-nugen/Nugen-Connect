// import {
//   Button,
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
//   SelectBox,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@repo/ui";
import { cn } from "@/lib/utils"; // Update the path to the correct location
import { TableHead, TableHeader, TableRow } from "@/resuableComponents";
import { ChevronDown } from "lucide-react";
// import { CommonTableHeader, RoomApiDataProps } from "./constants";

// import { SMALL_HOTELNAME, SMALL_ORGANISATION, SMALL_REQUEST } from "@/lib/en";
// import { USERROLEVALUES } from "@/types";
// 
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
  headers: any[];
  handleTableDataSort: (column: string) => void;
}) => {
  // const { userType } = useUserInfo();
  return (
    <TableHeader className="w-full bg-slate-100">
      <TableRow className="w-full">
        {headers
          ?.filter(
            (header) =>
              // !(
              //   // userType?.toLowerCase() === "USERROLEVALUES.MANAGER" ||
              //   // userType?.toLowerCase() === "USERROLEVALUES.STAFF"
              // ) ||
              (header.title.toLowerCase() !== "SMALL_ORGANISATION" &&
                header.title.toLowerCase() !== "SMALL_HOTELNAME")
          )
          .map((header, index: number) => {
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
                    accessKey === "SMALL_REQUEST" && "justify-start"
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
                        className={`w-3 ease-in-out transition-all ${sortColumn === accessKey && sortOrder
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
// export const FoodModalComponent = ({
//   rowData,
//   rowIndex,
//   selectedOrder,
//   colSpanValue,
// }: {
//   rowData: RoomApiDataProps;
//   rowIndex: number;
//   selectedOrder: { roomNo: number; orderId: number } | null;
//   colSpanValue?: number;
// }) => {
//   return (
//     selectedOrder?.orderId === (rowData?.orderNumber as number) &&
//     selectedOrder?.roomNo === rowData?.roomNumber && (
//       <TableRow>
//         <TableCell
//           className="!max-w-full p-4 transition-all duration-300 ease-in-out"
//           colSpan={colSpanValue ?? 7}
//         >
//           <div className="mx-auto w-full max-w-4xl lg:w-10/12 xl:w-8/12 rounded-lg shadow-lg bg-zinc-100 p-4">
//             <FoodModal
//               specialRequirements={rowData?.description}
//               orderID={rowData?.orderNumber as number}
//               itemId={rowData?.orderedItems}
//               variant={rowData?.status}
//               roomNo={rowData?.roomNumber}
//               received={rowData?.orderReceived}
//               fulfilled={rowData?.orderFulfilled}
//               items={rowData?.request}
//               itemsQuantity={rowData?.quantity}
//               rowNumber={rowIndex}
//               review={rowData?.reviews}
//               rating={rowData?.ratings}
//             />
//           </div>
//         </TableCell>
//       </TableRow>
//     )
//   );
// };

// export const TablePagination = ({
//   currentPage,
//   totalPageValue,
//   handleCurrent,
//   className,
// }: {
//   currentPage: number;
//   totalPageValue: number;
//   handleCurrent: (currentPage: number) => void;
//   className?: string;
// }) => {
//   const options = [
//     { id: "1", value: "10", label: "10" },
//     { id: "2", value: "20", label: "20" },
//     { id: "3", value: "50", label: "50" },
//     { id: "4", value: "100", label: "100" },
//     { id: "5", value: "200", label: "200" },
//     { id: "6", value: "300", label: "300" },

//   ];
//   const selectedLimit = useSelector(
//     (state: RootState) => state?.pagination?.limit
//   );
//   const dispatch = useDispatch();

//   return (
//     <Pagination
//       className={cn(
//         "flex justify-center gap-2 p-2 bg-slate-100 rounded-md shadow-md",
//         className
//       )}
//     >
//       <div className="flex w-10/12 justify-center items-center">
//         <Button
//           disabled={currentPage === 1 || totalPageValue === 1}
//           variant="ghost"
//           className="transition-transform transform hover:scale-125"
//         >
//           <PaginationPrevious
//             className="cursor-pointer"
//             onClick={() => handleCurrent(currentPage - 1)}
//           />
//         </Button>

//         <PaginationContent className="cursor-pointer">
//           {currentPage >= 6 && totalPageValue > 3 && (
//             <>
//               <PaginationItem>
//                 <PaginationLink
//                   onClick={() => handleCurrent(1)}
//                   className={cn(
//                     1 === currentPage && "text-black",
//                     "transition-transform transform hover:scale-125"
//                   )}
//                   isActive={1 === currentPage}
//                 >
//                   {1}
//                 </PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink
//                   onClick={() => handleCurrent(2)}
//                   className={cn(
//                     2 === currentPage && "text-black",
//                     "transition-transform transform hover:scale-125"
//                   )}
//                   isActive={2 === currentPage}
//                 >
//                   {2}
//                 </PaginationLink>
//               </PaginationItem>
//               <PaginationItem>
//                 <PaginationLink
//                   onClick={() => handleCurrent(3)}
//                   className={cn(
//                     3 === currentPage && "text-black",
//                     "transition-transform transform hover:scale-125"
//                   )}
//                   isActive={3 === currentPage}
//                 >
//                   {3}
//                 </PaginationLink>
//               </PaginationItem>
//               {totalPageValue > 4 && <PaginationEllipsis />}
//             </>
//           )}

//           {Array.from({ length: Math.min(3, totalPageValue) }, (_, i) => {
//             const pageIndex = currentPage > 1 ? currentPage - 1 + i : i + 1;
//             return (
//               pageIndex <= totalPageValue && (
//                 <PaginationItem key={pageIndex}>
//                   <PaginationLink
//                     onClick={() =>
//                       totalPageValue > 1 && handleCurrent(pageIndex)
//                     }
//                     className={cn(
//                       pageIndex === currentPage &&
//                       totalPageValue === 1 &&
//                       "text-black cursor-not-allowed",
//                       "transition-transform transform hover:scale-125"
//                     )}
//                     isActive={pageIndex === currentPage}
//                   >
//                     {pageIndex}
//                   </PaginationLink>
//                 </PaginationItem>
//               )
//             );
//           })}
//           {totalPageValue > 3 && currentPage < totalPageValue - 1 && (
//             <>
//               {currentPage < totalPageValue - 1 && <PaginationEllipsis />}
//               <PaginationItem>
//                 <PaginationLink
//                   onClick={() => handleCurrent(totalPageValue)}
//                   className={cn(
//                     totalPageValue === currentPage && "text-black",
//                     "transition-transform transform hover:scale-125"
//                   )}
//                   isActive={totalPageValue === currentPage}
//                 >
//                   {totalPageValue}
//                 </PaginationLink>
//               </PaginationItem>
//             </>
//           )}
//         </PaginationContent>

//         <Button
//           disabled={currentPage === totalPageValue || totalPageValue <= 1}
//           variant="ghost"
//           className="transition-transform transform hover:scale-125"
//         >
//           <PaginationNext
//             className="cursor-pointer"
//             onClick={() => handleCurrent(currentPage + 1)}
//           />
//         </Button>
//       </div>
//       <SelectBox
//         className="w-20"
//         selectedId={selectedLimit.toString()}
//         options={options}
//         value={selectedLimit.toString()}
//         onChange={(value: string) => {
//           dispatch(setLimit(Number(value)));
//         }}
//       />
//     </Pagination>
//   );
// };
"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { ChevronUp, ChevronDown as LucideChevronDown } from "lucide-react";

export function useTableUtility({
  //   data,
  sortingData,
}: {
  //   data: any;
  sortingData: { sortBy: string; sortOrder: number };
}) {
  const [selectedOrder, setSelectedOrder] = useState<{
    roomNo: number;
    orderId: number;
  } | null>(null);
  const [sortColumn, setSortColumn] = useState<string>(
    sortingData.sortBy || ""
  );
  const [sortOrder, setSortOrder] = useState<number>(
    sortingData.sortOrder || 1
  );

  const handleTableDataSort = async (column: string) => {
    const sortByColumn =
      column === "name"
        ? "email"
        : column === "action"
        ? ""
        : column;

    const newSortOrder =
      sortingData?.sortBy === sortByColumn && sortingData?.sortOrder === 1
        ? -1
        : 1;

    setSortColumn(sortByColumn);
    setSortOrder(newSortOrder);
  };

  const handleViewOrderClick = (roomNo: number, orderId: number) => {
    setSelectedOrder(
      selectedOrder?.orderId === orderId && selectedOrder?.roomNo === roomNo
        ? null
        : { roomNo, orderId }
    );
  };

  const getArrowIcon = (orderId: number, roomNo: number) => {
    return selectedOrder?.orderId === orderId &&
      selectedOrder?.roomNo === roomNo ? (
      <ChevronUp />
    ) : (
      <LucideChevronDown />
    );
  };

  const linkWrapper = (
    children: ReactNode,
    data: Record<string, any>,
    link?: string
  ) => {
    return link ? (
      <Link
        href={{
          pathname: link,
          query: {
            TotalOrder: data.totalRequest,
            Delayed: data.delayRequest,
            NewOrders: data.newRequest,
            Completed: data.completedRequest,
            Cancelled: data.cancelledRequest,
            Active: data.activeRequest,
          },
        }}
      >
        {children}
      </Link>
    ) : (
      children
    );
  };
  return {
    sortOrder,
    sortColumn,
    selectedOrder,
    getArrowIcon,
    handleViewOrderClick,
    linkWrapper,
    handleTableDataSort,
  };
}

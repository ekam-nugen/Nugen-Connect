import { StaticImageData } from "next/image";
import React from "react";

export type CommonTableHeader = {
  accessKey: keyof TableDataType;
  title: string;
  sortable?: boolean;
  isVisible?: (data: TableDataType) => boolean;
  cell?: ({
    row,
    getValue,
    setFunction,
    prevValue,
  }: {
    row: TableDataType;
    getValue: () => any;
    setFunction: (val: TableDataType[]) => void;
    prevValue: TableDataType[];
  }) => React.ReactNode;
};

export type onActionClickProps = {
  fn1: (rowData: TableDataType) => void;
  fn2?: (rowData: TableDataType) => void;
  onEdit?: (newData: TableDataType[]) => void;
};

export type TableDataType = {
  id: string;
  name?: string;
  email?: string;
  phone?: string;
  image?: StaticImageData | string;
  icon?: JSX.Element;
  isBooked?: boolean;
  isActive?: boolean;
};

export type TableProps = {
  className?: string;
  notScrolable?: boolean;
  isHeaders?: boolean;
  headerCellClass?: string;
  data: TableDataType[];
  headers: CommonTableHeader[];
  actionButtonLabel?: { label: string }[];
  onActionClick?: onActionClickProps;
};

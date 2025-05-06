
import React from "react";

export type RoomCommonTypes = {
  roomRent?: string;
  extraBed?: string;
  isExtraBed?: boolean;
  extraBedRent?: string;
};

export type CommonTableHeader = {
  accessKey: string;
  title: string;
  sortable?: boolean;
  isVisible?: (data: any[]) => boolean;
  cell?: ({
    row,
    getValue,
    setFunction,
    prevValue,
  }: {
    row: RoomApiDataProps;
    getValue: () => any;
    setFunction: (val: any[]) => void;
    prevValue: any[];
    roomId?: string;
  }) => React.ReactNode;
};

export type statusDataProps = {
  headerName: string;
  apiLoading: boolean;
  switchFn: Function;
};

export type onActionClickProps = {
  fn1: (rowData: RoomApiDataProps) => void;
  fn2?: (rowData: RoomApiDataProps) => void;
};

export type ActionButtonLabelProps = {
  label: string;
};

export type RoomApiDataProps = RoomCommonTypes &
  Partial<any> &
  Partial<any> & {
    _id: string;
    resumeLink?: string;
    rowCategory?: [];
    ratings?: number;
    taxType?: string;
    reviews?: string;
    otp?: string;
    icon?: React.ReactNode;
    serviceId?: string;
    roomQR?: string;
    guestName: string;
    roomNumber: number;
    checkinTime: string;
    checkoutTime: string;
    roomCategoryName: string;
    orderedItems?: string;
    tags?: string;
    hotelId: string;
    organisationId: string;
    roomId?: string;
    roomCategoryInfo?: {
      _id: string;
    };
    organizationInfo: {
      _id: string;
      organisationName: string;
    };
    hotelInfo?: {
      hotelName: string;
    };
    taxPercentage?: number;
    roomCategoryId: string;
    orderId: string | number;
    isActive?: boolean;
    isBooked?: boolean;
    rowTitle?: string;
    rowName?: string;
    rowPrice?: number;
    status?: any;
    orderNumber?: number;
    orderReceived?: string;
    orderFulfilled?: string;
    request?: string[];
    quantity?: number[];
    description?: string;
    plan?: string;
    trf?: string;
    trfCharge?: string;
    pax?: string;
    extraBed?: string;
    fPlan?: string;
    roomBookingId?: string;
  };

export type EditRoomProps = RoomCommonTypes & {
  orgId: string;
  hotelId: string;
  roomId: string;
  roomNumber: string;
  roomCategoryId: string;
};

export type TableProps = {
  reduxAction?: any;
  apiUrl?: any;
  role?: string;
  highlightedRoomId?: string | null;
  isAction: boolean;
  isSwitch?: boolean;
  isResume?: boolean;
  isUploadId?: boolean;
  handleuploadId?: (rowData: RoomApiDataProps) => void;
  onUploadFile?: any;
  isRating?: boolean;
  className?: string;
  notScrolable?: boolean;
  showQr?: (rowData: RoomApiDataProps) => void;
  isHeaders?: boolean;
  headerCellClass?: string;
  tableCellClass?: string;
  onEditClick?: (data: any) => void | Promise<void>;
  onAddOrder?: (data: any) => void | Promise<void>;
  data: any;
  isViewOrderClick?: boolean;
  switchData?: statusDataProps;
  headers: CommonTableHeader[];
  onActionClick?: onActionClickProps;
  actionButtonLabel?: ActionButtonLabelProps[];
  link?: string;
  handlePayment?: (rowData: RoomApiDataProps) => void;
  clickRow?: (id?: string, organisationId?: string, router?: string) => void;
  handleOnClick?:
    | ((id: string, organisationId: string, headerKey: string) => void)
    | undefined;
  totalPages?: number;
  currentPage?: number;
  handleCurrent?: (currentPage: number) => void;
  handlePagination?: boolean;
  loader?: any;
  handleSort?: ({
    sortBy,
    sortOrder,
  }: {
    sortBy: string;
    sortOrder: 1 | -1;
  }) => void;
  isFilterButton?: boolean;
  onChangeTableValues?: (val: any[]) => void;
  tableValue?: any[];
  fetchCheckinOrderData?: (
    rowOrganisationId?: string,
    rowHotelId?: string,
    selectedRoomBookingId?: string,
    isRowClick?: boolean
  ) => Promise<void>;
  selectedTableRow?: string;
};

export type CommonTableData = {
  _id: string;
  status: any;
  roomNo: number;
  roomQr: string;
  ratings: number;
  reviews: string;
  orderId: string;
  request: string;
  hotelId: string;
  actions: boolean;
  isBooked: boolean;
  isActive: boolean;
  orderValue: string;
  orderReceived: string;
  orderFulfilled: string;
  organisationId: string;
};

export type billDetails = {
  _id: string;
  orderDetails: number;
  orderReceivedAt: string;
  serviceName: string;
  orderedItems: [];
  name: string;
  quantity: number;
  orderTotal: number;
  total: number;
  orderPrice: {
    orderTotal: number;
    finalAmount: number;
  };
};

export type CheckOutType = {
  hotelId: string;
  orgId: string;
  roomId: string;
  roomBookingId?: string;
  rowData: CheckOutData;
  itemsData: CheckOutItemType[];
  onClose?: () => void;
  dataIsLoading?: boolean;
  dataError?: string;
};

export type CheckOutItemType = {
  item: string;
  subItem: string;
  cost: number;
  orderDetails: number;
  quantity: number;
};

export type RoomInfo = {
  barDiscount: string;
  _id: string;
  roomNumber: string;
};

export type RoomCategoriesInfo = {
  _id: string;
  name: string;
};

export type checkoutTableData = {
  _id: string;
  roomNumber: string;
  roomRent: number;
  extraBed: number;
  taxPercentage: number;
  taxType: string;
  pax: number;
  roomCategory: string;
  plan: string;
  trfCharge: number;
  roomTaxedAmount: number;
  trfTaxes: number;
  organisationId?: string;
  hotelId?: string;
  roomBookingId?: string;
  orderTotal?: string;
  isBooked?: boolean;
};

export type CheckOutData = RoomCommonTypes & {
  _id: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guestName: string;
  guestMobileNumber: string;
  guestEmail?: string;
  state?: string;
  city?: string;
  arrivalCity?: string;
  company?: string;
  gstin?: string;
  purpose?: string;
  address?: string;
  anniversary?: string;
  guestType?: string;
  currency?: string;
  balancePayment?: number;
  vocNumber?: string;
  vocAmount?: string;
  vocDate?: string;
  tacAmount?: number;
  remarks?: string;
  pan?: string;
  bookingReference?: string;
  numberOfGuests: number;
  numberOfRooms: string;
  uploadedIdProof: string;
  bookingMode?: string;
  barDiscount?: string;
  foodDiscount?: string;
  adults: number;
  kids: number;
  stayCount: number;
  birthday: string;
  nationality?: string;
  idType?: string;
  pendingAmount?: string;
  payment?: string;
  taxRoom?: boolean;
  nightStay?: string;
  hotelId: string;
  isCheckin: boolean;
  roomCategoryId: string;
  isDeleted: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  room_info: RoomInfo;
  roomInfo?: checkoutTableData[];
  paymentStatus?: boolean;
  room_categories_info: RoomCategoriesInfo;
};

// Define the props for CheckOutModal
export type CheckOutModalProps = {
  rowData: CheckOutData;
  orgId: string;
  hotelId: string;
  roomId: string;
  onClose: () => void;
  dataIsLoading?: boolean;
  dataError?: string;
  itemsData: CheckOutItemType[];
};

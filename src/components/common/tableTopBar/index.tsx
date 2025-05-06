"use client";
import { Input } from "@/resuableComponents";
import { DatePicker } from "@/resuableComponents/datepicker";

interface TableTopbarProps {
  isSearch?: boolean;
  isDatePicker?: boolean;
}

const TableTopbar: React.FC<TableTopbarProps> = ({
  isSearch,
  isDatePicker,
}) => {
  return (
    <div className="flex justify-start items-center px-4 py-2 gap-4 bg-white rounded-t-md">
      {isSearch && (
        <div className="w-64">
          <Input searchIcon placeholder="Search..." className="w-full" />
        </div>
      )}
      {isDatePicker && <DatePicker mode={"range"} className="max-w-72" />}
    </div>
  );
};

export default TableTopbar;

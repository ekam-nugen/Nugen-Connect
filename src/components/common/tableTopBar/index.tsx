"use client";
import { Input } from "@/resuableComponents";

interface TableTopbarProps {
  isSearch?: boolean;
}

const TableTopbar: React.FC<TableTopbarProps> = ({ isSearch }) => {
  return (
    <div className="flex justify-start items-center px-4 py-2 bg-white rounded-t-md">
      {isSearch && (
        <div className="w-64">
          <Input
            searchIcon
            placeholder="Search..."
            className="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default TableTopbar;

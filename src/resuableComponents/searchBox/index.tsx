import { Search } from "lucide-react";
import React from "react";

interface SearchBoxProps {
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?:string;
}

export default function SearchBox({
  placeholder,
  className,
  onChange,
}: Readonly<SearchBoxProps>) {
  return (
    <div className="flex border-2 rounded-lg px-4 md:px-2 lg:px-4 md:py-1 lg:py-2 py-2 gap-1 shrink justify-between">
      <input
        type="text"
        className={`${className} outline-none flex md:items-center shrink`}
        placeholder={placeholder}
        onChange={onChange}
      />
      <Search className="text-gray-300 flex justify-end items-center md:h-4 md:w-4 md:justify-center md:items-center lg:h-6 lg:w-6" />
    </div>
  );
}

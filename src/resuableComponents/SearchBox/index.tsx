import { Search } from "lucide-react";
import React from "react";

export default function SearchBox({
  placeholder,
  className
}: Readonly<{ placeholder: string; className?: string }>) {
  return (
    <div className="flex border-2 rounded-lg px-4 py-2 gap-1 shrink justify-between">
      <input
        type="text"
        className={`${className} outline-none flex shrink`}
        placeholder={placeholder}
      />
      <Search className="text-gray-300 flex justify-end" />
    </div>
  );
}

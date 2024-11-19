import { Search } from "lucide-react";
import React from "react";

export default function SearchBox() {
  return (
    <>
      <div className="flex border-2 rounded-lg px-4 py-2 gap-1 shrink">
        <input
          type="text"
          className="outline-none flex shrink"
          placeholder="Search anything....."
        />
        <Search className="text-gray-300" />
      </div>
    </>
  );
}

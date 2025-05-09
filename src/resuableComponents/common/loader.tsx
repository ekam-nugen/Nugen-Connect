import React from "react";
import { LoaderIcon } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="absolute top-0 left-0 z-50 w-full h-full bg-gray-100/70">
      <div className="flex flex-col items-center justify-center h-full">
        <LoaderIcon className="w-7 h-7 text-primary animate-spin" />
      </div>
    </div>
  );
};

export default PageLoader;

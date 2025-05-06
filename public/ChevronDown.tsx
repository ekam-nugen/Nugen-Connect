import { cn } from "@/lib/utils";
import React from "react";

const ChevronDown = ({ className }: { className?: string }) => {
  return (
    <svg
      width="8"
      height="7"
      viewBox="0 0 8 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
    >
      <path
        d="M3.05569 5.87397C3.50432 6.47214 4.40157 6.47214 4.8502 5.87397L7.65412 2.13541C8.20865 1.39603 7.68109 0.340901 6.75687 0.340901H1.14902C0.224798 0.340901 -0.302768 1.39603 0.251766 2.13541L3.05569 5.87397Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronDown;

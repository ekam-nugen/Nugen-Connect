import React from "react";
import { PiCrownSimpleThin } from "react-icons/pi";

function LoginUserIcon() {
  return (
    <div className="relative flex items-center bg-[#eaf5ff] rounded-lg cursor-pointer">
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden  border-white flex justify-center items-center">
          <div className="rounded-full h-8 w-8 flex justify-center items-center text-xs font-bold bg-[#689F38] text-white border-white">
            PK
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-5 h-5 border-2 border-white rounded-full bg-[#8a2171] flex items-center justify-center">
          <span className="text-white text-xs">
            <PiCrownSimpleThin />
          </span>
        </div>
      </div>

      <div className="flex flex-col ">
        <div className="ml-3  text-black text-sm font-bold text-nowrap">
          <p>Pardeep Kumar</p>
        </div>
        <div>
          {" "}
          <p className="pl-4 text-sm">Owner</p>
        </div>
      </div>
    </div>
  );
}

export default LoginUserIcon;

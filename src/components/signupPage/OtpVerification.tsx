"use client";

import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import OTP from "@/resuableComponents/otp";

function OTPVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState<string>("");

  const handleClick = () => {
    router.push("./verification");
  };

  return (
    <div className="container mx-auto p-4 bg-white w-[440px] rounded-xl shadow-xl">
      <FaArrowLeft className="h-5 w-5 text-gray-400 cursor-pointer" onClick={handleClick} />
      
      <h3 className="text-xl font-bold mt-1.5 mb-5 text-center text-zinc-600">
        Enter the 4-digit code
      </h3>

      <p className="text-gray-500 mb-4 text-center text-lg">Sent to</p>

      {/* OTP input */}
      <div className="flex justify-center items-center text-center gap-4">
        <OTP
          separator={<span className="gap-2" />}
          value={otp}
          onChange={setOtp}
          length={4}
        />
      </div>

      {/* Error Message */}
      <div className="text-[#ff3f3f] mb-2.5 text-sm text-center hidden">
        This code seems to be wrong, please try again
      </div>

      <p className="text-gray-500 mt-2 text-center text-sm">
        Didn’t get the code? &nbsp;
        <Link href="#" className="text-[#2998ff]">
          More option
        </Link>
      </p>

      <div className="text-center mt-5">
        <Button className="bg-[#2998ff] hover:bg-[#2381D9] text-white font-bold py-2 px-4 rounded-full normal-case">
          Verify
        </Button>
      </div>

      <div className="mt-4 text-center text-sm mb-2 text-[#2998ff] cursor-pointer">
        Log in using email
      </div>
    </div>
  );
}

export default OTPVerification;

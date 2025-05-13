"use client";
import { useState } from "react";
import { Button } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Verification() {
  const [phone, setPhone] = useState<string>("");

  const router = useRouter();
  const handlePhoneChange = (value: any) => {
    setPhone(value);
  };
  const handleChange = () => {
    router.push("./otpVerification");
  };

  return (
    <div className="container mx-auto p-4 bg-white w-[440px] rounded-xl shadow-xl">
      <h2 className="text-3xl font-bold mt-6 text-center text-zinc-600">
        Welcome
      </h2>
      <p className="text-gray-500 mb-4 text-center text-lg">
        Log in to your company app
      </p>
      {/* error-message */}
      <div className="text-[#ff3f3f] mb-4 bg-red-50 px-4 py-4 rounded-lg text-sm text-center mx-14 hidden">
        Phone number is invalid
      </div>
      <div className="flex justify-center items-center px-14 rounded-l-xl">
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={handlePhoneChange}
          inputClass="py-6"
        />
      </div>
      <div className="mt-2 text-center text-gray-400 text-sm">
        We will send you a code to verify your number
      </div>
      <div className="text-center mt-5">
        <Button
          className="bg-[#2998ff] hover:bg-[#2381D9] text-white font-bold py-2 px-4 rounded-full normal-case"
          onClick={handleChange}
        >
          Verify
        </Button>
      </div>
      <hr className="border-b-1 my-5" />
      <p className="text-gray-500 mt-3 text-center text-sm">
        Don't have an account? &nbsp;
        <Link href="#" className="text-[#2998ff]">
          Create one now
        </Link>
      </p>
    </div>
  );
}

export default Verification;

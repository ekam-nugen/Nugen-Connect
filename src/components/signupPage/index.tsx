"use client";
import React, { useState } from "react";
import Image from "next/image";
import login from "../../../public/login.avif";
import { FaEye, FaFacebook, FaGoogle } from "react-icons/fa";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Please enter a valid email.",
      });
    }

    if (name === "password") {
      setErrors({
        ...errors,
        password: passwordRegex.test(value)
          ? ""
          : "Password must be at least 8 characters, contain a number and a special character.",
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("./signup/verification");

    if (!emailRegex.test(formData.email)) {
      setErrors({ ...errors, email: "Please enter a valid email." });
    }
    if (!passwordRegex.test(formData.password)) {
      setErrors({
        ...errors,
        password:
          "Password must be at least 8 characters, contain a number and a special character.",
      });
    }

    if (!errors.email && !errors.password) {
      console.log(formData);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="h-full w-full">
      <div className=" flex justify-center items-center">
        <div className="bg-white rounded-xl shadow-xl flex">
          <div className="bg-white flex items-center justify-center border-r border-gray-100 w-[313px] rounded-l-xl">
            <Image
              src={login}
              alt="Login"
              width={0}
              height={0}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 px-10 pt-10 pb-6 w-[400px] max-w-md">
            <h1 className="text-2xl font-normal mb-10 text-center text-zinc-500 tracking-tight">
              A small step for you, a giant leap for your business.
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex gap-2">
                <div className="">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First name"
                    onChange={handleChange}
                    className={`border px-5 py-3 w-full rounded-md focus:outline-none text-gray-400
                      ${
                        formData.firstName
                          ? "border-blue-500 shadow-[inset_0_-2px_2px_0px] shadow-blue-300"
                          : "border-gray-300"
                      }
                       focus:border-blue-500 focus:shadow-[inset_0_-2px_2px_0px] focus:shadow-blue-300`}
                  />
                </div>
                <div className="">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last name"
                    onChange={handleChange}
                    className={`border px-5 py-3 w-full rounded-md focus:outline-none text-gray-400
                      ${
                        formData.lastName
                          ? "border-blue-500 shadow-[inset_0_-2px_2px_0px] shadow-blue-300"
                          : "border-gray-300"
                      }
                       focus:border-blue-500 focus:shadow-[inset_0_-2px_2px_0px] focus:shadow-blue-300`}
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Business email"
                  className={`border px-5 py-3 w-full rounded-md focus:outline-none text-gray-400
                    ${
                      formData.email
                        ? "border-blue-500 shadow-[inset_0_-2px_2px_0px] shadow-blue-300"
                        : "border-gray-300"
                    }
                     focus:border-blue-500 focus:shadow-[inset_0_-2px_2px_0px] focus:shadow-blue-300`}
                />
                {errors.email && (
                  <p className="text-[#ff3f3f] text-xs mt-2">{errors.email}</p>
                )}
              </div>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    placeholder="Create a password"
                    onChange={handleChange}
                    className={`border px-5 py-3 w-full rounded-md focus:outline-none text-gray-400
                      ${
                        formData.password
                          ? "border-blue-500 shadow-[inset_0_-2px_2px_0px] shadow-blue-300"
                          : "border-gray-300"
                      }
                       focus:border-blue-500 focus:shadow-[inset_0_-2px_2px_0px] focus:shadow-blue-300`}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  >
                    {isPasswordVisible ? (
                      <FaEye className="text-emerald-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                  </span>
                </div>
                {errors.password && (
                  <p className="text-[#ff3f3f] text-xs mt-2 border-[#ff3f3f]">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="items-center justify-center flex capitalize">
                <Button
                  type="submit"
                  className="bg-[#2998ff] hover:bg-[#2381D9] text-white py-2.5 px-10 text-lg mt-4 rounded-full"
                  // disabled={errors.email || errors.password}
                  onClick={handleChange}
                >
                  Let's Go
                </Button>
              </div>
              <div className="flex gap-2 mt-6 items-center justify-center">
                <Button
                  // onClick={handleGoogleSignUp}
                  className="bg-[#f8f9fa] hover:bg-gradient-to-r hover:from-[#e8ecef] hover:to-[#d6e4ff] text-gray-700 px-4 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <FaGoogle size={20} />
                  Google
                </Button>
                <Button
                  // onClick={handleFacebookSignUp}
                  className="bg-[#f8f9fa] hover:bg-gradient-to-r hover:from-[#e8ecef] hover:to-[#d6e4ff] text-gray-700 px-4 text-sm rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <FaFacebook size={20} className="text-[#1877F2]" />
                  Facebook
                </Button>
              </div>
            </form>
            <div className="flex gap-1 items-center justify-center mt-7">
              <p className="text-sm text-gray-500 mt-4">
                Joining an existing account?
              </p>
              <a href="/login">
                <p className="text-sm text-[#2998ff] hover:underline mt-4 cursor-pointer decoration-[#2998ff]">
                  Click here
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center mt-4">
        <p className="text-sm text-gray-400 w-[728px]">
          By signing up, you agree to ou &nbsp;
          <Link
            className="hover:underline decoration-[#2998ff] text-[#2998ff]"
            href={""}
          >
            Terms of Use
          </Link>
          &nbsp;and&nbsp;
          <Link
            className="hover:underline decoration-blue-500 text-[#2998ff]"
            href={""}
          >
            Privacy Notice
          </Link>
          . We may use the information provided by you to contact you (including
          via email) about our products and services and to improve promotion
          efforts including through campaign measurement, audience research, and
          to advertise our products and services more effectively. You may opt
          out at any time, in accordance with our&nbsp;
          <Link
            className="hover:underline decoration-blue-500 text-[#2998ff]"
            href={""}
          >
            Privacy Notice.
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

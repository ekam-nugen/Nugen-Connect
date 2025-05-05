"use client";
import image from "../../../public/theme_logo.png";
import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-full bg-[#f6f6f6]">
        <div className="flex justify-center items-center pt-11 pb-12">
          <Image
            src={image}
            alt="Logo"
            width={200}
            height={200}
            className="object-scale-down"
          />
        </div>
        {children}
      </body>
    </html>
  );
}

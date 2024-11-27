import { Card } from "@/resuableComponents/card";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface cardWithImageType {
  img?: string | StaticImageData;
  title?: string;
  description?: string;
}

const CardWithImage: React.FC<cardWithImageType> = ({
  img,
  title,
  description
}) => {
  return (
    <Card className="w-56 h-72 py-4 px-5 bg-gray-100 border-none flex flex-col gap-2 items-center shadow-md">
      <Image
        src={img || ""}
        height={200}
        width={200}
        alt="image"
        className="rounded-3xl py-1 object-scale-down"
      />
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-[#3f4648] text-sm py-2">{title}</h2>
        <h2 className="text-[#3f4648] text-xs text-center">{description}</h2>
      </div>
    </Card>
  );
};
export default CardWithImage;

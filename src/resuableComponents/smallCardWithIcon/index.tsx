import { Card } from "@/resuableComponents/card";
import React from "react";

interface SmallCardWithIconType {
  title?: string;
  icon?: React.ReactNode;
  iconColor?: string;
}

const SmallCardWithIcon: React.FC<SmallCardWithIconType> = ({
  icon,
  title,
  iconColor
}) => {
  return (
    <Card className="w-44 min-h-24 rounded-3xl py-4 px-6 drop-shadow-2xl flex flex-col justify-center gap-2 border-none">
      <div className={`flex justify-center text-[32px] ${iconColor}`}>
        {icon}
      </div>
      <p className="text-center text-wrap text-xs text-[#3f4648]">{title}</p>
    </Card>
  );
};

export default SmallCardWithIcon;

import React from "react";

import { TbDeviceMobileMessage, TbMessageDots } from "react-icons/tb";
import { CiCirclePlus } from "react-icons/ci";

import { LiaFileExportSolid } from "react-icons/lia";
import HeaderBox from "@/resuableComponents/headerBox/headerBox";
import FilterSearchHeader from "@/resuableComponents/filterSearchHeader";
import TextComponent from "@/resuableComponents/textMess";
import { GoPlus } from "react-icons/go";

function TextMessage() {
  return (
    <div className="m-5">
      <HeaderBox
        header={"Text Message"}
        headerIcon={<TbMessageDots />}
        title={"PK"}
        secondrayButtonLabel="Add New Message"
        secondayButtonIcon={<CiCirclePlus />}
      />

      <FilterSearchHeader searchbox />
      <hr className="border-1 border-gray-200  mx-5" />
      <TextComponent
        icon={<GoPlus />}
        title={"WELCOME TO Nugen It services’S TEXT MESSAGES"}
        description={"Click NEW MESSAGE to send your first message"}
        ctaText={" New Message"}
        imageUrl={
          "https://app.connecteam.com/images/categories/sms/activation.png"
        }
        ctaClassName={"bg-blue-400 text-white text-sm"}
      />
    </div>
  );
}

export default TextMessage;

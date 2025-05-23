"use client";
import { Card } from "@/resuableComponents/card";
import HeaderBox from "@/resuableComponents/headerBox/headerBox";
import React, { useState } from "react";
import { TiContacts } from "react-icons/ti";
import { FaMobileAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import FilterSearchHeader from "@/resuableComponents/filterSearchHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/resuableComponents";
import { PlusCircle, Square } from "lucide-react";
import { Button } from "@mui/material";
import {
  UserTableHead,
  UserTableRow,
  workContactHeader
} from "@/json/directory";

export type TableHead = {
  tableHead: string | React.ReactNode;
};

export type TableRow = {
  first_name: string;
  last_name: string;
  mobile_phone: number;
  avaliable_info: string;
};

function Directory() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index: any) => {
    setActiveCard(index);
  };
  return (
    <div className="m-5">
      <Card className="border-none shadow-none">
        <HeaderBox
          header={"Directory"}
          headerIcon={<TiContacts />}
          title={"PK"}
          buttonIcon={<FaMobileAlt />}
          buttonLabel={"Mobile Preview"}
          secondayButtonIcon={<IoMdArrowDropdown />}
          secondrayButtonLabel={"Options"}
        />
      </Card>
      <div className="flex">
        <div
          className={`mt-5 h-full ${
            activeCard === 0 ? "w-1/2 bg-white " : "w-full bg-zinc-100"
          }`}
        >
          <div
            className={`flex justify-center h-10 text-lg pb-10 pt-6 !rounded-none ${
              activeCard === 0 ? "bg-white" : ""
            }`}
            onClick={() => handleCardClick(0)}
          >
            <Button
              className={` text-blue-500 
                ${
                  activeCard === 0
                    ? "border-b border-blue-500 text-blue-500 bg-white"
                    : "text-gray-400 bg-zinc-100"
                }`}
            >
              <div className="text-lg uppercase tracking-tighter">Users</div>
            </Button>
          </div>
        </div>

        <div
          className={`mt-5 h-full ${
            activeCard === 1 ? "w-full bg-white" : "w-1/2 bg-zinc-100 "
          }`}
        >
          <div
            className={`flex justify-center h-10 text-lg pb-10 pt-6  ${
              activeCard === 1 ? "bg-white" : ""
            }`}
            onClick={() => handleCardClick(1)}
          >
            <Button
              className={` text-blue-500
                ${
                  activeCard === 1
                    ? "border-b border-blue-500 text-blue-500 bg-white"
                    : "text-gray-400 bg-zinc-100"
                }`}
            >
              <div className="text-lg uppercase">Work Contact</div>
            </Button>
          </div>
        </div>
      </div>
      {activeCard === 0 && (
        <Card className="border-none shadow-none rounded-b-xl">
          <FilterSearchHeader filter={true} searchbox={true} />
          <hr className="border-1 border-gray-200 mb-3 mx-5" />
          <div className="mx-5 mb-5">
            <Table className="mb-16">
              <TableHeader>
                <TableRow>
                  {UserTableHead.map((item, index) => (
                    <TableHead key={+index} className="px-4">
                      {item.tableHead}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {UserTableRow.map((item, index) => (
                  <TableRow key={+index} className="hover:bg-[#f8f8f8] group">
                    <TableCell className="text-center opacity-0 group-hover:opacity-100 text-gray-400">
                      <Square />
                    </TableCell>

                    <TableCell className="text-base text-nowrap text-gray-500">
                      <div className="items-center text-white h-8 w-8 bg-[#689F38] rounded-full cursor-pointer flex text-xs font-bold  justify-center mr-4">
                        PK
                      </div>
                    </TableCell>

                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.first_name}
                    </TableCell>

                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.last_name}
                    </TableCell>

                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.mobile_phone}
                    </TableCell>

                    <TableCell className="text-base text-nowrap text-gray-500">
                      <div className="w-[70%] cursor-pointer group-hover:bg-white border-2 rounded-full flex justify-between px-2 h-full items-center">
                        <span className="text-gray-500">
                          {item.available_info}
                        </span>
                        <IoMdArrowDropdown />
                      </div>
                    </TableCell>

                    <TableCell className="px-4 text-base text-nowrap text-gray-500"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      )}
      {/* work contacts */}
      {activeCard === 1 && (
        <Card className="border-none shadow-none rounded-b-xl">
          <FilterSearchHeader
            searchbox={true}
            secondaryButtonIcon={<PlusCircle />}
            secondaryButtonLabel="Add Contact"
            filter
          />
          <hr className="border-1 border-gray-200 mb-3 mx-5" />
          <div className="mx-5 mb-5">
            <Table className="mb-16">
              <TableHeader>
                <TableRow>
                  {workContactHeader.map((item, index) => (
                    <TableHead key={+index} className="px-4">
                      {item.tableHead}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            </Table>
          </div>
        </Card>
      )}
    </div>
  );
}

export default Directory;

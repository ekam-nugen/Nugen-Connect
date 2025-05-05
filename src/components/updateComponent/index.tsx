"use client";

import {
  ArchieveTableRow,
  ScheduledTableRow,
  UpdateTableHead,
  UpdateTableRow,
} from "@/json/update";
import { Table, TableHead, TableHeader, TableRow } from "@/resuableComponents";
import index from "@/resuableComponents/closeStepper";
import FilterSearchHeader from "@/resuableComponents/filterSearchHeader";
import HeaderBox from "@/resuableComponents/headerBox/headerBox";
import { TfiTime } from "react-icons/tfi";
import { TableBody, TableCell } from "@mui/material";

import Button from "@mui/material/Button";
import { CircleCheck, PlusCircle, PlusIcon, Square } from "lucide-react";
import React, { useState } from "react";
import { CiCircleInfo, CiMail } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { LiaCircleSolid, LiaFileExportSolid } from "react-icons/lia";
import { PiCrownSimpleThin } from "react-icons/pi";
import { Card } from "@/resuableComponents/card";
import TableImageText from "@/resuableComponents/tableImageText";
import { IoTimeOutline } from "react-icons/io5";
import { IoMdArchive } from "react-icons/io";

function UpdateComponent() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index: any) => {
    setActiveCard(index);
  };
  return (
    <div className="m-5">
      <HeaderBox
        header={"Update"}
        headerIcon={<CiMail />}
        title={"PK"}
        secondayButtonIcon={
          <FaGraduationCap className="w-5 h-5 text-sky-400" />
        }
      />

      <div className="flex">
        {/* Active Button */}
        <div
          className={`mt-5 h-full ${
            activeCard === 0 ? "w-1/3 " : "w-1/3 "
          }`}
        >
          <div
            className={`flex justify-center h-10 text-lg pb-10 pt-6 ${
              activeCard === 0 ? "bg-white" : ""
            }`}
            onClick={() => handleCardClick(0)}
          >
            <Button
              className={`text-blue-500 ${
                activeCard === 0
                  ? "text-blue-500 bg-white"
                  : "text-gray-400 bg-gray-100"
              }`}
            >
              <div className="text-lg uppercase tracking-tighter">Active</div>
            </Button>
          </div>
        </div>
        {/* Scheduled Button */}
        <div
          className={`mt-5 h-full ${
            activeCard === 1 ? "w-1/3" : "w-1/3"
          }`}
        >
          <div
            className={`flex justify-center h-10 text-lg pb-10 pt-6 ${
              activeCard === 1 ? "bg-white" : ""
            }`}
            onClick={() => handleCardClick(1)}
          >
            <Button
              className={`text-blue-500 ${
                activeCard === 1
                  ? "text-blue-500 bg-white"
                  : "text-gray-400 bg-zinc-100"
              }`}
            >
              <div className="text-lg uppercase flex justify-center items-center gap-2"><div><IoTimeOutline /></div>Scheduled</div>
            </Button>
          </div>
        </div>
        {/* Archieved Button */}
        <div
          className={`mt-5 h-full ${
            activeCard === 2 ? "w-1/3" : "w-1/3 "
          }`}
        >
          <div
            className={`flex justify-center h-10 text-lg pb-10 pt-6 ${
              activeCard === 2 ? "bg-white" : ""
            }`}
            onClick={() => handleCardClick(2)}
          >
            <Button
              className={`text-blue-500 ${
                activeCard === 2
                  ? "text-blue-500 bg-white"
                  : "text-gray-400 bg-zinc-100"
              }`}
            >
              <div className="text-lg uppercase flex items-center justify-center gap-2"><div><IoMdArchive /></div>Archieved</div>
            </Button>
          </div>
        </div>
      </div>

      {activeCard == 0 && (
        <Card className="border-none shadow-none rounded-b-xl">
        
          <FilterSearchHeader
            filter
            searchbox
            secondaryButtonIcon={<PlusCircle />}
            buttonLabel="export"
            buttonIcon={<LiaFileExportSolid />}
            secondaryButtonLabel="Add New"
          />

          <Table>
            <TableHeader>
              <TableRow>
                {UpdateTableHead.map((item, index) => (
                  <TableHead key={+index} className="px-4">
                    {item.TableHead}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {UpdateTableRow.map((item, index) => (
                <TableRow className="group" key={+index}>
                  <TableCell className="text-center opacity-0 group-hover:opacity-100  text-gray-400">
                    <LiaCircleSolid className="w-7 h-7" />
                  </TableCell>
                  <TableCell></TableCell>

                  <TableCell className="text-base text-nowrap text-gray-500 text-center items-center">
                    {item.publish_date}
                  </TableCell>
                  <TableCell className="text-base text-nowrap text-gray-500">
                    {item.name}
                  </TableCell>
                  <TableCell className="text-base text-nowrap text-gray-500">
                    {item.publish_time}
                  </TableCell>
                  <TableCell className="text-base text-nowrap">
                    <div className=" text-green-400 border border-solid items-center text-center justify-center flex rounded-full gap-2 px-3 ">
                      {item.status} <CiCircleInfo />
                    </div>
                  </TableCell>
                  <TableCell className="text-base text-nowrap text-gray-500">
                    {item.comments}
                  </TableCell>
                  <TableCell className="text-base text-nowrap text-gray-500">
                    {item.likes}
                  </TableCell>
                  <TableCell className="text-base text-nowrap text-gray-500">
                    {item.Views}
                  </TableCell>
                  <TableCell className="text-base text-nowrap text-gray-500">
                    {item.Employees}
                  </TableCell>

                  <TableCell className="text-base text-nowrap text-gray-500">
                    <div className="items-center flex px-2 py-2 bg-gray-50 rounded-lg">
                      <div className="items-center bg-[#689F38] rounded-full cursor-pointer flex text-xs font-bold mr-4">
                        <div className="text-white font-bold h-6 w-6 flex justify-center items-center">
                          PK
                        </div>
                      </div>
                      {item.assigned_to}
                    </div>
                  </TableCell>

                  <TableCell className="text-base text-nowrap text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-white flex justify-center items-center">
                        <div className="rounded-full h-8 w-8 flex justify-center items-center text-xs font-bold bg-[#689F38] text-white border-white">
                          PK
                        </div>

                        <div className="absolute bottom-2 right-0  w-5 h-5 border-2 border-white rounded-full bg-[#8a2171] flex items-center justify-center">
                          <span className="text-white text-xs">
                            <PiCrownSimpleThin />
                          </span>
                        </div>
                      </div>

                      <div className="text-gray-500">{item.created_by}</div>
                    </div>
                  </TableCell>

                  <TableCell className="text-base text-nowrap text-gray-500">
                    <div className="flex items-center space-x-2">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-white flex justify-center items-center">
                        <div className="rounded-full h-8 w-8 flex justify-center items-center text-xs font-bold bg-[#689F38] text-white border-white">
                          PK
                        </div>

                        <div className="absolute bottom-2 right-0  w-5 h-5 border-2 border-white rounded-full bg-[#8a2171] flex items-center justify-center">
                          <span className="text-white text-xs">
                            <PiCrownSimpleThin />
                          </span>
                        </div>
                      </div>

                      <div className="text-gray-500">
                        {item.administrated_by}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-base text-nowrap text-gray-500">
                    {item.date_created}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}

      {activeCard == 1 && (
        <Card className="border-none shadow-none rounded-b-xl">
          <FilterSearchHeader
            filter
            searchbox
            secondaryButtonIcon={<PlusCircle />}
            buttonLabel="export"
            buttonIcon={<LiaFileExportSolid />}
            secondaryButtonLabel="Add New"
          />
          <Table>
            <TableHeader>
              <TableRow>
                {ScheduledTableRow.map((item, index) => (
                  <TableHead key={+index} className="px-4">
                    {item.TableHead}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
          </Table>
          <TableImageText
            imageURL={
              "https://app.connecteam.com/images/common/asset-list/no-active-assets.png"
            }
            title={"No active content"}
            buttonLabel={"Add New"}
            buttonIcons={<PlusIcon />}
            description={""}
          ></TableImageText>
        </Card>
      )}

      {activeCard == 2 && (
        <Card className="border-none shadow-none rounded-b-xl">
          <FilterSearchHeader
            filter
            searchbox
            secondaryButtonIcon={<PlusCircle />}
            buttonLabel="export"
            buttonIcon={<LiaFileExportSolid />}
            secondaryButtonLabel="Add New"
          />
          <Table>
            <TableHeader>
              <TableRow>
                {ArchieveTableRow.map((item, index) => (
                  <TableHead key={+index} className="px-4">
                    {item.TableHead}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
          </Table>
        </Card>
      )}
    </div>
  );
}

export default UpdateComponent;

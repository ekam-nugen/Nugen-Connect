"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/resuableComponents";
import { Card } from "@/resuableComponents/card";
import FilterSearchHeader from "@/resuableComponents/filterSearchHeader";
import HeaderBox from "@/resuableComponents/headerBox/headerBox";
import {
  AlignLeft,
  GraduationCap,
  PlusCircle,
  Square,
  User
} from "lucide-react";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { IoArchive } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { UserTableHead, UserTableRow } from "@/json/users/user";
import { adminTableCell, adminTableHead } from "@/json/users/admin";
import { ArchieveTableHead } from "@/json/users/archieve";
import { Button } from "@mui/material";
import TableImageText from "@/resuableComponents/tableImageText";

function Users() {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardClick = (index: any) => {
    setActiveCard(index);
  };
  return (
    <div className="m-5">
      <HeaderBox
        header={"Users"}
        headerIcon={<User />}
        title={"PK"}
        secondayButtonIcon={<GraduationCap />}
        secondrayButtonLabel="0/3"
        borderClassName="hover:bg-gray-50 text-cyan-600 gap-2"
        buttonIcon={<AlignLeft />}
        buttonLabel="Manager user details"
      />
      <div className="flex">
        {/* Users Button */}
        <div
          className={`mt-5 h-full ${
            activeCard === 0 ? "w-1/3 bg-white" : "w-1/3 bg-zinc-100"
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
                  ? "border-b border-blue-500 text-blue-500 bg-white"
                  : "text-gray-400 bg-zinc-100"
              }`}
            >
              <div className="text-lg uppercase tracking-tighter">Users</div>
            </Button>
          </div>
        </div>
        {/* Admin Button */}
        <div
          className={`mt-5 h-full ${
            activeCard === 1 ? "w-1/3 bg-white" : "w-1/3 bg-zinc-100"
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
                  ? "border-b border-blue-500 text-blue-500 bg-white"
                  : "text-gray-400 bg-zinc-100"
              }`}
            >
              <div className="text-lg uppercase">Admin</div>
            </Button>
          </div>
        </div>
        {/* Archieve Button */}
        <div
          className={`mt-5 h-full ${
            activeCard === 2 ? "w-1/3 bg-white" : "w-1/3 bg-zinc-100"
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
                  ? "border-b border-blue-500 text-blue-500 bg-white"
                  : "text-gray-400 bg-zinc-100"
              }`}
            >
              <div className="text-lg uppercase">Archieve</div>
            </Button>
          </div>
        </div>
      </div>

      {/* users cards */}
      {activeCard === 0 && (
        <Card className="border-none shadow-none rounded-b-xl">
          <FilterSearchHeader
            filter
            searchbox
            secondaryButtonLabel="Add users"
            secondaryButtonIcon={<IoMdArrowDropdown />}
            buttonIcon={<IoMdArrowDropdown />}
            buttonLabel={"Export"}
          />
          <div className="mx-5 mb-5">
            <Table className="mb-5">
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

                    <TableCell className="text-base text-nowrap text-gray-500 px-1">
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
                      {item.title}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.employementStartDate}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.team}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.department}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.kiosk_date}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.date_added}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.last_login}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500 gap-3 flex justify-center items-center group-hover:opacity-50 opacity-0 ">
                      <FaPersonArrowUpFromLine className="h-5 w-5" />
                      <IoArchive className="h-5 w-5" />
                      <MdDelete className="h-5 w-5" />
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableImageText
              imageURL={
                "https://app.connecteam.com/images/categories/users/add-users.gif?a=0.8980506213922341"
              }
              title={"Get your team on board!"}
              description={
                "Take the first step of having everyone on the same pageby inviting your first team members to join you."
              }
              buttonLabel={"Add Users"}
              buttonIcons={<PlusCircle />}
            />
          </div>
        </Card>
      )}
      {/* admin card */}
      {activeCard === 1 && (
        <Card className="border-none shadow-none rounded-b-xl">
          <FilterSearchHeader
            filter
            searchbox
            secondaryButtonIcon={<IoMdArrowDropdown />}
            secondaryButtonLabel="Add Admins"
          />
          <div className="mx-5 mb-5">
            <Table className="mb-10">
              <TableHeader>
                <TableRow>
                  {adminTableHead.map((item, index) => (
                    <TableHead key={+index} className="px-4">
                      {item.tableHead}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {adminTableCell.map((item, index) => (
                  <TableRow key={+index} className="hover:bg-[#f8f8f8] group">
                    <TableCell className="text-base text-nowrap text-gray-500 px-1">
                      <div className="items-center text-white h-8 w-8 bg-[#689F38] rounded-full cursor-pointer flex text-xs font-bold  justify-center mr-4">
                        PK
                      </div>
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.firstName}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.lastName}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.accessLevel}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.managedGroup}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.permission}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.AdminTab}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.accepted}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500">
                      {item.lastLogin}
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500 gap-3 flex justify-center items-center group-hover:opacity-50 opacity-0 ">
                      <FaPersonArrowUpFromLine className="h-5 w-5" />
                      <IoArchive className="h-5 w-5" />
                      <MdDelete className="h-5 w-5" />
                    </TableCell>
                    <TableCell className="text-base text-nowrap text-gray-500"></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableImageText
              imageURL={
                "https://app.connecteam.com/images/categories/users/add-managers.gif"
              }
              title={"Managing is better together!"}
              description={
                "Add more admins to test the app with you admins can access the mobile app and the launchpad"
              }
              buttonLabel={"Add Admins"}
              buttonIcons={<IoMdArrowDropdown />}
            />
          </div>
        </Card>
      )}

      {/*   Archieved */}
      {activeCard === 2 && (
        <Card className="border-none shadow-none rounded-b-xl">
          <FilterSearchHeader
            filter
            searchbox
            buttonIcon={<IoMdArrowDropdown />}
            buttonLabel="Export"
          />
          <div className="mx-5 mb-5">
            <Table className="mb-20">
              <TableHeader>
                <TableRow>
                  {ArchieveTableHead.map((item, index) => (
                    <TableHead key={+index} className="px-4">
                      {item.tableHead}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody></TableBody>
            </Table>
          </div>
        </Card>
      )}
    </div>
  );
}

export default Users;

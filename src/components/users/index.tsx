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
import { AlignLeft, GraduationCap, Square, User } from "lucide-react";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";
import { IoArchive } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { UserTableHead, UserTableRow } from "@/json/users";

function Users() {
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
      <Card>
        <div className="text-center mt-4">
          <div className="capitalize text-blue-500">Users</div>
        </div>
        <FilterSearchHeader
          filter
          searchbox
          secondaryButtonLabel="Add users"
          secondaryButtonIcon={<IoMdArrowDropdown />}
          buttonIcon={<IoMdArrowDropdown />}
          buttonLabel={"Export"}
        />
        <div className="m-5">
          <Table>
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
                <>
                  {}
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
                </>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}

export default Users;

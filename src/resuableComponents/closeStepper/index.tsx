import React from "react";
import { CiCircleChevDown } from "react-icons/ci";

function index() {
  return (
    <div>
      <div className="left-0 flex w-full justify-center items-center z-60 fixed gap-2 bg-black top-0 bg-opacity-60 h-14">
        <div className="h-5 w-5 text-white">
          <CiCircleChevDown />
        </div>
        <div className="text-lg text-white items-center flex justify-center">
          Close
        </div>
      </div>
    </div>
  );
}

export default index;

// function index() {
//   return (
//     // <div><div class="left-0 flex w-full justify-center items-center z-60 fixed gap-2 bg-black top-0 bg-opacity-60 h-14">
//     //  <div className='h-5 w-5 text-white'></div>  <div class="text-lg text-white items-center flex justify-center ">close</div></div>
//   )
// }

// export default index

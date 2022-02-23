import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="mx-auto px-12 flex justify-between items-center bg-green-700 text-white w-100 p-6">
        <div className="flex">
          {/* <svg
            className="w-8 text-white"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg> */}
          <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
            USERZ
          </span>
        </div>
        <Link to="/trash">
          <h5 className="font-bold">Recycle Bin</h5>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

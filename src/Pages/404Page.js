import React from "react";
import { Link } from "react-router-dom";

export default function _404Page() {
  document.title = "404 - Page not found.";
  return (
    <div className="grid justify-items-center items-center h-screen">
      <div className="sm:flex">
        <h1 className="text-indigo-500 font-bold text-7xl">404</h1>
        <div className="ml-3  border-l-2 border-slate-200 ">
          <h1 className="font-bold text-5xl my-3 pl-3">Page not found</h1>
          <h1 className="text-gray-500 text-2xl pl-3">
            Please check the url and try again.
          </h1>

          <div className="flex item-center mt-5 ml-3">
            <Link
              to="/"
              className="bg-indigo-500 cursor-pointer text-white px-10 py-2 rounded-full"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

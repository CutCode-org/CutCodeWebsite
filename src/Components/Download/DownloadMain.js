import React, { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DownloadMain() {
  let [categories] = useState({
    Windows: (
      <div className="max-w-md p-3">
        <h1 className="pt-5 text-white font-poppins text-2xl">Windows</h1>
        <p className="text-gray-300 pt-2">For x32/x64 operating systems.</p>
        <div className="download_link bg-indigo-500 flex rounded-full items-center justify-center w-auto mt-5">
          <a href="/" className="py-3 text-white ">
            Download
          </a>
        </div>
      </div>
    ),
    Linux: (
      <div className="max-w-md p-3">
        <h1 className=" pt-5 text-white font-poppins text-2xl">Linux</h1>
        <p className="text-gray-300 pt-2">For Linux operating systems.</p>
        <div className="download_link bg-indigo-500 flex rounded-full items-center justify-center w-auto mt-5">
          <a href="/" className="py-3 text-white ">
            Download
          </a>
        </div>
      </div>
    ),
  });
  return (
    <div className="bg-gray-900 h-screen p-6">
      <section className="container md:flex justify-center sm:py-24">
        <div
          className="flex flex-col items-center justify-center text-center pr-8 mr-8 md:border-r md:border-indigo-600 md:border-opacity-20
        "
        >
          <img
            src="https://cdn.discordapp.com/icons/929333388312182784/4bbb906e5ad2a8af6d76ec8c2f0633b7.webp?size=128"
            alt="CutCode Logo"
            className="w-20 h-20"
          />
          <div className="flex flex-col text-indigo-300 text-xl">
            <h1 className="font-poppins text-transparent bg-clip-text bg-gradient-to-br from-blue-200 to-blue-600">
              CutCode
            </h1>
            <span className="font-light text-sm">Version: 3.0.0</span>
            <span className="font-light text-sm">8 January 2022</span>
          </div>
        </div>
        {/* <div className="border-b border-gray-200"> */}
        <div className="pt-12 sm:py-0 ">
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 rounded-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm leading-5 font-medium",
                      "focus:outline-none",
                      selected
                        ? "border-indigo-400 border-b text-indigo-500"
                        : "border-transparent text-gray-500 hover:border-indigo-300 hover:text-indigo-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts) => (
                <Tab.Panel
                  key={posts}
                  className={classNames("rounded-xl p-3", "focus:outline-none")}
                >
                  {posts}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* </div> */}
        {/* <div className="download-main flex flex-col align-center justify-center px-10">
          <h1 className="font-poppins text-5xl text-white font-semibold">
            Download CutCode
          </h1>
          <div className="max-w-lg grid grid-cols-2">
            <div className="col-span-2 sm:col-span-1 p-3">
              <h1 className="pt-5 text-white font-poppins text-2xl">Windows</h1>
              <p className="text-gray-300 pt-2">
                For both 32 an Windows operating systems.
              </p>
              <div className="download_link bg-indigo-500 flex rounded-full items-center justify-center w-auto mt-5">
                <a href="/" className="py-3 text-white ">
                  Download
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h1 className=" pt-5 text-white font-poppins text-2xl">Linux</h1>
              <p className="text-gray-300 pt-2">For Linux operating systems.</p>
              <div className="download_link bg-indigo-500 flex rounded-full items-center justify-center w-auto mt-11">
                <a href="/" className="py-3 text-white ">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}

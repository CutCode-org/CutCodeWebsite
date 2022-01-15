import React from "react";

export default function DownloadMain() {
  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-full h-40 overflow-hidden">
                <img
                  alt="testimonial"
                  className="w-40 h-40 p-2 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-white"
                  src="https://th.bing.com/th/id/OIP.7s2t4hDFEq6d1dL7ItHiWgAAAA?pid=ImgDet&rs=1"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                For Windows
              </h2>
              <a
                href="https://github.com/Abdesol/CutCode/releases/download/v3.0.0/CutCode.v3.0.0.Win.x64.exe"
                className="flex mx-auto mt-6 text-white bg-indigo-500 w-min border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Download
              </a>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="rounded-lg h-40 overflow-hidden">
                <img
                  alt="testimonial"
                  className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://th.bing.com/th/id/OIP.7FcBoMFn-VZkzqC6bmfptgHaHa?pid=ImgDet&rs=1"
                />
              </div>
              <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                For Linux
              </h2>

              <a
                href="https://github.com/Abdesol/CutCode/releases/download/v3.0.0/CutCode_linux_x64_installer.sh"
                className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded w-min"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

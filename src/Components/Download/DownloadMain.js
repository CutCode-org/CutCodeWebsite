import React from "react";

export default function DownloadMain() {
  return (
    <div className="bg-gray-900 h-auto">
      <section className="container  md:flex item-center justify-center py-24">
        <div className="version py-5 grid place-items-center w-auto">
          <img
            src="https://cdn.discordapp.com/icons/929333388312182784/4bbb906e5ad2a8af6d76ec8c2f0633b7.webp?size=128"
            alt="CutCode Logo"
            className="w-26 h-26"
          />
          <div className="about-version text-gray-300 text-xl pl-2">
            <h1 className="font-poppins">Version: 3.0.0</h1>
            <h1 className="font-poppins">8 January 2022</h1>
          </div>
        </div>
        <div className="download-main flex flex-col align-center justify-center px-10">
          <h1 className="font-poppins text-5xl text-white font-semibold">
            Download CutCode
          </h1>
          <div className="md:flex mt-10">
            <div className="windows w-52">
              <h1 className=" pt-5 text-white font-poppins text-2xl">
                Windows
              </h1>
              <p className="text-gray-300 pt-2">
                For both 32 and 64 bit Windows operating systems.
              </p>
              <div className="download_link bg-indigo-500 flex rounded-full items-center justify-center w-auto mt-5">
                <a href="/" className="py-3 text-white ">
                  Download
                </a>
              </div>
            </div>
            <div className="linux w-52  ml-20 md:ml-5">
              <h1 className=" pt-5 text-white font-poppins text-2xl">Linux</h1>
              <p className="text-gray-300 pt-2">For Linux operating systems.</p>
              <div className="download_link bg-indigo-500 flex rounded-full items-center justify-center w-auto mt-11">
                <a href="/" className="py-3 text-white ">
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

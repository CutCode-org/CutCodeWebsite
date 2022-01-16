import React from "react";

export default function DownloadMain() {
  return (
    <div className="bg-gray-900 h-screen">
      <section className="container pt-20 md:flex item-center justify-center">
        <div className="version py-5 grid place-items-center w-auto">
          <img
            src="https://cdn.discordapp.com/icons/929333388312182784/4bbb906e5ad2a8af6d76ec8c2f0633b7.webp?size=128"
            alt="CutCode Logo"
            className="w-30 h-48"
          />
          <div className="about-version text-gray-300 text-xl pl-2">
            <h1 className="font-poppins">Version: 3.0.0</h1>
            <h1 className="font-poppins">Build: 2.32.23</h1>
            <h1 className="font-poppins">8 January 2022</h1>
          </div>
        </div>
        <div className="download-main flex flex-col align-center justify-center bg-red-700">
          <h1 className="font-poppins text-5xl text-white font-semibold px-10">
            Download CutCode
          </h1>
          <div className="download">
            <h1>Windows</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

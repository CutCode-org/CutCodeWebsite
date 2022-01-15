import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img
            className="h-8 w-auto sm:h-10"
            src="https://cdn.discordapp.com/icons/929333388312182784/4bbb906e5ad2a8af6d76ec8c2f0633b7.webp?size=128"
          />
          <span className="ml-3 text-xl">CutCode</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 text-white hover:text-gray-200" to="/">
            Home
          </Link>
          <Link className="mr-5 text-white hover:text-gray-200" to="/download">
            Download
          </Link>
          <Link className="mr-5 text-white hover:text-gray-200" to="/contact">
            Contact
          </Link>
        </nav>
        <a
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer"
          href="https://github.com/Abdesol/CutCode/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
}

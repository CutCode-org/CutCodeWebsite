import React from "react";
import { Link } from "react-router-dom";
import Tilt from "react-tilt";

export default function Main() {
  return (
    <div className="h-full">
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Download CutCode
              <br className="hidden lg:inline-block" />
              Right Now !!
            </h1>
            <p className="mb-8 leading-relaxed">
              CutCode is an open source tool made for developers to boost their
              productivity and save time by helping them save essential code as
              code snippets in safe place. These code snippets can be searched
              and accessed at anytime. It is a very helpful tool as you no
              longer need to remember your solutions and where you originally
              found them.
            </p>
            <div className="flex justify-center">
              <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg cursor-pointer">
                Download
              </a>
              <Link
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
          <Tilt className="Tilt" options={{ max: 15, scale: 0.9999 }}>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 Tilt-inner">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                className="rounded-lg"
                src="https://user-images.githubusercontent.com/63385587/135706502-35fee274-a8d2-48da-b9a9-50213ae3104a.png"
              />
            </div>
          </Tilt>
        </div>
      </section>
    </div>
  );
}

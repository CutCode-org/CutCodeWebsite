import React from "react";

export default function Features() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-white mb-4">
              Lorem ipsum dolor sit amet.
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
              a iusto fugit quaerat optio nostrum corrupti est possimus maiores
              voluptas, ipsam architecto! Ex enim quia quos. Corporis amet
              repellat eaque!
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0 animate-bounce">
                <img
                  src="https://img.icons8.com/ios/2x/ffffff/plus-math.png"
                  alt="plus_icon"
                  className="w-14 h-14"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Lorem, ipsum.
                </h2>
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima, quibusdam aspernatur tempore maxime autem fugit
                  corrupti qui facilis reprehenderit. Quas est incidunt quos,
                  dolor iure rerum impedit atque amet id!
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-red-400 mb-5 flex-shrink-0 animate-bounce">
                <img
                  src="https://img.icons8.com/ios/2x/ffffff/cloud-sync.png"
                  alt="sync"
                  className="w-14 h-14 rounded-full"
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Lorem, ipsum.
                </h2>
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  voluptas atque optio nihil, asperiores dolorum magnam,
                  assumenda architecto hic earum, debitis alias unde magni id
                  veniam! Incidunt, suscipit. Eius, nam!
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-white mb-5 flex-shrink-0 animate-bounce">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-white text-lg title-font font-medium mb-3">
                  Lorem.
                </h2>
                <p className="leading-relaxed text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis, debitis assumenda quis laborum dolorem excepturi ab
                  nihil expedita eum dolore iure doloremque pariatur
                  reprehenderit? Sint dolorem enim eius eos at.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

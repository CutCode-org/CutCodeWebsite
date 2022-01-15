import React from "react";

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <img
          className="h-8 w-auto sm:h-10"
          src="https://cdn.discordapp.com/icons/929333388312182784/4bbb906e5ad2a8af6d76ec8c2f0633b7.webp?size=128"
          alt="footer_icon"
        />
        <span className="ml-3 text-xl text-white">CutCode</span>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2022 CutCode —
          <a
            href="https://github.com/Abdesol/CutCode/"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @CutCode
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-400">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="1.25rem"
              height="1.25rem"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#9ca3af"
                stroke="none"
              >
                <path
                  d="M2305 5059 c-910 -94 -1707 -666 -2078 -1492 -98 -217 -157 -413
-198 -651 -31 -176 -38 -542 -14 -726 76 -601 331 -1119 756 -1537 194 -190
409 -343 654 -463 296 -146 401 -169 468 -101 l32 31 3 252 3 251 -53 -8
c-189 -27 -339 -21 -457 19 -99 33 -155 69 -232 145 -51 51 -76 86 -108 156
-24 50 -52 109 -63 133 -50 106 -127 198 -225 269 -62 44 -113 96 -113 114 0
22 74 41 134 35 131 -14 273 -115 369 -265 90 -138 174 -210 298 -252 91 -30
268 -23 380 16 l77 26 7 47 c15 98 63 199 128 269 17 18 29 34 26 36 -2 2 -56
12 -119 21 -328 50 -556 151 -730 326 -190 189 -283 424 -311 783 -23 306 45
561 202 756 56 70 56 67 24 181 -10 36 -16 99 -16 180 -1 128 11 201 52 328
l21 62 51 0 c142 0 358 -86 589 -233 l54 -35 60 14 c387 92 772 93 1148 4 l80
-19 65 41 c223 142 440 227 578 228 l51 0 21 -62 c62 -188 72 -363 32 -529
l-24 -95 52 -64 c157 -196 225 -449 202 -757 -26 -350 -114 -579 -297 -772
-163 -174 -411 -285 -749 -336 -60 -10 -112 -19 -114 -21 -2 -2 15 -24 37 -49
43 -48 79 -119 108 -206 15 -47 18 -112 23 -521 l6 -468 32 -31 c26 -26 42
-33 85 -37 45 -3 70 3 168 41 617 239 1125 715 1402 1312 116 249 187 498 223
785 24 184 17 550 -14 726 -130 761 -566 1400 -1221 1794 -323 194 -678 311
-1069 350 -118 12 -378 11 -496 -1z"
                />
              </g>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

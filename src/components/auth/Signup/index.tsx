/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [sidebar, setsidebar] = useState();
  return (
    <div className="h-full bg-gradient-to-tl from-red-200 to-indigo-900 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width={120}
          height={74}
          viewBox="0 0 2408.000000 988.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,988.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M19960 9314 c-19 -2 -91 -9 -160 -14 -1079 -93 -2081 -541 -2790
-1250 -308 -308 -540 -629 -741 -1025 -237 -469 -380 -963 -445 -1540 -34
-308 -29 -831 12 -1155 255 -2023 1717 -3442 3819 -3710 273 -35 468 -43 865
-37 580 9 1029 60 1551 177 340 76 747 199 884 268 326 163 557 489 605 854 8
57 10 515 8 1473 l-3 1390 -27 95 c-125 442 -427 730 -878 836 -69 16 -172 18
-1297 21 l-1223 4 0 -268 c0 -148 5 -307 11 -353 59 -479 375 -842 847 -972
70 -20 108 -22 405 -26 l327 -3 -2 -761 -3 -761 -105 -39 c-291 -110 -620
-165 -1032 -175 -380 -9 -644 20 -938 101 -781 215 -1342 771 -1584 1568 -155
512 -172 1149 -45 1666 62 251 181 537 314 752 359 579 939 971 1605 1084 170
29 328 39 530 33 373 -11 704 -84 1014 -224 171 -77 228 -99 311 -121 368 -98
768 -1 1034 252 35 34 203 220 374 415 l311 353 -50 44 c-168 151 -384 306
-578 418 -596 344 -1374 568 -2171 626 -126 9 -669 12 -755 4z"
            />
            <path
              d="M1446 9084 c-489 -90 -856 -470 -926 -960 -8 -57 -10 -940 -8 -3234
l3 -3155 28 -100 c37 -136 130 -320 213 -423 172 -215 405 -353 685 -407 71
-13 247 -15 1358 -15 767 0 1332 4 1416 10 943 69 1669 341 2144 804 185 181
294 328 402 545 140 280 214 598 226 966 8 283 -21 504 -98 739 -212 646 -764
1114 -1496 1268 -59 12 -103 26 -103 33 0 6 39 26 88 44 815 307 1272 942
1272 1769 0 416 -106 802 -304 1107 -321 493 -915 826 -1711 960 -359 60 -322
59 -1775 61 -1131 2 -1347 0 -1414 -12z m2443 -1608 c400 -67 636 -205 750
-438 51 -104 71 -205 71 -350 -1 -406 -207 -683 -609 -818 -49 -17 -140 -40
-203 -51 -107 -21 -150 -22 -780 -26 l-668 -4 0 856 0 856 668 -4 c575 -3 681
-6 771 -21z m116 -3189 c555 -79 843 -271 947 -633 20 -69 23 -102 23 -254 0
-205 -13 -273 -79 -415 -152 -323 -499 -510 -1045 -565 -59 -6 -381 -10 -752
-10 l-649 0 0 951 0 950 723 -4 c585 -3 743 -7 832 -20z"
            />
            <path
              d="M11075 9084 c-243 -44 -479 -172 -635 -342 -74 -80 -160 -206 -195
-286 -14 -31 -458 -1178 -986 -2549 -529 -1371 -1186 -3075 -1461 -3787 -275
-712 -502 -1303 -505 -1312 -5 -17 35 -18 750 -18 640 0 767 2 836 15 365 70
656 288 813 610 35 72 135 368 363 1070 1490 4596 1357 4195 1386 4195 27 0
-30 171 1390 -4180 176 -542 338 -1022 359 -1067 74 -159 200 -313 345 -422
94 -71 268 -155 390 -188 l100 -28 808 -3 c444 -1 807 0 807 3 0 3 -239 636
-531 1408 -292 771 -938 2478 -1435 3792 -498 1315 -924 2431 -948 2480 -138
288 -405 503 -736 593 -93 25 -103 26 -465 28 -292 2 -387 0 -450 -12z"
            />
          </g>
        </svg>

        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            role="heading"
            aria-label="register to your account"
            className="text-2xl font-extrabold leading-6 text-gray-800"
          >
            Register
          </p>

          <div className="flex flex-wrap -mx-2 mb-6">
            <div className="w-full mt-6  md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="First name *"
              />
            </div>
            <div className="w-full mt-6 md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Last name *"
              />
            </div>

            <div className="w-full mt-6 md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Enter email"
              />
            </div>

            <div className="w-full mt-6 md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Enter password"
              />
            </div>

            <div className="w-full mt-6  md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Date
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>

            <div className="w-full mt-6 md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Select your country
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
          </div>

          <div className="mt-6  w-full"></div>
          <div className="mt-8">
            <button
              role="button"
              aria-label="create my account"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Create my account
            </button>
          </div>
          <p className="text-sm mt-7 font-medium leading-none text-gray-500">
            already have an account?{" "}
            <Link to="/">
              <span
                tabIndex={0}
                role="link"
                aria-label="Sign up here"
                className="text-sm font-medium leading-none underline text-gray-800 cursor-pointer"
              >
                {" "}
                Login here
              </span>
            </Link>
          </p>
          <div className="mt-3 w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400  " />
          </div>
          <button
            aria-label="Continue with google"
            role="button"
            className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <svg
              width={19}
              height={20}
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z"
                fill="#4285F4"
              />
              <path
                d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z"
                fill="#34A853"
              />
              <path
                d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z"
                fill="#FBBC05"
              />
              <path
                d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z"
                fill="#EB4335"
              />
            </svg>
            <p className="text-base font-medium ml-4 text-gray-700">
              Sign up with Google
            </p>
          </button>
          <button
            aria-label="Continue with twitter"
            role="button"
            className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
          >
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1623 5.656C21.3989 5.9937 20.5893 6.21548 19.7603 6.314C20.634 5.79144 21.288 4.96902 21.6003 4C20.7803 4.488 19.8813 4.83 18.9443 5.015C18.3149 4.34158 17.4807 3.89497 16.5713 3.74459C15.6618 3.59421 14.7282 3.74849 13.9156 4.18346C13.1029 4.61842 12.4567 5.30969 12.0774 6.1498C11.6981 6.9899 11.607 7.93178 11.8183 8.829C10.1554 8.74566 8.52863 8.31353 7.04358 7.56067C5.55854 6.80781 4.24842 5.75105 3.1983 4.459C2.82659 5.09745 2.63125 5.82323 2.6323 6.562C2.6323 8.012 3.3703 9.293 4.4923 10.043C3.82831 10.0221 3.17893 9.84278 2.5983 9.52V9.572C2.5985 10.5377 2.93267 11.4736 3.54414 12.2211C4.15562 12.9685 5.00678 13.4815 5.9533 13.673C5.33691 13.84 4.6906 13.8647 4.0633 13.745C4.33016 14.5762 4.8503 15.3032 5.55089 15.8241C6.25147 16.345 7.09742 16.6338 7.9703 16.65C7.10278 17.3313 6.10947 17.835 5.04718 18.1322C3.98488 18.4294 2.87442 18.5143 1.7793 18.382C3.69099 19.6114 5.91639 20.2641 8.1893 20.262C15.8823 20.262 20.0893 13.889 20.0893 8.362C20.0893 8.182 20.0843 8 20.0763 7.822C20.8952 7.23017 21.6019 6.49702 22.1633 5.657L22.1623 5.656Z"
                fill="#1DA1F2"
              />
            </svg>
            <p className="text-base font-medium ml-4 text-gray-700">
              Sign up with Twitter
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

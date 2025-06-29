"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
export default function Page() {
  const [langOptions, setLangOpions] = useState(false);
  const t = useTranslations();
  return (
    <React.Fragment>
      <div className="h-screen w-full oveflow-y-scroll ">
        <header className="w-full h-16 bg-white  max-w-[90%] mx-auto">
          <div className="flex items-center justify-between  h-full mx-auto">
            <div className="--logo">
              <Link href="/user" className="flex items-center ">
                <button className="">
                  <svg
                    viewBox="0 0 32 32"
                    className="size-8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="black" />
                    <rect
                      width="20"
                      height="20"
                      transform="translate(6 6)"
                      fill="black"
                    />
                    <path
                      d="M10.297 10.671C10.3748 10.2042 10.6157 9.78009 10.9768 9.47414C11.3378 9.16818 11.7957 9.00018 12.269 9H14.728C15.2014 8.99994 15.6595 9.16784 16.0208 9.47381C16.3821 9.77979 16.6231 10.204 16.701 10.671L17.256 14H19V12C19 11.8674 19.0527 11.7402 19.1464 11.6464C19.2402 11.5527 19.3674 11.5 19.5 11.5C19.6326 11.5 19.7598 11.5527 19.8535 11.6464C19.9473 11.7402 20 11.8674 20 12V14H21.003C21.7986 14 22.5617 14.3161 23.1243 14.8787C23.6869 15.4413 24.003 16.2044 24.003 17V18C24.0017 18.24 23.9747 18.472 23.922 18.696C24.3095 19.0194 24.6093 19.4353 24.7933 19.9053C24.9774 20.3753 25.04 20.8842 24.9751 21.3847C24.9103 21.8853 24.7202 22.3614 24.4225 22.769C24.1248 23.1766 23.729 23.5025 23.2718 23.7165C22.8147 23.9305 22.3109 24.0257 21.8072 23.9933C21.3035 23.9608 20.8161 23.8018 20.3902 23.531C19.9642 23.2601 19.6135 22.8862 19.3705 22.4438C19.1275 22.0013 19.0001 21.5048 19 21H16.584C16.265 21.7312 15.7756 22.3755 15.1569 22.879C14.5381 23.3826 13.8079 23.7308 13.0271 23.8946C12.2463 24.0584 11.4377 24.033 10.6688 23.8206C9.89979 23.6082 9.1928 23.2149 8.60681 22.6736C8.02081 22.1323 7.57282 21.4586 7.30025 20.7089C7.02767 19.9591 6.93841 19.155 7.03992 18.3637C7.14144 17.5725 7.43078 16.817 7.88378 16.1603C8.33679 15.5036 8.94032 14.9649 9.64399 14.589L10.297 10.671ZM15.714 10.836C15.6752 10.6025 15.5548 10.3903 15.3742 10.2373C15.1937 10.0842 14.9647 10.0001 14.728 10H12.269C12.0323 10.0001 11.8033 10.0842 11.6227 10.2373C11.4422 10.3903 11.3218 10.6025 11.283 10.836L10.728 14.163C11.1432 14.0543 11.5707 13.9995 12 14H16.242L15.714 10.836ZM12 15C10.9391 15 9.9217 15.4214 9.17156 16.1716C8.42141 16.9217 7.99999 17.9391 7.99999 19C7.99999 20.0609 8.42141 21.0783 9.17156 21.8284C9.9217 22.5786 10.9391 23 12 23C13.0609 23 14.0783 22.5786 14.8284 21.8284C15.5786 21.0783 16 20.0609 16 19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15ZM20 21C20 21.5304 20.2107 22.0391 20.5858 22.4142C20.9608 22.7893 21.4696 23 22 23C22.5304 23 23.0391 22.7893 23.4142 22.4142C23.7893 22.0391 24 21.5304 24 21C24 20.4696 23.7893 19.9609 23.4142 19.5858C23.0391 19.2107 22.5304 19 22 19C21.4696 19 20.9608 19.2107 20.5858 19.5858C20.2107 19.9609 20 20.4696 20 21Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <p className="font-semibold text-black/90 text-xl mx-2 ">
                  FramDrive
                </p>
              </Link>
            </div>
            <div className="flex items-center gap-1">
              <button className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-full cursor-pointer md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <div className="flex items-center gap-3 rounded-lg p-2 px-4 hover:border-gray-300 border mx-1 border-gray-100 max-md:hidden bg-gray-50 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <p className="text-xs">ctrl+k</p>
              </div>
              <button
                onClick={() => {
                  setLangOpions(!langOptions);
                }}
                className="relative inline-flex items-center gap-3 p-2 hover:bg-gray-100 rounded-full cursor-pointer transition duration-200"
              >
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-700 group-hover:text-green-600 transition"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                  />
                </svg>

                {/* Dropdown Panel */}
                <div
                  className={`absolute top-full right-0 mt-2 w-48 rounded-xl shadow-lg bg-white/90 backdrop-blur border border-gray-200 p-3 text-start  ${
                    langOptions ? "scale-100" : "scale-0"
                  } transition-all duration-200 origin-top-right`}
                >
                  <div className="text-sm text-gray-700 font-medium mb-2">
                    Language
                  </div>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="hover:text-green-600 cursor-pointer">
                      English
                    </li>
                    <li className="hover:text-green-600 cursor-pointer">
                      Hindi
                    </li>
                    <li className="hover:text-green-600 cursor-pointer">
                      Telugu
                    </li>
                  </ul>
                </div>
              </button>

              <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </header>
        <div className=" mx-auto rounded-3xl overflow-hidden w-full max-w-[90%] h-[90vh] aspect-video bg-[url('/images/hero/02.jpeg')] bg-cover "></div>
        <div className="h-12">{t("hero.welcome")}</div>
      </div>
    </React.Fragment>
  );
}

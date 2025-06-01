import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

export const SearchPageContent: React.FC = () => {
  return (
    <div className="w-full bg-white font-dm-sans">
      <div className="flex px-12 py-8 items-center gap-8">
        <div className="text-[#4B2615] font-semibold text-lg w-[167px] h-[191px] bg-[#fafafa] flex flex-col items-center justify-center gap-4">
          <span>Team</span>
          <span>Services</span>
        </div>
        <div className="flex flex-col max-w-4xl  px-4 py-8">
          <header className="p-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center text-sm text-[#4B2615] hover:text-gray-900 mb-8"
            >
              <ChevronLeftIcon className="h-4 w-4 mr-1" />
              Back
            </Link>
          </header>

          <div className="flex-1 px-4">
            <div className="mb-6">
              <div className="space-y-1">
                <p className=" text-[#4B2615] opacity-75">
                  Law Firm is one of the leading legal offices
                </p>
                <Link href="#" className="text-[#4B2615] underline block">
                  Read more
                </Link>
              </div>
            </div>

            <div className="h-px bg-gray-200 mb-6"></div>

            <div className="mb-6">
              <div className="space-y-1">
                <p className="text-[#4B2615] opacity-75">
                  Law Firm is one of the leading legal offices
                </p>
                <Link href="#" className=" text-[#4B2615] underline block">
                  Read more
                </Link>
              </div>
            </div>

            <div className="h-px bg-gray-200 mb-6"></div>
          </div>
        </div>
      </div>
      <div className="p-4 flex justify-end mr-8">
        <div className="flex items-center space-x-2">
          <div className="flex items-center gap-3">
            <ChevronLeftIcon className="h-5 w-5 text-[#4B2615]" />
            <button className="text-sm text-[#4B2615] hover:border-1 px-1">
              1
            </button>
            <button className="text-sm text-[#4B2615]">2</button>
            <button className="text-sm text-[#4B2615]">3</button>
            <button className="text-sm text-[#4B2615]">...</button>
            <button className="text-sm text-[#4B2615]">999</button>
            <ChevronRightIcon className="h-5 w-5 text-[#4B2615]" />
          </div>
        </div>
      </div>
    </div>
  );
};

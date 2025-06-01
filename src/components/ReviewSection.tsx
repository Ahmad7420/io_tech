"use client";

import NotFoundPage from "@/components/ContentNotFound";
import { Client } from "@/types/types";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React, { useState } from "react";

export const ReviewSection: React.FC<IProps> = ({ clientData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("clients");

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const clientReview = clientData[currentIndex];

  return (
    <div className="h-[850px] flex flex-col gap-6">
      <div className="h-[52px] mt-[100px] ml-[122px] w-[60%]">
        <h2 className="font-bold text-[40px] leading-[52px] tracking-[0] font-dm-sans">
          {t("title")}
        </h2>
        <p className="opacity-[70%] font-dm-sans mt-2">{t("description")}</p>
      </div>
      <div className="mt-24 mx-[122px]">
        {clientData.length ? (
          <>
            <div className=" flex gap-12 w-[70%]">
              <Image
                src={`http://localhost:1337${clientReview.profile_image.url}`}
                alt="review image"
                width={374}
                height={374}
                className="bg-[#643F2E]"
              />
              <div className="flex flex-col justify-between gap-2">
                <p className="opacity-[60%] font-dm-sans">
                  {clientReview.review}
                </p>
                <div>
                  <h3 className="text-2xl font-bold font-dm-sans">
                    {clientReview.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-light font-poppins">
                    {clientReview.position}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-end mr-24">
              <button
                onClick={handlePrev}
                className="bg-white text-black rounded-full p-2 shadow"
                aria-label="Previous"
              >
                <ArrowLeftIcon className="h-6 w-6" />
              </button>
              <button
                onClick={handleNext}
                className="bg-white text-black rounded-full p-2 shadow"
                aria-label="Next"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </button>
            </div>
          </>
        ) : (
          <NotFoundPage />
        )}
      </div>
    </div>
  );
};

interface IProps {
  clientData: Client[];
}

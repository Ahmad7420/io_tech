import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ServicePageContent: React.FC = () => {
  const t = useTranslations("ServicePage");
  return (
    <div className="bg-white">
      <div className="relative w-full h-full ">
        <Image
          src={"/ServiceBackground.png"}
          alt="Hero Image"
          width={1920} // or your image width
          height={400} // match container height for full image
          className="object-cover w-full h-full opacity-3"
          priority
        />
        <div className="absolute inset-0 z-20 mx-24 my-12 font-dm-sans flex flex-col">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <Link
              href="/"
              className="flex items-center text-sm text-[#4B2615] hover:text-gray-900 mb-8"
            >
              <ChevronLeftIcon className="h-4 w-4 mr-1" />
              {t("back")}
            </Link>

            <h1 className="text-3xl font-bold text-[#4B2615] mb-6">
              {t("title")}
            </h1>

            <p className="text-[#1E1E1E] opacity-[70%] mb-8">
              {t("description")}
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-[#1E1E1E] mb-4">
                {t("subTitle1")}
              </h2>
              <div className="pl-6 border-l-2 border-gray-200">
                <div className="flex gap-3">
                  <div className="w-3 h-2 bg-black mt-2" />
                  <p className="text-gray-600 font-semibold">
                    {t("description1")}
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-[#1E1E1E] mb-4">
                {t("subTitle2")}
              </h2>
              <div className="pl-6 border-l-2 border-gray-200">
                <div className="flex gap-3 mb-4">
                  <div className="w-2 h-2 bg-black mt-2"></div>
                  <p className="text-gray-600 font-semibold">
                    {t("description2")}
                  </p>
                </div>

                <p className="text-gray-700 mb-2 ml-5">{t("subTitle2_1")}</p>
                <ul className="ml-5 space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{t("description2_1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{t("description2_2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{t("description2_3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{t("description2_4")}</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-bold text-[#1E1E1E] mb-4">
                {t("subTitle3")}
              </h2>
              <div className="pl-6 border-l-2 border-gray-200">
                <div className="flex gap-3 mb-4">
                  <div className="w-2 h-2 bg-black mt-2"></div>
                  <p className="text-gray-600 font-semibold">
                    {t("description3")}
                  </p>
                </div>

                <ul className="ml-5 space-y-1 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{t("description3_1")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{t("description3_2")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{t("description3_3")}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">-</span>
                    <span>{t("description3_4")}</span>
                  </li>
                </ul>
              </div>
            </section>

            <p className="text-gray-700 mt-24">{t("footer")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

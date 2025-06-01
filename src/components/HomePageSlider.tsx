"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { HomePageSliderContent } from "@/types/types";
import { useTranslations } from "next-intl";
import NotFoundPage from "@/components/ContentNotFound";

export const HomePageSlider: React.FC<IProps> = ({ SliderData }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center w-full">
      <div className="w-full max-w-4xl h-[300px]">
        {SliderData.length ? (
          <Swiper
            slidesPerView={1}
            loop
            direction="vertical"
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            className="h-full w-full mySwiper" // ensure swiper fills height
          >
            {SliderData.map((content) => (
              <SwiperSlide
                className="flex items-center justify-center"
                key={content.id}
              >
                <SliderContent content={content} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <NotFoundPage />
        )}
      </div>
    </div>
  );
};

export const SliderContent: React.FC<{
  content: HomePageSliderContent;
}> = ({ content }) => {
  const t = useTranslations("HeaderNavigation");
  return (
    <div className="w-full h-64 flex items-center justify-between p-6 font-dm-sans">
      {/* Text Section */}
      <div className=" bg-opacity-50 p-4 text-white">
        <h2 className="text-2xl font-bold">{content.title}</h2>
        <p className="text-sm">{content.description}</p>
        <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-[12px]">
          {t("read_more")}
        </button>
      </div>
      <div>
        <div className="bg-[#643F2E]">
          <Image
            src={`http://localhost:1337${content.profile_image.url}`}
            alt="Profile"
            width={374}
            height={374}
          />
        </div>
      </div>
    </div>
  );
};

interface IProps {
  SliderData: HomePageSliderContent[];
}

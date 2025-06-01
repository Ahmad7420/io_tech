"use client";
import React from "react";
import { OurTeamSlider } from "./OurTeamSlide";
import { TeamMember } from "@/types/types";
import { useTranslations } from "next-intl";

export const OurTeamSection: React.FC<IProps> = ({ teamMembers }) => {
  const t = useTranslations("OurTeam");
  return (
    <div className="bg-[#F3F3F3] h-[746px]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[60%]">
          <div className="flex items-center justify-center text-black flex-col ">
            <h3 className="font-semibold text-2xl mt-[126px] font-dm-sans">
              {t("title")}
            </h3>
            <p className="text-center font-dm-sans">{t("description")}</p>
          </div>
        </div>
        <div className="w-[80%]">
          <OurTeamSlider teamMembers={teamMembers} />
        </div>
      </div>
    </div>
  );
};

interface IProps {
  teamMembers: TeamMember[];
}

import Image from "next/image";
import React from "react";
import { OurTeamSection } from "./OurTeamSection";
import { ReviewSection } from "./ReviewSection";
import { HomePageSlider } from "./HomePageSlider";
import { Client, HomePageSliderContent, TeamMember } from "@/types/types";

export const HomePageContent: React.FC<IProps> = ({
  SliderData,
  teamMembers,
  clientData,
}) => {
  return (
    <div>
      <div className="relative w-full h-[850px] ">
        <Image
          src={"/landingImage.jpg"}
          alt="Hero Image"
          width={1920} // or your image width
          height={400} // match container height for full image
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(271.47deg,rgba(75,38,21,0.28)_1.2%,rgba(75,38,21,0.68)_86.38%)]" />
        {<HomePageSlider SliderData={SliderData} />}
      </div>
      <OurTeamSection teamMembers={teamMembers} />
      <ReviewSection clientData={clientData} />

      <div className="bg-white h-6 w-full"></div>
    </div>
  );
};

interface IProps {
  SliderData: HomePageSliderContent[];
  teamMembers: TeamMember[];
  clientData: Client[];
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { TeamMember } from "@/types/types";
import NotFoundPage from "@/components/ContentNotFound";

// Helper to split array into chunks of 3
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export const OurTeamSlider: React.FC<IProps> = ({ teamMembers }) => {
  // Split team members into groups of 3 per slide
  const slides = chunkArray(teamMembers, 3);

  return (
    <div>
      {teamMembers.length ? (
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className=" text-black"
        >
          {slides.map((group, idx) => (
            <SwiperSlide key={idx} className="flex items-center justify-center">
              <SliderContent members={group} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <NotFoundPage />
      )}

      {/* Navigation button styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black !important; /* Dark brown */
          width: 30px !important;
          height: 10px !important;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 30px !important;
        }
      `}</style>
    </div>
  );
};

type SliderContentProps = {
  members: TeamMember[];
};

const SliderContent: React.FC<SliderContentProps> = ({ members }) => {
  return (
    <div className="mx-[10%] h-[348px] py-6 flex items-center justify-center pl-8">
      <div className="flex gap-3 w-[80%]">
        {members.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="flex flex-col max-w-[214px]">
      <Image
        src={`http://localhost:1337${member.profile_image.url}`}
        alt="Profile"
        width={374}
        height={374}
        className="bg-[#643F2E]"
      />

      <h2 className="text-[#4B2615] text-center text-lg font-dm-sans">
        {member.name}
      </h2>
      <p className="text-[#15143966] text-center font-dm-sans">
        {member.position}
      </p>
    </div>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
}

interface IProps {
  teamMembers: TeamMember[];
}

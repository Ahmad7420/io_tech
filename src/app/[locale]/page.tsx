/* eslint-disable @typescript-eslint/no-explicit-any */
import { HomePageContent } from "@/components/HomePageContent";
import { homePageService } from "@/services/homePageService";
import { Client, HomePageSliderContent, TeamMember } from "@/types/types";

export default async function Home({ params }: PageProps) {
  const locale = params.locale;

  let SliderData: HomePageSliderContent[] = [];
  let ourTeamData: TeamMember[] = [];
  let clientData: Client[] = [];

  try {
    const sliderResponse = await homePageService.get<any>(
      `/slider-contents?populate[0]=profile_image&locale=${locale}`
    );
    SliderData = sliderResponse.data;
  } catch (err) {
    console.error("❌ Slider API failed:", err);
  }

  try {
    const ourTeamResponse = await homePageService.get<any>(
      `/our-teams?populate[0]=profile_image&locale=${locale}`
    );
    ourTeamData = ourTeamResponse.data;
  } catch (err) {
    console.error("❌ Team API failed:", err);
  }

  try {
    const clientResponse = await homePageService.get<any>(
      `/clients?populate[0]=profile_image&locale=${locale}`
    );
    clientData = clientResponse.data;
  } catch (err) {
    console.error("❌ Client API failed:", err);
  }

  return (
    <div>
      <HomePageContent
        SliderData={SliderData}
        teamMembers={ourTeamData}
        clientData={clientData}
      />
    </div>
  );
}

interface PageProps {
  params: {
    locale: string;
  };
}

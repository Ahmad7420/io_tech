export type TeamMember = {
    id: number;
    name: string;
    position: string;
    profile_image: { url: string };
};

export type Services = {
    id: number,
    title: string
}

export type HomePageSliderContent = {
    id: number;
    title: string;
    description: string;
    profile_image: { url: string };
}

export type Client = {
    profile_image: { url: string };
    review: string;
    name: string;
    position: string;
};
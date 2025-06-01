import Image from "next/image";
import { ServicePageContent } from "./ServicePageContent";

const ServiceByIdPage: React.FC = () => {
  return (
    <div className="">
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
      </div>

      <ServicePageContent />
    </div>
  );
};
export default ServiceByIdPage;

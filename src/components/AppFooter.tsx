import Image from "next/image";
import React from "react";
import { EmailSubscription } from "./EmailSubscription";

export const AppFooter: React.FC = () => {
  return (
    <footer className=" text-white text-center py-4 h-[256px] mx-12">
      <div className="flex items-center justify-end gap-6 mx-12 my-6">
        <EmailSubscription />
        <p>Contacts</p>
        <div className="text-white flex gap-3">
          <Image src={"/twitter.png"} alt="twitter" width={10} height={5} />
          <Image src={"/facebook.png"} alt="twitter" width={10} height={5} />
          <Image src={"/google.png"} alt="twitter" width={10} height={5} />
        </div>
      </div>
      <hr className="border-t border-white opacity-30 my-4 " />
      <div className="flex justify-between mt-12">
        <div className="flex gap-8 ">
          <span>About</span>
          <span>Our Strategy</span>
          <span>Our Advantages</span>
          <span>Social Responsibility</span>
          <span>Our Services</span>
        </div>
        <span>© 2024 . All rights reserved.</span>
      </div>
    </footer>
  );
};

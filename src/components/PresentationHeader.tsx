import React from "react";
import Image from "next/image";

interface PresentationHeaderProps {
  logoUrl: string;
  brandLogoUrl: string;
  userIconUrl: string;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  logoUrl,
  brandLogoUrl,
  userIconUrl,
}) => {
  return (
    <div className="flex justify-between items-start rounded-t-lg px-5 py-4 gap-x-[100px] gap-y-10 bg-white font-roboto text-base font-medium text-white whitespace-nowrap tracking-[0.15px] flex-wrap">
      <Image
        src={logoUrl}
        alt="Logo"
        width={48}
        height={48}
        className="object-contain"
      />
      <div className="flex min-w-[240px] items-center gap-x-[100px] justify-between flex-wrap w-[865px]">
        <Image
          src={brandLogoUrl}
          alt="Brand Logo"
          width={310}
          height={48}
          className="object-contain self-stretch min-w-[240px] my-auto"
        />
        <div className="self-stretch flex my-auto items-start gap-10 justify-start">
          <div className="text-white self-stretch rounded-lg px-5 py-3 gap-5 bg-[#262626]">
            FEEDBACK
          </div>
          <Image
            src={userIconUrl}
            alt="User Icon"
            width={48}
            height={48}
            className="object-contain flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

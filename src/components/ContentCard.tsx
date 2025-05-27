import React from "react";
import Image from "next/image";

const USER_ICON_URL =
  "https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/8760a380ebbc3de2424727b6a86fe02de83d9c60?placeholderIfAbsent=true";
const DATE_ICON_URL =
  "https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/32de16e55198f11e3d2eee1160fc05b35a3b0ce3?placeholderIfAbsent=true";

interface ContentCardProps {
  title: string;
  description: string;
  metadata: string;
  thumbnailUrl: string;
  iconUrl: string;
  author: string;
  date: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  description,
  metadata,
  thumbnailUrl,
  iconUrl,
  author,
  date,
}) => {
  return (
    <div className="flex min-w-[240px] flex-col items-stretch justify-start w-[447px]">
      <div className="items-stretch rounded-t-lg self-center flex max-w-full w-[447px] px-5 py-5 flex-col justify-start bg-white">
        <div className="self-center w-full text-base text-white font-medium">
          <div className="flex flex-col rounded-md relative aspect-[7.017] w-full px-3 py-[13px] items-start justify-center">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="absolute inset-0 object-cover"
            />
            <div className="relative flex min-h-[32px] items-center gap-2 justify-start">
              <Image
                src={iconUrl}
                alt="Icon"
                width={32}
                height={32}
                className="object-contain self-stretch my-auto flex-shrink-0"
              />
              <div className="self-stretch my-auto line-clamp-1">{title}</div>
            </div>
          </div>
        </div>
        <div className="mt-3 w-full font-normal">
          <div className="text-[#262626] flex-1 w-full gap-2 text-base leading-6 line-clamp-2">
            {description}
          </div>
          <div className="text-[#595959] text-sm leading-5 mt-2">
            {metadata}
          </div>
        </div>
      </div>
      <div className="rounded-b-lg w-full px-5 py-3 text-sm text-[#262626] font-normal leading-4 bg-[#E6E6E6]">
        <div className="flex w-full items-start gap-2 justify-start">
          <Image
            src={USER_ICON_URL}
            alt="User"
            width={20}
            height={20}
            className="object-contain flex-shrink-0"
          />
          <div className="text-[#262626] flex-1">{author}</div>
        </div>
        <div className="flex mt-3 w-full items-start gap-2 justify-start">
          <Image
            src={DATE_ICON_URL}
            alt="Calendar"
            width={20}
            height={20}
            className="object-contain flex-shrink-0"
          />
          <div className="text-[#262626] flex-1">{date}</div>
        </div>
      </div>
    </div>
  );
};

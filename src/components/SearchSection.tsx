import React from "react";
import Image from "next/image";

interface SearchSectionProps {
  searchIconUrl: string;
  filterIconUrl: string;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  searchIconUrl,
  filterIconUrl,
}) => {
  return (
    <div className="flex items-center rounded-b-lg border-t border-[#E5E5E5] px-5 py-3 justify-start flex-wrap bg-[#F5F5F5]">
      <div className="self-stretch flex min-w-[240px] my-auto items-center gap-[5px] font-roboto text-base tracking-[0.15px] justify-start flex-wrap flex-1">
        <div className="text-[#262626] self-stretch my-auto gap-2 font-medium">
          Search
        </div>
        <div className="text-[#737373] self-stretch min-w-[240px] my-auto pl-[2px] gap-[2px] font-normal flex-1">
          Enter a keyword. Example: Java
        </div>
      </div>
      <div className="self-stretch flex my-auto items-start gap-5 justify-start">
        <Image
          src={searchIconUrl}
          alt="Search"
          width={36}
          height={36}
          className="object-contain flex-shrink-0"
        />
        <Image
          src={filterIconUrl}
          alt="Filter"
          width={36}
          height={36}
          className="object-contain flex-shrink-0"
        />
      </div>
    </div>
  );
};

"use client";
import React from "react";

interface SearchBarProps {
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Enter a keyword. Example: Java",
}) => {
  return (
    <div className="flex flex-wrap items-center px-5 py-3 w-full rounded-none border-t border-solid bg-neutral-100 border-t-[color:var(--200,#E5E5E5)]">
      <div className="flex flex-wrap flex-1 shrink gap-1.5 items-center self-stretch my-auto text-base tracking-normal basis-0 min-w-60">
        <div className="gap-2 self-stretch my-auto font-medium text-neutral-800">
          Search
        </div>
        <div className="flex-1 shrink gap-0.5 self-stretch pl-0.5 my-auto basis-0 min-w-60 text-neutral-500">
          {placeholder}
        </div>
      </div>
      <div className="flex gap-5 items-start self-stretch my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/82e8d6780826c407570e64714f4fc7474682b054?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-9 aspect-square"
          alt="Search icon"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/24b3333394c966e9786a3e48c18ec605cc32f8c0?placeholderIfAbsent=true"
          className="object-contain shrink-0 w-9 aspect-square"
          alt="Filter icon"
        />
      </div>
    </div>
  );
};

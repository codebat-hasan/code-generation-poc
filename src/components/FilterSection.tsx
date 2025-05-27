"use client";
import React from "react";

interface FilterOption {
  label: string;
  value: string;
  placeholder?: string;
}

interface FilterSectionProps {
  filters: FilterOption[];
  onClear: () => void;
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  filters,
  onClear,
}) => {
  return (
    <div className="flex flex-wrap gap-5 items-start p-5 w-full rounded-none bg-zinc-100">
      <div className="grow shrink text-base font-medium tracking-normal text-neutral-800 w-[50px]">
        Filter by:
      </div>
      <div className="grow shrink min-w-60 w-[1284px]">
        <div className="flex flex-wrap gap-5">
          {filters.map((filter, index) => (
            <div key={index} className="font-medium w-[232px]">
              <div className="w-full">
                <div className="text-base tracking-normal text-neutral-800">
                  {filter.label}
                </div>
                <div className="flex gap-1 items-center mt-1 w-full text-sm tracking-normal leading-loose min-h-10 text-neutral-800">
                  <div className="flex flex-1 shrink gap-2 items-center self-stretch px-3 py-2 my-auto w-full rounded-md border border-solid basis-0 border-[color:var(--400,#A3A3A3)]">
                    <div className="flex-1 shrink self-stretch my-auto basis-0">
                      {filter.value || filter.placeholder}
                    </div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/63ef2618185192bc0bc1d4719f461aa5d196afbc?placeholderIfAbsent=true"
                      className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      alt="Dropdown arrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            className="self-end text-base tracking-normal text-sky-600 cursor-pointer"
            onClick={onClear}
          >
            Clear
          </div>
        </div>
      </div>
    </div>
  );
};

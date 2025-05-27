"use client";

import * as React from "react";
import {Button} from "./Button";

/**
 * Header component that displays the main navigation bar
 * Including logo, brand image, feedback button and a utility button
 * @returns {JSX.Element} The Header component
 */
const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-start px-5 py-4 bg-white rounded-xl">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/24c3e8d00009552a562edb4901cc061a2ef0e781?placeholderIfAbsent=true"
        alt="Logo"
        className="object-contain shrink-0 w-12 aspect-square"
      />
      <div className="flex flex-wrap gap-10 justify-between items-center min-w-60 w-[865px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/41ab367c5115d1c2525af45870b584dae4b621e4?placeholderIfAbsent=true"
          alt="Brand"
          className="object-contain self-stretch my-auto aspect-[6.45] min-w-60 w-[310px]"
        />
        <div className="flex gap-10 items-start self-stretch my-auto">
          <Button
            // variant="primary"
            className="gap-5 self-stretch px-5 py-3 text-base font-medium tracking-normal text-white whitespace-nowrap rounded-xl bg-neutral-800"
            aria-label="Provide feedback"
          >
            Feedback
          </Button>
          <Button
            // variant="secondary"
            className="flex gap-2.5 items-center p-2 w-12 h-12 rounded-xl bg-neutral-200 min-h-12"
            aria-label="Additional options"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/37c87193e6d446d1a52b9092b7ea3b38/c4881f54a304b98c7b15df3cfc27c060867852ed?placeholderIfAbsent=true"
              alt="Options icon"
              className="object-contain self-stretch my-auto w-8 aspect-square"
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

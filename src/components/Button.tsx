"use client";

import React from "react";
import { LeftArrowIcon } from "./icons/LeftArrowIcon";
import { RightArrowIcon } from "./icons/RightArrowIcon";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  leftIcon?: boolean;
  rightIcon?: boolean;
}

/**
 * Button component with optional left and right icons
 * @param {ButtonProps} props - The button properties
 * @returns {React.ReactElement} The Button component
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  onClick,
  leftIcon = true,
  rightIcon = true,
  // variant = "default",
}) => {
  const baseClasses =
    "box-border inline-flex gap-1.5 items-center px-2.5 py-1 rounded transition-all duration-200 cursor-pointer bg-neutral-800 ease-[ease-in-out] max-md:gap-1 max-md:px-2 max-md:py-1 max-md:h-8 max-md:w-[100px] max-sm:gap-1 max-sm:px-1.5 max-sm:py-0.5 max-sm:h-[30px] max-sm:w-[90px] hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600";

  const iconClasses = "w-[18px] h-[18px] flex-shrink-0 text-white";

  const textClasses =
    "flex-1 text-base font-medium tracking-wide leading-7 text-center text-white max-md:text-sm max-md:tracking-wide max-md:leading-6 max-sm:text-sm max-sm:tracking-wide max-sm:leading-6";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className}`}
      type="button"
    >
      {leftIcon && (
        <span className="flex items-center">
          <LeftArrowIcon className={iconClasses} />
        </span>
      )}

      <span className={textClasses}>{children}</span>

      {rightIcon && (
        <span className="flex items-center">
          <RightArrowIcon className={iconClasses} />
        </span>
      )}
    </button>
  );
};

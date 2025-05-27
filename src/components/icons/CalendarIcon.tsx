import React from "react";

interface CalendarIconProps {
  className?: string;
}

export const CalendarIcon: React.FC<CalendarIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.833 2.5h-.833V.833h-1.667V2.5h-6.666V.833H5V2.5h-.833c-.917 0-1.659.75-1.659 1.667L2.5 17.5c0 .917.741 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V4.167c0-.917-.75-1.667-1.667-1.667zm0 15H4.167V7.5h11.666V17.5zm-10-10.833h3.334v3.333H5.833V6.667z"
        fill="currentColor"
      />
    </svg>
  );
};

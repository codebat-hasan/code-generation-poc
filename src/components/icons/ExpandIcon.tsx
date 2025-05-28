import React from "react";

interface ExpandIconProps {
  expanded?: boolean;
  className?: string;
}

export const ExpandIcon: React.FC<ExpandIconProps> = ({
  expanded = false,
  className = "",
}) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {expanded ? (
        <path
          d="M16 11L8 19L9.88 20.88L16 14.7733L22.12 20.88L24 19L16 11Z"
          fill="#262626"
        />
      ) : (
        <path
          d="M22.12 11L16 17.1067L9.88 11L8 12.88L16 20.88L24 12.88L22.12 11Z"
          fill="#262626"
        />
      )}
    </svg>
  );
};

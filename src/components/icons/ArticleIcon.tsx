import React from "react";

interface ArticleIconProps {
  className?: string;
}

export const ArticleIcon: React.FC<ArticleIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.667 4H5.333C4.597 4 4 4.597 4 5.333v21.334C4 27.403 4.597 28 5.333 28h21.334c.736 0 1.333-.597 1.333-1.333V5.333C28 4.597 27.403 4 26.667 4zM24 24H8v-2.667h16V24zm0-5.333H8V16h16v2.667zM8 13.333V8h16v5.333H8z"
        fill="currentColor"
      />
    </svg>
  );
};

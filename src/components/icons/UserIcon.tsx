import React from "react";

interface UserIconProps {
  className?: string;
}

export const UserIcon: React.FC<UserIconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 10a5 5 0 100-10 5 5 0 000 10zm3.333 1.667h-.666a6.827 6.827 0 01-5.334 0h-.666A4.667 4.667 0 002 16.333v1.444c0 1.222.989 2.223 2.222 2.223h11.556A2.222 2.222 0 0018 17.777v-1.444a4.667 4.667 0 00-4.667-4.666z"
        fill="currentColor"
      />
    </svg>
  );
};

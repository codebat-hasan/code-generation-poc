"use client";

import * as React from "react";
import Image from "next/image";

interface HeaderProps {
  userImageUrl?: string;
}

/**
 * Header component that displays the main navigation bar
 * Including logo, brand image, feedback button and a utility button
 * @returns {JSX.Element} The Header component
 */
export const Header: React.FC<HeaderProps> = ({ userImageUrl }) => {
  return (
    <div className="w-full max-w-[1420px] mx-auto mt-5">
      <div className="bg-white rounded-t-lg h-20 flex items-center justify-between px-5">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 36C7.43333 36 6.95867 35.808 6.576 35.424C6.192 35.0413 6 34.5667 6 34C6 33.4333 6.192 32.9587 6.576 32.576C6.95867 32.192 7.43333 32 8 32H40C40.5667 32 41.0413 32.192 41.424 32.576C41.808 32.9587 42 33.4333 42 34C42 34.5667 41.808 35.0413 41.424 35.424C41.0413 35.808 40.5667 36 40 36H8ZM8 26C7.43333 26 6.95867 25.808 6.576 25.424C6.192 25.0413 6 24.5667 6 24C6 23.4333 6.192 22.958 6.576 22.574C6.95867 22.1913 7.43333 22 8 22H40C40.5667 22 41.0413 22.1913 41.424 22.574C41.808 22.958 42 23.4333 42 24C42 24.5667 41.808 25.0413 41.424 25.424C41.0413 25.808 40.5667 26 40 26H8ZM8 16C7.43333 16 6.95867 15.8087 6.576 15.426C6.192 15.042 6 14.5667 6 14C6 13.4333 6.192 12.958 6.576 12.574C6.95867 12.1913 7.43333 12 8 12H40C40.5667 12 41.0413 12.1913 41.424 12.574C41.808 12.958 42 13.4333 42 14C42 14.5667 41.808 15.042 41.424 15.426C41.0413 15.8087 40.5667 16 40 16H8Z"
              fill="#262626"
            />
          </svg>
        </button>

        <div className="flex justify-between items-center w-[865px] flex-shrink-0 md:flex-row flex-col gap-5">
          <div className="w-[310px] h-12">
            <Image
              src="/accion-logo.svg"
              alt="Accion Labs Logo"
              width={310}
              height={48}
              priority
            />
          </div>

          <div className="flex items-start gap-10">
            <button className="px-5 py-3 bg-[#262626] text-white rounded-lg font-medium hover:bg-[#333] transition-colors">
              FEEDBACK
            </button>
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#E6E6E6]">
              {userImageUrl && (
                <Image
                  src={userImageUrl}
                  alt="User"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F5F5F5] h-[60px] flex items-center justify-between px-5 rounded-b-lg border-t border-[#E5E5E5]">
        <div className="flex items-center gap-1 flex-1">
          <span className="text-[#262626] font-medium">Search</span>
          <span className="text-[#737373] pl-0.5">
            Enter a keyword. Example: Java
          </span>
        </div>

        <div className="flex items-start gap-5">
          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.95 16.5C25.95 21 22.14 24.15 18 24.15C13.86 24.15 10.05 21 10.05 16.5H7.5C7.5 21.615 11.58 25.845 16.5 26.58V31.5H19.5V26.58C24.42 25.845 28.5 21.615 28.5 16.5M16.2 7.35C16.2 6.36 17.01 5.55 18 5.55C18.99 5.55 19.8 6.36 19.8 7.35L19.785 16.65C19.785 17.64 18.99 18.45 18 18.45C17.01 18.45 16.2 17.64 16.2 16.65M18 21C19.1935 21 20.3381 20.5259 21.182 19.682C22.0259 18.8381 22.5 17.6935 22.5 16.5V7.5C22.5 6.30653 22.0259 5.16193 21.182 4.31802C20.3381 3.47411 19.1935 3 18 3C16.8065 3 15.6619 3.47411 14.818 4.31802C13.9741 5.16193 13.5 6.30653 13.5 7.5V16.5C13.5 17.6935 13.9741 18.8381 14.818 19.682C15.6619 20.5259 16.8065 21 18 21Z"
                fill="#262626"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.2502 21.0002H22.0652L21.6452 20.5952C22.5826 19.5062 23.2677 18.2234 23.6515 16.8386C24.0353 15.4539 24.1083 14.0014 23.8652 12.5852C23.1602 8.41521 19.6802 5.08521 15.4802 4.57521C14.0036 4.3884 12.5039 4.54186 11.0957 5.02384C9.6876 5.50582 8.40837 6.30353 7.35595 7.35595C6.30353 8.40837 5.50582 9.6876 5.02384 11.0957C4.54186 12.5039 4.3884 14.0036 4.57521 15.4802C5.08521 19.6802 8.41521 23.1602 12.5852 23.8652C14.0014 24.1083 15.4539 24.0353 16.8386 23.6515C18.2234 23.2677 19.5062 22.5826 20.5952 21.6452L21.0002 22.0652V23.2502L27.3752 29.6252C27.9902 30.2402 28.9952 30.2402 29.6102 29.6252C30.2252 29.0102 30.2252 28.0052 29.6102 27.3902L23.2502 21.0002ZM14.2502 21.0002C10.5152 21.0002 7.50021 17.9852 7.50021 14.2502C7.50021 10.5152 10.5152 7.50021 14.2502 7.50021C17.9852 7.50021 21.0002 10.5152 21.0002 14.2502C21.0002 17.9852 17.9852 21.0002 14.2502 21.0002Z"
                fill="#262626"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

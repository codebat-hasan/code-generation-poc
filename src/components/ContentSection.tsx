import React, { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div className={`content-section font-roboto ${className}`}>
      <div className="content-section__header text-[#262626] w-full rounded-t-lg border-b border-[#E5E5E5] px-5 py-5 text-2xl font-medium leading-none bg-white">
        {title}
      </div>
      <div className="content-section__content bg-[#F2F2F2] rounded-b-lg px-5 py-5 flex flex-col items-center">
        {children}
      </div>
    </div>
  );
};

import React, { ReactNode } from "react";
import DownloadApp from "../download-app/DownloadApp";

interface IProps {
  heading: string;
  subHeading?: string;
  children?: ReactNode;
}

const HeroSection: React.FC<IProps> = ({
  heading,
  subHeading,
  children,
}): JSX.Element => {
  return (
    <div className="p-6 md:px-16 md:py-12 bg-at-primary-50 text-at-gray-500 rounded-xl w-full mb-16 md:pr-72 ">
      <h1 className="text-at-5xl font-bold font-golos lg:text-at-7xl break-words">
        {heading}
      </h1>
      {subHeading && (
        <p className="text-sm font-normal font-dmSans text-at-gray-700 md:text-base mt-4 lg:text-lg">
          {subHeading}
        </p>
      )}
      {children}
    </div>
  );
};

export default HeroSection;

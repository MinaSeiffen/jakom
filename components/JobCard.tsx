"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  title: string;
  location: string;
  workType: string;
  locale:string
}

const JobCard = ({ title, location, workType , locale }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`lg:w-[639px] lg:h-[386px] rounded-[27.9px] lg:py-[57.65px] lg:px-[32.55px] max-lg:w-[301px] max-lg:h-[445px] max-lg:mx-auto max-lg:flex max-lg:flex-col shadow-custom-shadow-2 max-lg:mb-[24px] bg-[#FFFFFF] ${
        isHovered ? "bg-custom-gradient-3" : "bg-[#FFFFFF]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="lg:w-[574px] max-lg:w-[230px] max-lg:h-[286px] lg:h-[271px]">
        <div className="flex flex-col max-lg:mx-[35px] lg:w-full lg:h-[159.48px] gap-y-[21px] max-lg:w-[231px] max-lg:h-[286px] max-lg:mt-[43.73px] ">
          <div className="flex flex-col  max-lg:text-center lg:w-[274.72px] lg:h-[74.09px] gap-y-[12px]">
            <h1
              className={`lg:w-[370.13px] lg:h-[31px] font-sans font-bold text-[27.9px] leading-[30.69px] ${
                isHovered ? "text-white" : "text-[#404042]"
              }`}
            >
              {title}
            </h1>
            <p className={`lg:w-[287.34px] max-lg:w-[231px] lg:h-[31px] font-sans font-normal text-[18.6px] leading-[30.97px] ${
                isHovered ? "text-white" : "text-[#404042]"
              }`}
            >
              {location} |{" "}
              <span
                className={`${isHovered ? "text-white" : "text-[#1B75BB]"}`}
              >
                {workType}
              </span>
            </p>
          </div>
          <div className="flex-1">
            <p
              className={`font-sans font-normal text-[20.46px] leading-[32.2px] ${
                isHovered ? "text-white" : "text-[#404042]"
              }`}
            >
              {locale === 'ar' ? "إنها حقيقة مثبتة منذ زمن طويل أن ما يمكن قراءته سيلهي القارئ" : 'It is a long established fact that a reader will be distracted by the readable'}
            </p>
          </div>
        </div>
        <Button
          className={`lg:w-[156px] max-lg:w-[136px] font-sans lg:h-[51px] lg:mt-[60px] max-lg:mt-[20px] max-lg:mx-[76.5px] bg-custom-gradient-4 font-bold ${
            isHovered
              ? "bg-white text-[#404042]"
              : "bg-custom-gradient-4 text-white"
          } hover:bg-white`}
        >
          {locale === 'ar' ? 'قدم الان' : 'Apply Now'} 
        </Button>
      </div>
    </div>
  );
};

export default JobCard;

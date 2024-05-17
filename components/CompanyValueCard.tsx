"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  title: string;
  content: string;
  imgSrc: string;
  hoverImgSrc: string;
}

const CompanyValueCard = ({ title, content, imgSrc, hoverImgSrc }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lg:w-[561.74px] lg:h-[198.36px] shadow-custom-shadow-3 bg-[#F9F9F9] rounded-[25px] max-lg:w-[301px] max-lg:h-[378px] max-lg:mx-auto">
      <div className="flex flex-row max-lg:flex-col max-lg:mx-auto lg:mx-auto lg:w-[516.74px] lg:h-[133.5px] lg:gap-[33.34px] lg:my-[32px] max-lg:w-[247px] max-lg:h-[313.9px] max-lg:my-[32.5px]">
        <div
          className="lg:w-[107.51px] lg:h-[133.35px] bg-[#FFFFFF] shadow-custom-shadow-4 rounded-[19.17px] hover:bg-custom-gradient-1 max-lg:w-[107px] max-lg:h-[133.35px] max-lg:mx-auto max-lg:mb-[33.34px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={isHovered ? hoverImgSrc : imgSrc}
            alt="company values"
            width={41.7}
            height={59.25}
            className="mx-auto my-[37px]"
          />
        </div>
        <div className="lg:w-[375.89px] max-lg:w-[258px] my-[7.43px]">
          <h3 className="font-sans font-bold text-[24.45px] leading-[26.89px] text-[#404042] max-lg:text-center">
            {title}
          </h3>
          <p className="font-nunito font-normal leading-[27.99px] my-[7.5px] text-[#404042] max-lg:text-center text-[17.78px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyValueCard;

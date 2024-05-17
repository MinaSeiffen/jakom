"use client"

import CompanyValueCard from "@/components/CompanyValueCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const About = () => {
  const [isHovered , setIsHovered] = useState(false)
  return (
    <>
      <div className="flex flex-col mx-auto lg:w-[1200px] h-[1087px] mt-[103px] rounded-[42px]">
        <div className="flex flex-col mx-auto">
          <h1 className="font-sans font-extrabold text-[53.34px] justify-center text-[#404042] lg:w-[652.59px] max-lg:w-[310px] mx-auto leading-[58.67px] text-center">
            About our company
          </h1>
          <p className="font-sans font-normal w-[568px] text-center text-[22.23px] mx-auto mt-4 max-lg:w-[315px] max-lg:h-[140px] leading-[34.98px]">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper sed pharetra sene.
          </p>
        </div>
        <div className="w-full flex lg:flex-row gap-[42px]">
          <Image
            src="/images/about-2.svg"
            alt="about image"
            width={736}
            height={485}
            className="mt-[55px] max-lg:hidden"
          />
          <Image
            src="/images/mobile-size-about.svg"
            alt="about image"
            width={285}
            height={450}
            className="mt-[30px] max-lg:ml-[46px] lg:hidden"
          />
          <Image
            src="/images/about-1.svg"
            alt="about image"
            width={421.17}
            height={485.9}
            className="mt-[55px] max-lg:hidden"
          />
        </div>
        <div className="w-full flex max-lg:items-center lg:flex-row max-lg:flex-col max-lg:mt-[47px] lg:mt-[113px] gap-[52px]">
          <h1 className="text-[#404042] font-sans font-extrabold w-[317.8px] h-[54px] text-[48.9px] max-lg:text-center">
            What we do
          </h1>
          <p className="lg:w-[823px] max-lg:w-[306px] max-lg:h-[500px] lg:h-[280px] font-sans font-normal">
            {`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.`}
            <br />
            <br />
            {`Content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.`}
          </p>
        </div>
      </div>
      <div
        className={`w-fit relative border max-lg:items-center max-lg:text-center rounded-[41.67px] max-lg:w-[304px] lg:w-[1268px] lg:h-[265px] max-lg:h-[769px] mx-auto max-lg:top-[415px] lg:mt-[92px] max-lg:py-[5px] lg:py-[77px] lg:px-[55px] bg-[#F9F9F9] ${isHovered ? 'bg-custom-gradient-2' : 'border-[#F6F6F6]'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex lg:flex-row max-lg:flex-col w-fit lg:w-[1055px] max-lg:my-[64.5px] max-lg:w-[229px] max-lg:h-[640px] max-lg:gap-[60px] max-lg:mx-auto lg:h-[110px] gap-[112.5px] mx-auto">
          <div className="lg:-left-[29px] relative w-fit lg:w-[208px] max-lg:text-center lg:h-[110px]">
            <h1 className={`font-extrabold font-sans text-[62px]  text-center max-lg:leading-[68.76px] ${isHovered ? 'text-white' : 'text-[#404042]'}`}>
              100<span className={`${isHovered ? 'text-[#D91C5C]' : 'text-[#404042]'}`}>M</span>
            </h1>
            
            <p className={`font-sans font-bold text-[#A9A9A9] text-[22.23px] max-lg:leading-[34.98px] w-[236px] ${isHovered ? 'text-white' : 'text-[#404042]'}`}>
              Client Satisfaction
            </p>
          </div>
          <div className="w-fit lg:-left-[29px] relative lg:w-[234px] lg:h-[110px]">
            <h1 className={`font-extrabold font-sans text-[62px]  text-center max-lg:leading-[68.76px] ${isHovered ? 'text-white' : 'text-[#404042]'}`}>
              24<span className={`${isHovered ? 'text-[#D91C5C]' : 'text-[#404042]'}`}>h</span>
            </h1>
            <p className={`font-sans font-bold text-[#A9A9A9] text-[22.23px] max-lg:leading-[34.98px] w-[236px] ${isHovered ? 'text-white' : 'text-[#404042]'}`}>
              Expert Support Team
            </p>
          </div>
          <div className="w-fit lg:-left-[29px] relative lg:w-[152px] max-lg:w-[168px] max-lg:ml-[30.5px] text-center lg:h-[110px]">
            <h1 className={`font-extrabold font-sans max-lg:w-[168px] text-[62px] max-lg:leading-[68.76px] ${isHovered ? 'text-white' : 'text-[#404042]'}`}>
              98<span className={`${isHovered ? 'text-[#D91C5C]' : 'text-[#404042]'}`} >k+</span>
            </h1>
            <p className={`font-sans font-bold text-[#A9A9A9] text-[22.23px] max-lg:leading-[34.98px] w-[136px] ${isHovered ? 'text-white' : 'text-[#404042]'}`}>
              Sales Count
            </p>
          </div>
          <div className="w-fit lg:-left-[29px] relative lg:w-[191px] lg:h-[110px]">
            <h1 className={`font-extrabold max-lg:leading-[68.76px] font-sans text-[62px]  text-center ${isHovered ? 'text-white' : 'text-[#404042]'}`}>
              208<span className={`${isHovered ? 'text-[#D91C5C]' : 'text-[#404042]'}`}>+</span>
            </h1>
            <p className={`font-sans font-bold text-[#A9A9A9] text-[22.23px] max-lg:leading-[34.98px] w-[191px] ${isHovered ? 'text-white' : 'text-[#404042]'}`}>
              Client Worldwide
            </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-[120.13px] max-lg:my-[59px] bg-[#EEF4FF] lg:w-full lg:h-[686px] flex flex-col max-lg:relative max-lg:top-[415px] max-lg:h-[802px] max-lg:w-full">
        <div className="flex lg:flex-row max-2xl:mx-auto max-lg:flex-col gap-[266.56px] ">
          <div className="lg:w-[585.3px] max-lg:text-center h-[215.67px] lg:mt-[191px] max-lg:mx-[37.5px] 2xl:ml-[362.1px] max-lg:w-[304px] max-lg:mt-[70px] max-lg:z-50">
            <h1 className="text-[#404042] font-extrabold text-[48.9px] leading-[53px] ">
              Our Mission
            </h1>
            <p className="font-sans font-normal text-[22.23px] leading-[34.98px] lg:mt-[21.67px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing Pharetra Ld eu
              aliquet diam lorem viverra at justo. Nulla odio nequefjf gravida
              in pharetra egestas. Ac id sagittis at morbi interdum nibh diam
              sagittis et.
            </p>
          </div>
          <Image
            src="/images/pana.svg"
            alt="our mission"
            width={391.08}
            height={335.12}
            className="lg:mt-[131px] max-lg:w-[199.9px] max-lg:h-[165px] max-lg:mx-auto max-lg:z-0 max-lg:-mt-[225px] max-lg:mb-[170px]"
          />
        </div>
        <div className="w-[233.37] mx-auto lg:mt-[105px]">
          <Button className="bg-custom-gradient max-lg:w-[233px] max-lg:h-[55px] lg:px-[69px] lg:py-[14px] max-lg:relative">
            Our Values
          </Button>
        </div>
      </div>
      <div className="lg:mt-[90px] lg:w-[1199.67px] h-[663.7px] mx-auto rounded-[25px] flex flex-col max-lg:relative max-lg:top-[392px]">
        <div className="mx-auto max-lg:w-[246px] max-lg:h-[324px] max-lg:mb-[432px]">
          <h1 className="font-extrabold font-sans text-[48.9px] text-[#404042] lg:w-[709px] lg:h-[108px]  leading-[53px] text-center">
            The story and values behind our company
          </h1>
        </div>
        <div className="w-full flex flex-wrap lg:mt-[116.47px] lg:pb-[177.3px] max-lg:pb-[95.5px] lg:gap-x-[76.12px] max-lg:gap-y-[16.8px] lg:gap-y-[42.51px] max-lg:w-[310px] max-lg:mx-auto">
          <CompanyValueCard
            title="Innovation"
            content="Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
            imgSrc="./images/lamp.svg"
            hoverImgSrc="./images/hover-lamp.svg"
          />
          <CompanyValueCard
            title="Team work"
            content="Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
            imgSrc="./images/person.svg"
            hoverImgSrc="./images/hover-person.svg"
          />
          <CompanyValueCard
            title="Excellence"
            content="Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
            imgSrc="./images/achievement.svg"
            hoverImgSrc="./images/hover-achievement.svg"
          />
          <CompanyValueCard
            title="Responsibility"
            content="Long established fact that a readeed to will be distracted by the readable content of a page when looking at its layout"
            imgSrc="./images/docs.svg"
            hoverImgSrc="./images/hover-docs.svg"
          />
        </div>
      </div>
    </>
  );
};

export default About;

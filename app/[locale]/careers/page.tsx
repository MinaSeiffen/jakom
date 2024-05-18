import CareerValueCard from "@/components/CareerValueCard";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Careers = () => {
  return (
    <>
      <div className="lg:w-full lg:h-[900px] bg-radial-gradient max-lg:w-[375px] max-lg:h-[861px]">
        <h1 className="font-extrabold font-sans text-[48px] leading-[29.06px] lg:w-[191px] lg:h-[30px] text-[#404042] lg:relative lg:top-[320px] 2xl:left-[310px] xl:left-[70px] max-lg:pt-[147px] max-lg:pb-[51px] max-lg:text-[53.34px] max-lg:leading-[58.67px] max-lg:text-center ">
          Careers
        </h1>
        <p className="lg:relative 2xl:left-[310px] xl:left-[70px] lg:top-[298px] leading-[31.48px] text-[20px] font-normal font-sans lg:w-[745px] lg:h-[93px] lg:mt-[60px] max-lg:w-[299px] max-lg:h-[217px] max-lg:text-center max-lg:mx-auto">
          {`Lorem ipsum dolor sit amet consectetur adipiscing elit`}
          <br />
          {`interdum ullamcorper sed pharetra sene. Lorem ipsum dolor sit amet`}
          {`consectetur adipiscing elit interdum ullamcorper sed pharetra sene.`}
        </p>
        <Image
          src="/images/career.svg"
          alt="career"
          width={381.32}
          height={313.01}
          className="lg:absolute lg:top-[293px] xl:left-[907px] 2xl:left-[1208.69px] max-lg:w-[201px] max-lg:h-[178.59px] max-lg:mx-auto max-lg:mt-[36px] max-lg:mb-[40px]"
        />
        <Button className="bg-custom-gradient w-[309px] h-[70px] rounded-[7px] lg:py-[25px] lg:px-[54px] absolute lg:top-[512px] 2xl:left-[310px] xl:left-[70px] text-center font-sans font-semibold text-[18px] leading-[20px] max-lg:left-[35px]">
          Browse Open Positions
        </Button>
      </div>
      <div className="lg:mt-[123px] lg:mx-auto max-lg:mt-[90px]">
        <div className="lg:w-[1398px] lg:h-[1049px] flex lg:flex-col lg:gap-y-[38px] mx-auto max-lg:flex-col">
          <div className="flex flex-col max-lg:w-[375px] max-lg:h-[216px] mx-auto lg:w-[516px] lg:h-[161px] lg:gap-y-[31px]">
            <Button className="bg-custom-gradient mx-auto w-[165px] h-[75px] max-lg:mb-[31px] px-[54px] py-[25px] rounded-[7px] font-nunito text-[18px] lg:leading-[24.55px] text-white">
              Values
            </Button>
            <h2 className="lg:w-[546px] max-lg:w-[355px] lg:h-[55px] max-lg:h-[110px] font-sans font-extrabold text-[50px] leading-[55px] text-center mx-auto lg:-ml-[15px]">
              Values that define us
            </h2>
          </div>
          <div className="lg:w-full lg:h-[850px] lg:flex-wrap lg:flex lg:gap-[10px] max-lg:mx-auto max-lg:mt-[52px] max-lg:w-[375px]">
            <CareerValueCard
              imgSrc="/images/career-value-1.svg"
              title="Patients come first"
            />
            <CareerValueCard
              imgSrc="/images/career-value-2.svg"
              title="Competitive salary"
            />
            <CareerValueCard
              imgSrc="/images/career-value-3.svg"
              title="Career growth"
            />
            <CareerValueCard
              imgSrc="/images/career-value-4.svg"
              title="Holidays & Parental"
            />
            <CareerValueCard
              imgSrc="/images/career-value-5.svg"
              title="Flexible hours"
            />
            <CareerValueCard
              imgSrc="/images/career-value-6.svg"
              title="Medical insurance"
            />
          </div>
        </div>
      </div>
      <div className="lg:mt-[122px] max-lg:mt-[42px] max-lg:w-[262px] max-lg:h-[159px] lg:w-[658px] mx-auto">
        <h1 className="lg:h-[53px] max-lg:w-[262px] font-sans font-extrabold text-[48px] leading-[52.8px] text-center text-[#242331]">
          Current job open positions
        </h1>
      </div>
      <div className="flex mx-auto lg:flex-wrap max-lg:flex-col max-lg:w-[370px] max-lg:mt-[52px] lg:w-[1300px] lg:h-[1240px] lg:mt-[73px] lg:gap-x-[11px] lg:gap-[40px] lg:mb-[162px] max-lg:mb-[132px]">
        <JobCard
          title="Web Designer & Developer"
          location="Cairo, Egypt"
          workType="Part Time"
        />
        <JobCard
          title="Front-end developer"
          location="Qatar"
          workType="Part Time"
        />
        <JobCard
          title="SEO Specialist"
          location="Dubai UAE"
          workType="Full Time"
        />
        <JobCard
          title="UI / UX Designer"
          location="Cairo, Egypt"
          workType="Full Time"
        />
        <JobCard
          title="Backend Developer"
          location="San Francisco, CA"
          workType="Part Time"
        />
        <JobCard
          title="Condent Wrtiter"
          location="London, England"
          workType="Part Time"
        />
      </div>
    </>
  );
};

export default Careers;

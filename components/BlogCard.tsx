import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
    title: string;
    imgSrc: string;
}

const BlogCard = ({title , imgSrc}: Props) => {
  return (
    <>
      <div className="lg:w-[680px] lg:h-[817px] rounded-[50px] lg:p-[41px] bg-[#F9F9F9] ">
        <div className="lg:w-[597px] lg:h-[338px] flex flex-col lg:gap-[46px] ">
          <div className="lg:w-[597px] lg:h-[338px] ">
            <Image
              src={imgSrc}
              alt="blog image"
              width={597}
              height={338}
              className="z-0"
            />
            <div className="lg:relative lg:-top-[75px] z-30 lg:w-[344px] lg:h-[55px] lg:ml-[19px] flex lg:flex-row lg:gap-[10px] ">
              <Button className="lg:w-[167px] lg:h-[55px] rounded-[7px] lg:py-[15px] lg:px-[41px] bg-[#FFFFFF] hover:bg-white font-nunito font-bold text-[#242331] text-[18px] leading-[24.55px] ">
                Marketing
              </Button>
              <Button className="lg:w-[167px] lg:h-[55px] rounded-[7px] lg:py-[15px] lg:px-[41px] bg-[#FFFFFF] hover:bg-white font-nunito font-bold text-[#242331] text-[18px] leading-[24.55px] ">
                Analysis
              </Button>
            </div>
          </div>
          <div className="lg:w-[597px] lg:h-[380px] flex flex-col lg:gap-[18px] ">
            <div className="lg:w-[593px] lg:h-[190px] flex flex-col lg:gap-[18px] ">
                <p className="lg:w-[165px] lg:h-[28px] font-sans font-normal lg:text-[18px] leading-[28.33px] text-[#404042] ">
                November 15, 2022
                </p>
                <h1 className="lg:w-[593px] lg:h-[148px] font-sans font-extrabold text-[40px] text-[#404042] leading-[49.2px] ">
                {title}
                </h1>
            </div>
            <div className="lg:w-[592px] lg:h-[168px] flex flex-col lg:gap-[38px] ">
                <p className="lg:w-[592px] lg:h-[105px] font-sans font-normal text-[22px] leading-[34.63px] text-[#404042] ">
                It is a long established fact that a reader will be distracted by the readable content of a page from when looking at it layout. The point of using Lorem Ipsum
                </p>
                <Link href='/' className="lg:w-[95px] lg:h-[25px] font-nunito font-bold text-[18px] leading-[24.55px] text-[#242331] underline hover:text-[#5236FF] " >
                    Read More
                </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;

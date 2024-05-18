import Image from "next/image";
import React from "react";

interface Props {
  imgSrc: string;
  title: string;
}

const CareerValueCard = ({ imgSrc, title }: Props) => {
  return (
    <div className="lg:w-[452px] mx-auto max-lg:mb-[30px] max-lg:w-[301px] max-lg:h-[474px] lg:h-[415px] rounded-[40px] border py-[52px] px-[51px] bg-[#FFFFFF] border-[#F6F6F6] lg:mx-auto shadow-custom-shadow-1">
      <div className="flex flex-col max-lg:gap-y-[38px] lg:gap-y-[38px] max-lg:w-[205px] max-lg:h-[370px] max-lg:mx-auto">
        <div className="bg-custom-gradient w-[116px] h-[116px] rounded-[30px] max-lg:mx-auto">
          <Image
            src={imgSrc}
            alt="career"
            width={49}
            height={58}
            className="mx-auto my-[29px]"
          />
        </div>
        <div className="lg:w-[350px] lg:h-[157px] max-lg:w-[214px] max-lg:h-[116px] flex flex-col max-lg:text-center max-lg:gap-y-[10px] lg:gap-y-[19px]">
          <h1 className="lg:w-[290px] lg:h-[33px] text-[30px] font-bold font-nunito leading-[33px] text-[#242331]">
            {title}
          </h1>
          <p className="lg:w-[350px] lg:h-[105px] font-nunito font-normal text-[22px] leading-[34.63px] text-[#797979]">
          Contrary to popular belief, Ipsum is not simply random text. It has roots in a piece.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerValueCard;

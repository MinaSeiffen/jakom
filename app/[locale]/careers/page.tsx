'use client'

import { initTranslations } from "@/app/i18n";
import CareerValueCard from "@/components/CareerValueCard";
import JobCard from "@/components/JobCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Params = {
  locale: string;
};

type Props = {
  params: Params;
};

const Careers: React.FC<Props> = ({ params: {locale}}) => {
  const [t, setT] = useState<(key: string) => string>(() => (key:any) => key)
  useEffect(() => {
    const init = async () => {
      const { t } = await initTranslations({ locale, namespaces: ['careers'] });
      setT(() => t);
    };

    init();
  }, [locale]);
  return (
    <>
      <div className="lg:w-full lg:h-[900px] bg-radial-gradient max-lg:w-[375px] max-lg:h-[861px]" dir={locale === 'ar' ? 'rtl' : ''}>
        <h1 className={`font-extrabold font-sans text-[48px] leading-[29.06px] lg:w-[191px] lg:h-[30px] text-[#404042] lg:relative lg:top-[320px] max-lg:pt-[147px] max-lg:pb-[51px] max-lg:text-[53.34px] max-lg:leading-[58.67px] max-lg:text-center ${locale === 'ar' ? '2xl:-left-[310px] xl:-left-[70px]' : '2xl:left-[310px] xl:left-[70px]'} `}>
          {t('header')}
        </h1>
        <p className={`lg:relative lg:top-[298px] leading-[31.48px] text-[20px] font-normal font-sans lg:w-[745px] lg:h-[93px] lg:mt-[60px] max-lg:w-[299px] max-lg:h-[217px] max-lg:text-center max-lg:mx-auto ${locale === 'ar' ? '2xl:-left-[310px] xl:-left-[70px]' : '2xl:left-[310px] xl:left-[70px]'}`} >
          {t('career-1')}
          <br />
          {t('career-2')}
          <br/>
          {t('career-3')}
        </p>
        <Image
          src={locale === 'ar' ? '/ar/images/career-ar.svg' : "/images/career.svg" }
          alt="career"
          width={381.32}
          height={313.01}
          className={`lg:absolute lg:top-[293px] max-lg:w-[201px] max-lg:h-[178.59px] max-lg:mx-auto max-lg:mt-[36px] max-lg:mb-[40px] ${locale === 'ar' ? '2xl:left-[310px] xl:left-[70px]' : 'xl:left-[907px] 2xl:left-[1208.69px]'}`}
        />
        <Button className={`bg-custom-gradient w-[309px] h-[70px] rounded-[7px] lg:py-[25px] lg:px-[54px] absolute lg:top-[512px] text-center font-sans font-semibold text-[18px] leading-[20px] max-lg:left-[35px] ${locale === 'ar' ? '2xl:left-[1290px] xl:left-[70px]' : '2xl:left-[310px] xl:left-[70px]'}`}>
          {t('hero-btn')}
        </Button>
      </div>
      <div className="lg:mt-[123px] lg:mx-auto max-lg:mt-[90px]" dir={locale === 'ar' ? 'rtl' : ''}>
        <div className="lg:w-[1398px] lg:h-[1049px] flex lg:flex-col lg:gap-y-[38px] mx-auto max-lg:flex-col">
          <div className="flex flex-col max-lg:w-[375px] max-lg:h-[216px] mx-auto lg:w-[516px] lg:h-[161px] lg:gap-y-[31px]">
            <Button className="bg-custom-gradient mx-auto w-[165px] h-[75px] max-lg:mb-[31px] px-[54px] py-[25px] rounded-[7px] font-nunito text-[18px] lg:leading-[24.55px] text-white">
              {t('value')}
            </Button>
            <h2 className="lg:w-[546px] max-lg:w-[355px] lg:h-[55px] max-lg:h-[110px] font-sans font-extrabold text-[50px] leading-[55px] text-center mx-auto lg:-ml-[15px]">
              {t('values-define')}
            </h2>
          </div>
          <div className="lg:w-full lg:h-[850px] lg:flex-wrap lg:flex lg:gap-[10px] max-lg:mx-auto max-lg:mt-[52px] max-lg:w-[375px]">
            <CareerValueCard
              imgSrc="/images/career-value-1.svg"
              title={t('title-1')}
              locale={locale}
            />
            <CareerValueCard
              imgSrc="/images/career-value-2.svg"
              title={t('title-2')}
              locale={locale}
            />
            <CareerValueCard
              imgSrc="/images/career-value-3.svg"
              title={t('title-3')}
              locale={locale}
            />
            <CareerValueCard
              imgSrc="/images/career-value-4.svg"
              title={t('title-4')}
              locale={locale}
            />
            <CareerValueCard
              imgSrc="/images/career-value-5.svg"
              title={t('title-5')}
              locale={locale}
            />
            <CareerValueCard
              imgSrc="/images/career-value-6.svg"
              title={t('title-6')}
              locale={locale}
            />
          </div>
        </div>
      </div>
      <div className="lg:mt-[122px] max-lg:mt-[42px] max-lg:w-[262px] max-lg:h-[159px] lg:w-[658px] mx-auto" dir={locale === 'ar' ? 'rtl' : ''} >
        <h1 className="lg:h-[53px] max-lg:w-[262px] font-sans font-extrabold text-[48px] leading-[52.8px] text-center text-[#242331]">
          {t('jobs')}
        </h1>
      </div>
      <div className="flex mx-auto lg:flex-wrap max-lg:flex-col max-lg:w-[370px] max-lg:mt-[52px] lg:w-[1300px] lg:h-[1240px] lg:mt-[73px] lg:gap-x-[21px] lg:gap-[40px] lg:mb-[162px] max-lg:mb-[132px]" dir={locale === 'ar' ? 'rtl' : ''} >
        <JobCard
          title={t('jop-title-1')}
          location={t('location-1')}
          workType={t('part-time')}
          locale={locale}
        />
        <JobCard
          title={t('jop-title-2')}
          location={t('location-2')}
          workType={t('part-time')}
          locale={locale}
        />
        <JobCard
          title={t('jop-title-3')}
          location={t('location-3')}
          workType={t('full-time')}
          locale={locale}
        />
        <JobCard
          title={t('jop-title-4')}
          location={t('location-1')}
          workType={t('full-time')}
          locale={locale}
        />
        <JobCard
          title={t('jop-title-5')}
          location={t('location-4')}
          workType={t('part-time')}
          locale={locale}
        />
        <JobCard
          title={t('jop-title-6')}
          location={t('location-5')}
          workType={t('part-time')}
          locale={locale}
        />
      </div>
    </>
  );
};

export default Careers;

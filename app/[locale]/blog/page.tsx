import BlogCard from '@/components/BlogCard'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return ( <>
    <div className='lg:w-full lg:h-[900px] bg-radial-gradient'>
        <div className='lg:w-[1300px] lg:relative lg:top-[265px] lg:h-[315px] lg:mx-auto flex lg:flex-row lg:gap-x-[202px]'>
            <div className='lg:w-[606px] lg:my-[72px] lg:justify-center lg:h-[171px] flex lg:flex-col lg:gap-[40px]'>
                <h1 className='font-sans lg:w-[597px] lg:h-[53px] lg:leading-[52.8px] font-extrabold text-[48px] text-[#404042] '>
                News & Articles
                </h1>
                <p className='lg:w-[606px] lg:h-[78px] font-normal font-nunito text-[25px] leading-[39.35px] text-[#404042] '>
                {`Lorem ipsum dolor sit amet consectetur adipiscing elit`} 
                <br />
                {`interdum ullamcorper sed pharetra sene.`}
                </p>
            </div>
            <div className=''>
                <Image src='/images/blog.svg' alt='blog' width={453} height={315} />
            </div>
        </div>
    </div>
    <div className='lg:mt-[119px] lg:w-[1400px] lg:h-[2531px] lg:mx-auto lg:gap-[40px] flex flex-wrap lg:mb-[188px] '>
        <BlogCard title='10 Top tips for making your Saas product sticky' imgSrc='/images/blog-1.svg' />
        <BlogCard title='How to identify growth KPIs that are relevant' imgSrc='/images/blog-2.svg' />
        <BlogCard title='Is it worth it to build a mobile app for your business?' imgSrc='/images/blog-3.svg' />
        <BlogCard title='How to choose the right app reseller program' imgSrc='/images/blog-4.svg' />
        <BlogCard title='10 Top tips for making your Saas product sticky' imgSrc='/images/blog-5.svg' />
        <BlogCard title='5 Technologies that are true student helpers these days' imgSrc='/images/blog-6.svg' />
    </div>
  </>
  )
}

export default Blog
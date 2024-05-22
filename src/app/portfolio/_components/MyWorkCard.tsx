'use client'

import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import 'swiper/css/thumbs';
import './index.css';

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';
import { IWorksProps } from './data-my-work';
import Link from 'next/link';
import Image from 'next/image';

const MyWorkCard: React.FC<{ data: IWorksProps }> = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <div className=''>
        <div className='p-3 bg-yellow-50 rounded-md shadow-lg '>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={2000}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mySwiper2  md:h-[300px] "
          >
            {props.data?.images?.map(i => <SwiperSlide key={i.id}>
    
              <Image src={i.srcImg} height="300" width="400" alt={''}className='md:min-h-[195px]'/>
            </SwiperSlide>)}

          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={2000}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mySwiper"
          >
            {props.data?.images?.map(i => <SwiperSlide key={i.id}>
              <Image src={i.srcImg} height="300" width="400" alt={''}/>
            </SwiperSlide>)}
          </Swiper >
        </div>
        <div className='flex flex-col  mt-6'>
          <div className=' flex items-center gap-2'>
            <span className='font-bold text-2xl '>
              {props?.data?.title}
            </span>
            <Link href={props.data?.link} target='_blank'>
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd" clip-rule="evenodd" fill='#414141' >
                  <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                </svg>
            </Link>
          </div>
          <p className='text-base text-gray-700 my-3'>
            {props?.data?.description}
          </p>
          <div className="flex gap-4 flex-wrap ">
            {props.data?.technoUsed?.map(s =>
              <div className="p-2 bg-black text-white rounded hover:bg-white hover:text-black"
                key={s.id}>{s.techno} </div>)

            }

          </div>


        </div>
      </div >
    </>
  );
}
export default MyWorkCard;

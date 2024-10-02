"use client";

import Image from 'next/image';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type args = {
    setCurrentSlide: (slide: number) => void;
};

const RecipeSwiper = ({ setCurrentSlide }:args) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            centeredSlides={true}
            onSlideChange={(swiper) => { setCurrentSlide(swiper.activeIndex); }}
            // onSwiper={(swiper) => console.log(swiper)}
            className="recipe-swiper mt-6"
        >
            <SwiperSlide>
                <article className="w-full rounded-xl overflow-hidden">
                    <figure className='w-full'>
                        <Image src="/assets/cont/recipe-slider/bhindi-popcorn.webp" className='inline-block w-full' alt="Bhindi Popcorn" width={200} height={200} />
                    </figure>
                    <footer className="bg-[#F5ECDB] px-4 py-2 h-[100px] border-1 border-[#F5C413] relative">
                        <Link target='_blank' href="https://alpha-dev.reciplay.in/infolor/66f97a2d4dd4beb9397e28c8" passHref={true} className='flex items-center justify-center absolute right-[24px] top-0 w-[82px] h-[82px] bg-[#DE503C] border-2 border-black rounded-full rounded-ufll mt-[-41px] text-white font-bold text-center leading-[1.2em] cursor-pointer'>LET&apos;S<br />BEGIN</Link>
                        <h2 className="font-bold text-xl">Bhindi Popcorn</h2>
                        <div className="flex items-center mt-1">
                            <div className='w-[35px] h-[30px] rounded-full overflow-hidden'>
                                <Image src="/assets/cont/recipe-slider/khursheed-alam.webp" alt="Chef : Khursheed Alam" className="inline-block" width={35} height={35} />
                            </div>
                            <p className="text-sm ml-2 font-semibold">By Khursheed Alam</p>
                        </div>
                    </footer>
                </article>
            </SwiperSlide>
            <SwiperSlide>
                <article className="w-full rounded-xl overflow-hidden">
                    <figure className='w-full'>
                        <Image src="/assets/cont/recipe-slider/dahi-bhalla.webp" className='inline-block w-full' alt="Dahi Bhalla" width={200} height={200} />
                    </figure>
                    <footer className="bg-[#F5ECDB] px-4 py-2 h-[100px] border-1 border-[#F5C413] relative">
                        <div className='flex items-center justify-center absolute right-[24px] top-0 w-[82px] h-[82px] bg-[#6D50E8] rounded-full rounded-ufll mt-[-41px] text-white font-bold text-center leading-[1.2em]'>Coming<br />Soon</div>
                        <h2 className="font-bold text-xl">Dahi Bhalla</h2>
                        <div className="flex items-center mt-1">
                            <div className='w-[35px] h-[30px] rounded-full overflow-hidden'>
                                <Image src="/assets/cont/recipe-slider/khursheed-alam.webp" alt="Chef : Khursheed Alam" className="inline-block" width={35} height={35} />
                            </div>
                            <p className="text-sm ml-2 font-semibold">By Khursheed Alam</p>
                        </div>
                    </footer>
                </article>
            </SwiperSlide>
        </Swiper>
    );
}

export default RecipeSwiper;

'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

// import picture 
import payInCash from '../../../public/intro-pay-cash.png'
import emi from '../../../public/emi-lg.jpg'
import app from '../../../public/goz-app.jpg'
import hotel from '../../../public/homepage-lg-int-hotel.png'
import Image from "next/image";
import Link from "next/link";
const OfferSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"                
            >
                <SwiperSlide>
                    <Image src={payInCash} alt="img" height={500} width={500} />
                    <Link href={'/'} className="px-4 py-2 bg-white drop-shadow-2xl">Learn More</Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={emi} alt="img" height={500} width={500} />
                    <Link href={'/'} className="px-4 py-2 bg-white drop-shadow-2xl">Learn More</Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={app} alt="img" height={500} width={500} />
                    <Link href={'/'} className="px-4 py-2 bg-white drop-shadow-2xl">Download</Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={hotel} alt="img" height={500} width={500} />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default OfferSlider;
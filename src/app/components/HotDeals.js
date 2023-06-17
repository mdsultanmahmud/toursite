
'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/swiper-bundle.css';

// import required modules
import { Navigation } from "swiper";
//linking style and image
import commonStyle from '../styles/common.module.css'
import styles from '../styles/hotdeal.module.css'
import Image from "next/image";
import Link from "next/link";

// import img here 
import flightOne from '../../../public/hotDealsImg/campaign_AMEX1823.jpg'
import flighTwo from '../../../public/hotDealsImg/campaign_DOMB0423.jpg'
import flightThree from '../../../public/hotDealsImg/campaign_EDOM0623.jpg'
import percent from '../../../public/hotDealsImg/parcent.svg'
//icon
import { BsArrowUpRight } from 'react-icons/bs'
const HotDeals = () => {
    const allData = [
        {
            title: " On Int’l Flight Bookings",
            cat: "flight",
            img: flightOne,
            description: "On base fare, for City Bank American Express® Platinum & Gold credit cards. Till 31 Dec’23",
            token: "AMEX1823"
        },
        {
            title: "On Flight Bookings",
            cat: "flight",
            img: flighTwo,
            description: "On base fare, for bKash payment. Till 30 Jun’23.",
            token: "DOMB0423"
        },
        {
            title: "On Domestic Flight Bookings.",
            cat: "flight",
            img: flightThree,
            description: "On base fare, for EBL Visa credit & debit cards. Till 30 Jun‘23",
            token: "EDOM0623"
        },
    ]
    return (
        <div className='my-12'>
            <div className={commonStyle.hotDealsCon}>
                {/* filtering section  */}
                <div className={`flex flex-col md:flex-row gap-y-5 md:gap-y-0 md:items-center justify-between ${styles.serchingElement}`}>
                    <h1>Hot Deals</h1>
                    <div className='flex items-center gap-x-5'>
                        <button className='drop-shadow-2xl'>All</button>
                        <button className='drop-shadow-2xl'>Flight</button>
                        <button className='drop-shadow-2xl'>Hotel</button>
                        <button className='drop-shadow-2xl'>Tour</button>
                        <button className='drop-shadow-2xl'>Others</button>
                    </div>
                </div>

                {/* slider section with hot deals elementn */}
                <Swiper
                    // slidesPerView={2}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        // For small devices like mobile phones
                        480: {
                          slidesPerView: 1,
                        },
                        // For tablets
                        768: {
                          slidesPerView: 2,
                        },
                       
                      }}
                >
                    {
                        allData.map((data, index) => {
                            const { title, img, description, token } = data
                            return <SwiperSlide key={index}>
                                <div className={`${styles.slider} drop-shadow-2xl`}>
                                    <Image className={styles.sliderImg} src={img} alt="img" height={120} width={160} />
                                    <div>
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                    </div>
                                    <h3> <Image src={percent} alt="img" height={26} width={21} /> <span>{token}</span></h3>
                                    <button>
                                        <BsArrowUpRight />
                                        <span>Learn More</span>
                                    </button>
                                </div>

                            </SwiperSlide>

                        })
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default HotDeals;
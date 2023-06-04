
// required link for the swipper 
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
// import image here 
import pupOne from '../../../public/popularHotel/saymonResort.jpg'
import pupTwo from '../../../public/popularHotel/sarahResort.webp'
import pupThree from '../../../public/popularHotel/spa.webp'
import pupFour from '../../../public/popularHotel/coxToday.webp'
import Image from 'next/image';

// import css file 
import styles from '../styles/popular.module.css'
import commonStyle from '../styles/common.module.css'
const PopularTour = ({search}) => {
  // make data for popular hotel 
  const popularHotel = [
    {
        name: "Sayeman Beach Resort",
        img: pupOne
    },
    {
        name: "Sarah Resort",
        img: pupTwo
    },
    {
        name: "Bhawal Resort & Spa",
        img: pupThree
    },
    {
        name: "Hotel The Cox Today",
        img: pupFour
    },

    // copy it again 
    {
        name: "Sayeman Beach Resort",
        img: pupOne
    },
    {
        name: "Sarah Resort",
        img: pupTwo
    },
    {
        name: "Bhawal Resort & Spa",
        img: pupThree
    },
    {
        name: "Hotel The Cox Today",
        img: pupFour
    },
]
return (
    <div className={`my-12 ${search == 'tour' ? 'block' : 'hidden'}`}>
        <div className={`${commonStyle.container}`}>
            <h1 className={`${commonStyle.title}`}>Popular Tour</h1>
            {/* popular hotel  */}
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        popularHotel.map((hotel, index) => {
                            const { name, img, place } = hotel
                            return <SwiperSlide key={index}>
                                <div className={` drop-shadow-2xl ${styles.slider}`}>
                                    <Image className={`${styles.sliderImg}`} src={img} alt="img" height={266} width={200} />
                                    <div className={`${styles.sliderContent}`}>
                                        <h2>{name}</h2>
                                    </div>
                                </div>

                            </SwiperSlide>

                        })
                    }

                </Swiper>
            </div>
        </div>
    </div>
);
};

export default PopularTour;
import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import commonStyles from '../styles/common.module.css'
import bannerStyle from '../styles/banner.module.css'
import styles from '../styles/hotel.module.css'
import Image from 'next/image';
import wOne from '../../../public/flight/w-1.svg'
import wTwo from '../../../public/flight/w-2.svg'
import wThree from '../../../public/flight/w-3.svg'
import wFour from '../../../public/flight/w-4.svg'
import tourOne from '../../../public/tour/tourOne.jpg'
import tourTwo from '../../../public/tour/tourTwo.png'
import attraction from '../../../public/tour/attraction.svg'
import activity from '../../../public/tour/activity.svg'
import sightness from '../../../public/tour/sightness.svg'
import dayout from '../../../public/tour/dayout.svg'
import adventure from '../../../public/tour/adventure.svg'
import TourCard from '../components/TourCard';
const Tour = () => {
    const places = [
        {
            name: 'Aquaholic Tourist Caravan',
            location: "Cox's Bazar",
            prevRate: 2099,
            currentRate: 1995,
            discount: 5,
            f1: "9 hours",
            f2: "From 1 to 48 people",
            f3: "Free cancellation up to twenty-four (24) hours before the start of the tour.",
            img: tourOne,
            option1: "Sightseeing",
            option2: "Day Tour",
            option3: "Marine drive",
        },
        {
            name: 'Parasailing at FunFest Beach',
            location: " Kakra Beach, Marine Drive, Cox's Bazar",
            prevRate: 1840,
            currentRate: 1748,
            discount: 5,
            f1: "7 minuts",
            f2: "From 1 to 50 people",
            f3: "Booking can be cancelled anytime.",
            img: tourTwo,
            option1: "Adventure",
            option2: "Outdoor Activities",
            option3: "Marine drive",
        },
        {
            name: 'Aquaholic Tourist Caravan',
            location: "Cox's Bazar",
            prevRate: 2099,
            currentRate: 1995,
            discount: 5,
            f1: "9 hours",
            f2: "From 1 to 48 people",
            f3: "Free cancellation up to twenty-four (24) hours before the start of the tour.",
            img: tourOne,
            option1: "Sightseeing",
            option2: "Day Tour",
            option3: "Marine drive",
        },
        {
            name: 'Parasailing at FunFest Beach',
            location: " Kakra Beach, Marine Drive, Cox's Bazar",
            prevRate: 1840,
            currentRate: 1748,
            discount: 5,
            f1: "7 minuts",
            f2: "From 1 to 50 people",
            f3: "Booking can be cancelled anytime.",
            img: tourTwo,
            option1: "Adventure",
            option2: "Outdoor Activities",
            option3: "Marine drive",
        },
        {
            name: 'Aquaholic Tourist Caravan',
            location: "Cox's Bazar",
            prevRate: 2099,
            currentRate: 1995,
            discount: 5,
            f1: "9 hours",
            f2: "From 1 to 48 people",
            f3: "Free cancellation up to twenty-four (24) hours before the start of the tour.",
            img: tourOne,
            option1: "Sightseeing",
            option2: "Day Tour",
            option3: "Marine drive",
        },
        {
            name: 'Parasailing at FunFest Beach',
            location: " Kakra Beach, Marine Drive, Cox's Bazar",
            prevRate: 1840,
            currentRate: 1748,
            discount: 5,
            f1: "7 minuts",
            f2: "From 1 to 50 people",
            f3: "Booking can be cancelled anytime.",
            img: tourTwo,
            option1: "Adventure",
            option2: "Outdoor Activities",
            option3: "Marine drive",
        },
    ]
    return (
        <div>
            <Navbar isNavbar={false} />
            <div className='bg-white py-6 mt-16'>
                <div className={`${commonStyles.container}`}>
                    <div className='flex gap-x-8 items-center'>
                        <div className='w-4/5'>
                            <div className={`${bannerStyle.tourContent} my-[2rem]`}>
                                <label htmlFor='tour'>Location/tour</label>
                                <select id='tour'>
                                    <option defaultChecked>Cox Bazar</option>
                                    <option>Sajek</option>
                                    <option>Tanguar Haor</option>
                                    <option>Cox Bazar</option>
                                    <option>Sajek</option>
                                    <option>Tanguar Haor</option>
                                    <option>Cox Bazar</option>
                                    <option>Sajek</option>
                                    <option>Tanguar Haor</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-1/5'>
                            <button className={`${commonStyles.btn}`}>Modify Search</button>
                        </div>
                    </div>
                </div>

            </div>
            {/* mian section desgin starts here  */}
            <div className={`py-4 ${commonStyles.container} flex gap-x-8`}>
                <div className={`${styles.hotelFilterCon} drop-shadow-lg rounded`}>
                    <div className={`${styles.filterOption} mb-4`}>
                        <h3 className='text-[16px]'>Destination: 19 places found</h3>
                        <h3 className='text-[16px]'>Filter By</h3>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Duration</h3>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Less than 6 hours</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>6 - 12 hours</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>12 - 24 hours</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>24+ hours</label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h3 className='py-2 text-[14px]'>Time</h3>
                        <div className='flex items-center justify-between mb-4 rounded border border-[#1c3c6b]'>
                            <div className='text-center p-2 border-r-2 border-[#1c3c6b]'>
                                <Image src={wOne} alt='img' width={20} height={20} className='mx-auto block' />
                                <p className='text-[12px]'>00 - 06</p>
                            </div>
                            <div className='text-center p-2 border-r-2 border-[#1c3c6b]'>
                                <Image src={wTwo} alt='img' width={20} height={20} className='mx-auto block' />
                                <p className='text-[12px]'>06 - 12</p>
                            </div>
                            <div className='text-center p-2 border-r-2 border-[#1c3c6b]'>
                                <Image src={wThree} alt='img' width={20} height={20} className='mx-auto block' />
                                <p className='text-[12px]'>12 - 18</p>
                            </div>
                            <div className='text-center p-2'>
                                <Image src={wFour} alt='img' width={20} height={20} className='mx-auto block' />
                                <p className='text-[12px]'>18 - 00</p>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-6 mb-10`}>
                        <h3>Tags</h3>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Go Zayaan Exclusive</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Bike Rentals</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Beach Activity</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Adventure</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Vespa Rentals</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Weddings & Honeymoons</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Fishing Tours</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>New Years</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Hiking & Camping</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Eco Tours</label>
                            </div>
                        </div>
                    </div>
                    <button className={`px-6 py-2 rounded font-semibold text-[14px] bg-[#fccd03] w-full`}>Reset Filters</button>
                </div>
                <div className={`${styles.hotelSearchCon} ${commonStyles.container}`}>
                    <div className={`flex items-center justify-between`}>
                        <div className='bg-white drop-shadow-lg rounded p-3 flex items-center gap-x-4'>
                            <p className='text-[12px] text-[#1c3c6b] font-semibold'>Attraction <br/> & Show</p>
                            <Image src={attraction} alt='img' width={44} height={43}/>
                        </div>  
                        <div className='bg-white drop-shadow-lg rounded p-3 flex items-center gap-x-4'>
                            <p className='text-[12px] text-[#1c3c6b] font-semibold'>Activities <br/> & Experiences</p>
                            <Image src={activity} alt='img' width={44} height={43}/>
                        </div>
                        <div className='bg-white drop-shadow-lg rounded p-3 flex items-center gap-x-4'>
                            <p className='text-[12px] text-[#1c3c6b] font-semibold'>Sightseeing <br/>& Day-Tours</p>
                            <Image src={sightness} alt='img' width={44} height={43}/>
                        </div>
                        <div className='bg-white drop-shadow-lg rounded p-3 flex items-center gap-x-4'>
                            <p className='text-[12px] text-[#1c3c6b] font-semibold'>Day-Out <br/>Packages</p>
                            <Image src={dayout} alt='img' width={44} height={43}/>
                        </div>
                        <div className='bg-white drop-shadow-lg rounded p-3 flex items-center gap-x-4'>
                            <p className='text-[12px] text-[#1c3c6b] font-semibold'>Adventure</p>
                            <Image src={adventure} alt='img' width={44} height={43}/>
                        </div>
                    </div>
                    <div className='my-4'>
                        {
                            places.map((tour, index) => <TourCard key={index} tour = {tour}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tour;
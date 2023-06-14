import Navbar from '@/app/components/Navbar';
import React from 'react';
import commonStyles from '../../styles/common.module.css'
import styles from '../../styles/hotel.module.css'
import { IoIosArrowBack, IoIosPeople, IoMdInformationCircle } from 'react-icons/io';
import Link from 'next/link';
import h1 from '../../../../public/popularHotel/h1.JPG'
import h2 from '../../../../public/popularHotel/h2.webp'
import h3 from '../../../../public/popularHotel/h3.webp'
import h4 from '../../../../public/popularHotel/h4.webp'
import h5 from '../../../../public/popularHotel/h5.webp'
import h6 from '../../../../public/popularHotel/h6.webp'
import h7 from '../../../../public/popularHotel/h7.JPG'
import h8 from '../../../../public/popularHotel/h8.webp'
import DetailsCarousel from '@/app/components/DetailsCarousel';
import { BsBookmarkPlusFill, BsStopwatchFill } from 'react-icons/bs';
import { AiFillStar, AiTwotoneInsurance } from 'react-icons/ai';
import { MdLocationOn, MdChildCare, MdOutlinePolicy, MdOutlinePayment } from 'react-icons/md';
import { CiViewTimeline } from 'react-icons/ci'
import { GrDocumentText } from 'react-icons/gr'
import { FcCheckmark } from 'react-icons/fc'
import Image from 'next/image';
import mastercard from '../../../../public/master.svg'
import visa from '../../../../public/visa.svg'


const HotelDetails = ({ params }) => {
    const id = params.hotel
    const hotels = {
        name: 'Hotel Regal Palace',
        star: 5,
        location: "Kalatoli, Cox's Bazar",
        prevRate: 7906,
        currentRate: 3985,
        f1: " Air Conditioning",
        f2: " Accessible Bathroom",
        f3: "In-room Accessibility",
        discount: 49,
        images: [
            { id: 1, img: h1 },
            { id: 2, img: h2 },
            { id: 3, img: h3 },
            { id: 4, img: h4 },
            { id: 5, img: h5 },
            { id: 6, img: h6 },
            { id: 7, img: h7 },
            { id: 8, img: h8 },
        ],
        description: "Featuring a 24-hour front desk and free Wi-Fi in lobby area, Royal Bay Regal Palace Hotel & Resort also offers a fitness center on property. Guests can approach the tour desk for travel related assistance or avail of car rental facilities to explore the area. For those who have to work on the go, there is a business center on property. Each air-conditioned room features a seating area, a flat-screen TV with satellite channels, an electric kettle and telephone. The attached bathroom has shower facilities. Room service options can be enjoyed 24-hours a day. Spicy Restaurant serves cuisines from around the region and the world. BBQ is a multi-cuisine restaurant which also offers sea-views. Bar/Lounge is the resident coffee shop and juice bar. The property is 1.9 mi from Cox’s Bazar Airport. The local bus stand is just 0.6 mi away. Cox’s Bazar Sandy Sea Beach and Laboni Beach Market are just 984 feet away. The Burmese Market is 1.9 mi away.",

    }
    return (
        <div>
            <Navbar prop={{ isNavbar: false }} />
            <div className={`${commonStyles.container} ${styles.hotelDetails}`}>
                <Link href="/hotel" className='mb-2 pt-[90px] font-semibold text-[16px] text-[#1c3c6b] flex items-center gap-x-2'><IoIosArrowBack /> <span>See all hotel</span></Link>
                <div className='flex items-center gap-x-8 mt-12'>
                    <div className={`img-container`}>
                        <div className="carousel w-full">
                            {
                                hotels.images.map((image, index) => <DetailsCarousel image={image} key={index} />)
                            }
                        </div>
                    </div>
                    <div className='min-w-[300px] p-4'>
                        <h2>{hotels.name}</h2>
                        <div className='flex items-center gap-x-3'>
                            <div className='flex items-center gap-x-1 border p-1 rounded'>
                                <AiFillStar className='text-yellow-500' />
                                <span className='text-[12px]'>{hotels.star}</span>
                                <span className='text-[12px]'>Star</span>
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <MdLocationOn />
                                <p className='text-[12px]'>{hotels.location}</p>
                            </div>
                        </div>
                        <Link href={'/'} className='mt-4'>See all reviews</Link>
                        <div className='my-6'>
                            <Link href={"/"} className={`text-white text-[12px] font-bold px-3 py-2 bg-[#1c3c6b] rounded`}>3.3/5.5 okay</Link>
                            <p className='mt-6 mb-4'>Whats nearby?</p>
                            <div className='flex items-start gap-x-1'>
                                <MdLocationOn />
                                <p className='text-[12px]'>0.6 km from Sugandha sea Beach view Point</p>
                            </div>
                            <div className='flex items-start gap-x-1'>
                                <MdLocationOn />
                                <p className='text-[12px]'>3.5 km from Cox`&apos;`s Bazar Bus Terminal</p>
                            </div>
                        </div>
                        <h2>Facilities</h2>
                        <div className='flex items-center gap-2 flex-wrap my-4'>
                            <p className='text-[12px] text-gray-600' ><BsStopwatchFill className='inline mr-1' size={20} /> {hotels?.f1}</p>
                            <p className='text-[12px] text-gray-600' ><IoIosPeople className='inline mr-1' size={20} />{hotels?.f2}</p>
                            <p className='text-[12px] text-gray-600' ><BsBookmarkPlusFill className='inline mr-1' size={20} /> {hotels?.f3}</p>
                        </div>
                    </div>
                </div>
                {/* description of the hotel  */}
                <div>
                    <div className='flex items-center gap-x-8 sticky top-[80px] bg-white p-4 z-5'>
                        <button>ROOMS</button>
                        <button>WHAT`&apos;`S NEARBY</button>
                        <button>FACILITIES</button>
                        <button>POLICY</button>
                    </div>
                    <div className='my-4 bg-white drop-shadow-lg rounded p-5'>
                        <h3>Hotel Description</h3>
                        <h4 className='my-3'>Number of Rooms: 61Number of Floors: 7Year of construction: 2000</h4>
                        <p>{hotels.description}</p>
                    </div>
                    <div>
                        <p>here check inbox</p>
                    </div>
                    <div className='flex gap-x-12 mt-4'>
                        <div>
                            <p>here all hotels showing</p>
                        </div>
                        <div className={`min-w-[300px] p-4 bg-white drop-shadow-2xl rounded-lg  h-[100%] sticky top-[80px]`}>
                            <p>here the card will be shown</p>
                        </div>
                    </div>
                    <h2 className='mt-6'>What`&apos;`s Nearby</h2>
                    <div className={`${styles.nearbySection} rounded flex gap-x-8 p-5 bg-white drop-shadow-lg mb-6`}>
                        <div className='w-[58%]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29714.70040386337!2d91.9603920724551!3d21.415973343945105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc96118ced5b5%3A0xfeac4d792191e35e!2sCox&#39;s%20Bazar%20Sea%20Beach!5e0!3m2!1sen!2sbd!4v1686731789911!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='w-[40%]'>
                            <h5>Interest Points</h5>
                            <div className='flex items-center gap-x-1 mb-3'>
                                <MdLocationOn />
                                <p className='text-[12px]'>0.6 km from Sugandha sea Beach view Point</p>
                            </div>
                            <h5>Interest Points</h5>
                            <div className='flex items-center gap-x-1'>
                                <MdLocationOn />
                                <p className='text-[12px]'> 3.5 km from Cox`&apos;`s Bazar Bus Terminal</p>
                            </div>
                        </div>
                    </div>
                    <h2 className='mt-6'>Facilities</h2>
                    <div className='bg-white p-5 drop-shadow-lg mb-6 rounded'>
                        <h2 className='mt-6'>General</h2>
                        <div className='grid grid-cols-4 gap-x-8 gap-y-4 mt-4 mb-8'>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Air Conditioning</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Lockers</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Check-Out</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Check-In</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Accessible Bathroom</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>No Alcohol</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Coffee/Tea in Lobby</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>ID Required</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Elevator</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Sofa Bed</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Towel</p>
                            </div>
                        </div>
                        <h2 className='mt-6'>Media & Technology</h2>
                        <div className='grid grid-cols-4 gap-x-8 gap-y-4 mt-4 mb-8'>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Mobile Phone Coverage</p>
                            </div>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Telephone</p>
                            </div>
                        </div>
                        <h2 className='mt-6'>Parking</h2>
                        <div className='grid grid-cols-4 gap-x-8 gap-y-4 mt-4 mb-8'>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Free Large Vehicle Parking</p>
                            </div>
                        </div>
                        <h2 className='mt-6'>Safety & Security</h2>
                        <div className='grid grid-cols-4 gap-x-8 gap-y-4 mt-4 mb-8'>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>24-Hour Security</p>
                            </div>
                        </div>
                        <h2 className='mt-6'>Services & Extras</h2>
                        <div className='grid grid-cols-4 gap-x-8 gap-y-4 mt-4 mb-8'>
                            <div className='flex gap-x-3 items-center'>
                                <FcCheckmark />
                                <p>Tours/Ticket Assistance</p>
                            </div>
                        </div>
                    </div>
                    <h2 className='mt-6'>Policy</h2>
                    <div className='bg-white p-5 drop-shadow-lg mb-6 rounded'>
                        <div className='flex mb-6'>
                            <div className='flex gap-x-2 w-[20%]'>
                                <CiViewTimeline />
                                <p>Check In</p>
                            </div>
                            <div className='w-[80%]'>
                                <h6>12:00</h6>
                            </div>
                        </div>
                        <div className='flex  mb-6'>
                            <div className='flex gap-x-2 w-[20%]'>
                                <CiViewTimeline />
                                <p>Check Out</p>
                            </div>
                            <div className='w-[80%]'>
                                <h6>11:00</h6>
                            </div>
                        </div>
                        <div className='flex  mb-6'>
                            <div className='flex gap-x-2 w-[20%]'>
                                <AiTwotoneInsurance />
                                <p>Instructions</p>
                            </div>
                            <div className='w-[80%]'>
                                <ul className='list-disc'>
                                    <li>Extra-person charges may apply and vary depending on property policy</li>
                                    <li>Government-issued photo identification and a credit card, debit card, or cash <br />deposit may be required at check-in for incidental charges</li>
                                    <li>Special requests are subject to availability upon check-in and may incur <br />additional charges; special requests cannot be guaranteed</li>
                                    <li>This property accepts credit cards, debit cards, and cash</li>
                                    <li>Safety features at this property include a fire extinguisher, a security system, and a first aid kit</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex  mb-6'>
                            <div className='flex gap-x-2 w-[20%]'>
                                <GrDocumentText />
                                <p>Special Instructions</p>
                            </div>
                            <div className='w-[80%]'>
                                <p>
                                    This property offers transfers from the airport (surcharges may apply). Guests must contact the property with arrival details before travel, using the contact information on the booking confirmation. Front desk staff will greet guests on arrival.</p>
                            </div>
                        </div>
                        <div className='flex  mb-6'>
                            <div className='flex gap-x-2 w-[20%]'>
                                <MdChildCare />
                                <p>Child Policy</p>
                            </div>
                            <div className='w-[80%]'>
                                <p className='mb-6'>Allowed</p>
                                <p>Children under 5 years can stay in one room with their parents complimentary. Extra Bed not available.</p>
                            </div>
                        </div>
                        <div className='flex  mb-6'>
                            <div className='flex gap-x-2 w-[20%]'>
                                <MdOutlinePolicy />
                                <p>Pet Policy</p>
                            </div>
                            <div className='w-[80%]'>
                                <p className='mb-6'>Not Allowed</p>
                                <p>Children under 5 years can stay in one room with their parents complimentary. Extra Bed not available.</p>
                            </div>
                        </div>
                        <div className='flex  mb-6'>
                            <div className='flex gap-x-2 w-[20%]'>
                                <IoMdInformationCircle />
                                <p>House Rules</p>
                            </div>
                            <div className='w-[80%]'>
                                <p className='mb-3'>Not Allowed</p>
                                <p>For blackout, long holidays and long weekend cancelation policy will not be applicable.Extra bed facilities not available.</p>
                            </div>
                        </div>
                        <div className='flex  mb-6'>
                            <div className='flex gap-x-2 w-[20%]'>
                                <MdOutlinePayment />
                                <p> Property accepts</p>
                            </div>
                            <div className='w-[80%] flex items-center gap-x-4'>
                                <Image src={mastercard} alt='img of master card' width={80} height={40} />
                                <Image src={visa} alt='img of master card' width={80} height={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;
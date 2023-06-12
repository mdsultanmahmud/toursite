"use client"
import Navbar from '@/app/components/Navbar';
import Link from 'next/link';
import React, { useState } from 'react';
import tourOne from '../../../../public/tour/tourOne.jpg'
import tourTwo from '../../../../public/tour/tourTwo.jpg'
import tourThree from '../../../../public/tour/tourThree.jpg'
import tourFour from '../../../../public/tour/tourFour.jpg'
import tourFive from '../../../../public/tour/tourFive.jpg'
import tourSix from '../../../../public/tour/TourSix.jpg'
import tourSeven from '../../../../public/tour/TourSeven.jpg'
import tourEight from '../../../../public/tour/tourEight.jpg'
import { IoIosArrowBack, IoLocationOutline } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import commonStyles from '../../styles/common.module.css'
import styles from '../../styles/tour.module.css'
import { AiOutlineCheck } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import Image from 'next/image';
import upperdeck from '../../../../public/tour/upperdeck.jpg'
import lowerdeck from '../../../../public/tour/lowerdeck.jpeg'
const TourDetails = ({ params }) => {
    const tourId = params.tour
    const [tab, setTab] = useState('')
    //when dynamic data will be present then call the data from databse with id
    const tourDetails =
    {
        name: 'Aquaholic Tourist Caravan',
        location: "Cox's Bazar",
        prevRate: 2099,
        currentRate: 1995,
        discount: 5,
        f1: "9 hours",
        f2: "From 1 to 48 people",
        f3: "Free cancellation up to twenty-four (24) hours before the start of the tour.",
        option1: "Sightseeing",
        option2: "Day Tour",
        option3: "Marine drive",
        img1: tourOne,
        img2: tourTwo,
        img3: tourThree,
        img4: tourFour,
        img5: tourFive,
        img6: tourSix,
        img7: tourSeven,
        img8: tourEight,
    }

    return (
        <div>
            <Navbar isNavbar={false} />
            <div className={`${commonStyles.container}`}>
                <Link href="/tour" className='my-2 font-semibold text-[12px] text-[#1c3c6b] flex items-center gap-x-2'><IoIosArrowBack /> <span>See all tour</span></Link>
                {/* details section  */}
                <div className='p-4 bg-white drop-shadow-lg mt-4 mb-8'>
                    <div className='flex items-center gap-x-8 sticky top-[80px] bg-white py-4 z-5'>
                        <button onClick={() => setTab('overview')}>Details</button>
                        <button onClick={() => setTab('option')}>Option</button>
                        <button onClick={() => setTab('policy')}>Policy</button>
                    </div>
                    <hr />
                    {/* content section  */}
                    <div className='flex gap-x-12 mt-4'>
                        <div>
                            <div id='overview' className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'overview') {
                                        setTab('')
                                    } else {
                                        setTab('overview')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">OverView</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'overview' ? styles.active : ''}`}>
                                    <p>Imagine exploring the tourist spots of the world`&apos;`s largest sea beach, Cox`&apos;`s Bazar in a double-decker tourist bus. Having the wide ocean view on one side and hill view on the other, this tour is an excellent opportunity for you to enjoy an entire day while fulfilling a major portion of your Cox's Bazar checklist. Driving through the iconic marine drive, Aquaholic Tourist Caravan offers you a stoppage at every spot to hop around comfortably. This tour also comes with special meal services, a mini library, washroom and refreshments - all inside the tourist bus! Overall, this unique experience of roaming around and visiting spots in a double-decker tourist bus is definitely going to be one of the activities to cherish with your friends or family in Cox's Bazar.</p>
                                    <u>For booking this tour, please follow the following steps,﻿</u>
                                    <ul>
                                        <li>Step 1: Select your preferred date </li>
                                        <li>Step 2: Select number of travelers (Adults/Children)</li>
                                        <li>Step 3: Select your preferred option. </li>
                                        <li>Step 4: Proceed to payment</li>
                                    </ul>
                                    <p>Per head price will be lowest for maximum number of travelers.</p>
                                </div>
                            </div>
                            <div className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'location') {
                                        setTab('')
                                    } else {
                                        setTab('location')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Location</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'location' ? styles.active : ''}`}>
                                    <p><strong>Pick-up:</strong> Ground Floor, Motel Upal, Shaibal Road, Cox`&apos;`s Bazar</p>
                                </div>
                            </div>
                            <div className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'timing') {
                                        setTab('')
                                    } else {
                                        setTab('timing')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Timing</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'timing' ? styles.active : ''}`}>
                                    <p>9:00 AM - 6:00 PM</p>
                                    <p><strong>Duration :</strong> 9 hours</p>
                                </div>
                            </div>
                            <div className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'inclusion') {
                                        setTab('')
                                    } else {
                                        setTab('inclusion')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Inclusion & Exclusion</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'inclusion' ? styles.active : ''}`}>
                                    <ul>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>All Entry Tickets of Hopping Destinations</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>Welcome Breakfast</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>Lunch Platter</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>Evening Snacks</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>Washroom</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>Library</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>WIFI</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>Guide</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>Wrist band</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck />
                                            <span>First Aid Kit (In case of emergency)</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <RxCross1 />
                                            <span>Personal expenses</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <RxCross1 />
                                            <span>Anything else that isn`&apos;`t mentioned on Inclusions</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'description') {
                                        setTab('')
                                    } else {
                                        setTab('description')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Description</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'description' ? styles.active : ''}`}>
                                    <p>Aquaholic Tourist Caravan is the first hop-on hop-off service in Bangladesh. For the first time in Bangladesh, it brings to you the opportunity to experience the majestic aura of the Marine Drive road in such a unique setting. The travelers will be starting for the day long tour at 09:00 AM. The daylong will be covering all the spots of Marine Drive as you are entertained with fantastic meals on board. The travelers will be dropped-off at Kolatoli at 06:00 PM.</p>
                                    <h2 className="text-[18px] text-[#1c3c6b] font-bold">The Caravan is facilitated with:</h2>
                                    <ul className='disc'>
                                        <li>Washroom</li>
                                        <li>Kitchen</li>
                                        <li>Library</li>
                                        <li>CC Camera Surveillance</li>
                                        <li>Skilled Guide</li>
                                        <li>Experienced Chef</li>
                                    </ul>
                                    <h2 className="text-[18px] text-[#1c3c6b] font-bold">Hopping Destinations: </h2>
                                    <ul className='disc'>
                                        <li>Patuartak beach</li>
                                        <li>Shamlapur Hill View Beach</li>
                                        <li>Teknaf Beach</li>
                                        <li>Sabrang Zero Point</li>
                                    </ul>
                                    <h2 className="text-[18px] text-[#1c3c6b] font-bold">Complementary Food Menu:</h2>
                                    <ul>
                                        <li><u>Welcome Snacks:</u> Sandwich, Coconut Water, Apple, Mineral Water</li>
                                        <li><u>Lunch Platter:</u> Chicken Fried Rice, Cashew Nut Salad, Vegetable, Masala Chicken, Cold Drinks, Mineral Water</li>
                                        <li><u>Evening Snacks:</u> Fried Chicken, Bun, French Fry, Sauce, Green Tea, Mineral Water</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'additionalIn') {
                                        setTab('')
                                    } else {
                                        setTab('additionalIn')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Additional Information</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'additionalIn' ? styles.active : ''}`}>
                                    <ul>
                                        <li>Tickets of Aquaholic Tourist Caravan are highly dependent on the availability. GoZayaan will issue tickets that are available and does not promise to provide any specific seat(s) for a booking.</li>
                                        <li>Confirmation will be received at the time of booking</li>
                                        <li>Children must be accompanied by an adult</li>
                                        <li>Face masks are required for travelers in public areas</li>
                                        <li>Social distancing is enforced throughout the experience</li>
                                        <li>Due to maintenance work on Rezu khal Bridge (15 km from kolatoli) Aquaholic Tourist Caravan will provide Special transportation service till the bridge. The remaining distance of the sixty-five (65) km will be facilitated by the Caravan.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'travelTips') {
                                        setTab('')
                                    } else {
                                        setTab('travelTips')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Travel Tips</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'travelTips' ? styles.active : ''}`}>
                                    <ul>
                                        <li>Carry drinking water. Stay hydrated, travel healthy.</li>
                                        <li>It is advised to carry a set of fresh clothes for the beach.</li>
                                        <li>Always be respectful of the rules and guidelines of the tourist spots.</li>
                                        <li>Please do not litter. Use a polybag as a portable trash bin.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'option') {
                                        setTab('')
                                    } else {
                                        setTab('option')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Option</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div id='option' className={`${styles.tourDetailsContent} ${tab == 'option' ? styles.active : ''}`}>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h4>option 1</h4>
                                            <h5>Upper Deck </h5>
                                        </div>
                                        <Image src={upperdeck} alt='upper deck image' width={100} height={120} />
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h4>option 2</h4>
                                            <h5>Lower Deck </h5>
                                        </div>
                                        <Image src={lowerdeck} alt='lower deck image' width={100} height={120} />
                                    </div>
                                </div>
                            </div>
                            <div id='policy' className='py-3'>
                                <div onClick={() => {
                                    if (tab == 'policy') {
                                        setTab('')
                                    } else {
                                        setTab('policy')
                                    }
                                }} className='cursor-pointer mb-3 flex items-center justify-between'>
                                    <div className='flex items-center gap-x-3'>
                                        <TbWorld size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Policy</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'policy' ? styles.active : ''}`}>
                                    <div>
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Cancellation</h2>
                                        <ul>
                                            <li>To cancel any tour, an email has to be sent to tours@gozayaan.com mentioning the tour booking ID and details about the cancellation. </li>
                                            <li>The time of sending the email will be considered as the time of cancellation.</li>
                                            <li>The email will be considered as the final application for cancellation. A phone call to the Go Zayaan hotline number or any other team member of Go Zayaan will not be considered as a request for cancellation.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Refund</h2>
                                        <ul>
                                            <li>The full amount of the tour fee will be refunded if the booking is canceled twenty-four (24) hours prior to the start of the experience/tour.</li>
                                            <li>No refund will be provided if the booking is canceled less than twenty-four (24) hours prior to the start of the experience/tour.</li>
                                            <li>Convenience fee is non-refundable and will be deducted from the paid amount.</li>
                                            <li>All refunds will be processed within seven (7) working days.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Child Policy</h2>
                                        <ul>
                                            <li>No charge will be applied for kids below three (3) years old.</li>
                                            <li>BDT 1,599 has to be paid for anyone between three (3) and seven (7) years old</li>
                                            <li>Full price has to be paid for anyone who is seven (7) years old.</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={`min-w-[300px] p-4 bg-white drop-shadow-lg border border-1 border-gray-500 h-[100%] sticky top-[80px]`}>
                            {/* date selector  */}
                            <div className='mb-3'>
                                <label>Journey Date</label>
                                <h2>23 Jun, 2023</h2>
                                <input type='date' />
                            </div>
                            <h2>Select Options</h2>
                            <div>

                            </div>
                            <div className='mt-4'>
                                <h5>Up to 6 travelers</h5>
                                <del>BDT 6,697</del>
                                <h4>BDT 6,363</h4>
                                <p>BDT 2,120 per traveler</p>
                                <button>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetails;
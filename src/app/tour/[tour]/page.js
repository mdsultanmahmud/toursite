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
import { IoIosArrowBack, IoMdInformationCircleOutline, IoMdOptions } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import commonStyles from '../../styles/common.module.css'
import styles from '../../styles/tour.module.css'
import { AiOutlineCheck, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { MdLocationPin, MdOutlineModeOfTravel, MdOutlinePolicy, MdAccessTime, MdOutlinePeopleOutline, MdOutlineDescription } from 'react-icons/md'
import Image from 'next/image';
import { MdLocationOn, MdOutlineAccessibleForward } from 'react-icons/md';
import { IoIosPeople, IoMdPeople } from 'react-icons/io'
import { BsBookmarkPlusFill, BsStopwatchFill } from 'react-icons/bs'
import { GiThreeFriends } from 'react-icons/gi'
import upperdeck from '../../../../public/tour/upperdeck.jpg'
import lowerdeck from '../../../../public/tour/lowerdeck.jpeg'
import DetailsCarousel from '@/app/components/DetailsCarousel';
const TourDetails = ({ params }) => {
    const tourId = params.tour
    const [tab, setTab] = useState('')
    const [person, setPerson] = useState(0)
    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)
    //when dynamic data will be present then call the data from databse with id
    const tourDetails =
    {
        name: 'Aquaholic Tourist Caravan',
        location: "Cox's Bazar",
        prevRate: 2099,
        currentRate: 1995,
        discount: 5,
        f1: "9 hours",
        tourdetails: "9 hours",
        f2: "From 1 to 48 people",
        f3: "Free cancellation up to twenty-four (24) hours before the start of the tour.",
        option1: "Sightseeing",
        option2: "Day Tour",
        option3: "Marine drive",
        images: [
            {
                id: 1,
                img: tourOne,
            },
            {
                id: 2,
                img: tourTwo
            },
            { id: 3, img: tourThree },
            { id: 4, img: tourFour },
            { id: 5, img: tourFive },
            { id: 6, img: tourSix },
            { id: 7, img: tourSeven },
            { id: 8, img: tourEight }
        ]
    }

    return (
        <div>
            <Navbar prop={{isNavbar: false}} />
            <div className={`${commonStyles.container}`}>
                <Link href="/tour" className='mb-2 pt-[90px] font-semibold text-[16px] text-[#1c3c6b] flex items-center gap-x-2'><IoIosArrowBack /> <span>See all tour</span></Link>
                {/* img and primary details  */}
                <div className='flex items-center gap-x-8 mt-12'>
                    <div className={`img-container`}>
                        <div className="carousel w-full">
                            {
                                tourDetails.images.map((image, index) => <DetailsCarousel image={image} key={index} />)
                            }
                        </div>
                    </div>
                    <div className='min-w-[300px] p-4'>
                        <div>
                            <iframe className='border-none' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118830.24933536263!2d91.92050032987305!3d21.451037760117554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc7ea2ab928c3%3A0x3b539e0a68970810!2sCox&#39;s%20Bazar!5e0!3m2!1sen!2sbd!4v1686647109361!5m2!1sen!2sbd" width="300" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className='flex items-center gap-2 flex-wrap my-4'>
                            <p className='text-[12px] text-gray-600' ><BsStopwatchFill className='inline mr-1' size={20} /> {tourDetails?.f1}</p>
                            <p className='text-[12px] text-gray-600' ><IoIosPeople className='inline mr-1' size={20} />{tourDetails?.f2}</p>
                            <p className='text-[12px] text-gray-600' ><BsBookmarkPlusFill className='inline mr-1' size={20} /> {tourDetails?.f3}</p>
                        </div>
                        <div className='flex items-center gap-2 flex-wrap '>
                            <span className='px-2 py-1 mt-1 font-semibold inline rounded text-[#4788b6] bg-[#ebf0f4] text-[12px] flex items-center gap-x-1'><GiThreeFriends /> <span>{tourDetails?.option1}</span></span>
                            <span className='px-2 py-1 mt-1 font-semibold inline rounded text-[#4788b6] bg-[#ebf0f4] text-[12px] flex items-center gap-x-1'><IoMdPeople /> <span>{tourDetails?.option2}</span></span>
                            <span className='px-2 py-1 mt-1 font-semibold inline rounded text-[#4788b6] bg-[#ebf0f4] text-[12px] flex items-center gap-x-1'><IoMdPeople /> <span>{tourDetails?.option3}</span></span>
                        </div>
                    </div>
                </div>
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
                                    <ul className='my-4'>
                                        <li className="font-bold">Step 1: Select your preferred date </li>
                                        <li className="font-bold">Step 2: Select number of travelers (Adults/Children)</li>
                                        <li className="font-bold">Step 3: Select your preferred option. </li>
                                        <li className="font-bold">Step 4: Proceed to payment</li>
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
                                        <MdLocationPin size={24} />
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
                                        <MdAccessTime size={24} />
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
                                        <MdOutlinePeopleOutline size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Inclusion & Exclusion</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'inclusion' ? styles.active : ''}`}>
                                    <ul>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>All Entry Tickets of Hopping Destinations</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>Welcome Breakfast</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>Lunch Platter</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>Evening Snacks</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>Washroom</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>Library</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>WIFI</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>Guide</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>Wrist band</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <AiOutlineCheck className="text-green-500" />
                                            <span>First Aid Kit (In case of emergency)</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <RxCross1 className='text-red-500' />
                                            <span>Personal expenses</span>
                                        </li>
                                        <li className='flex items-center gap-x-2'>
                                            <RxCross1 className='text-red-500' />
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
                                        <MdOutlineDescription size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Description</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'description' ? styles.active : ''}`}>
                                    <p>Aquaholic Tourist Caravan is the first hop-on hop-off service in Bangladesh. For the first time in Bangladesh, it brings to you the opportunity to experience the majestic aura of the Marine Drive road in such a unique setting. The travelers will be starting for the day long tour at 09:00 AM. The daylong will be covering all the spots of Marine Drive as you are entertained with fantastic meals on board. The travelers will be dropped-off at Kolatoli at 06:00 PM.</p>
                                    <h2 className="text-[18px] text-[#1c3c6b] font-bold">The Caravan is facilitated with:</h2>
                                    <ul className='list-disc'>
                                        <li>Washroom</li>
                                        <li>Kitchen</li>
                                        <li>Library</li>
                                        <li>CC Camera Surveillance</li>
                                        <li>Skilled Guide</li>
                                        <li>Experienced Chef</li>
                                    </ul>
                                    <h2 className="text-[18px] text-[#1c3c6b] font-bold">Hopping Destinations: </h2>
                                    <ul className='list-disc'>
                                        <li>Patuartak beach</li>
                                        <li>Shamlapur Hill View Beach</li>
                                        <li>Teknaf Beach</li>
                                        <li>Sabrang Zero Point</li>
                                    </ul>
                                    <h2 className="text-[18px] text-[#1c3c6b] font-bold">Complementary Food Menu:</h2>
                                    <ul className='list-disc'>
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
                                        <IoMdInformationCircleOutline size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Additional Information</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'additionalIn' ? styles.active : ''}`}>
                                    <ul className='list-disc'>
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
                                        <MdOutlineModeOfTravel size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Travel Tips</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'travelTips' ? styles.active : ''}`}>
                                    <ul className='list-disc'>
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
                                        <IoMdOptions size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Option</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div id='option' className={`${styles.tourDetailsContent} ${tab == 'option' ? styles.active : ''}`}>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <h4>option 1</h4>
                                            <h5 className='font-semibold'>Upper Deck </h5>
                                        </div>
                                        <Image src={upperdeck} alt='upper deck image' width={100} height={120} className='rounded' />
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h4>option 2</h4>
                                            <h5 className='font-semibold'>Lower Deck </h5>
                                        </div>
                                        <Image src={lowerdeck} alt='lower deck image' width={100} height={120} className='rounded' />
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
                                        <MdOutlinePolicy size={24} />
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Policy</h2>
                                    </div>
                                    <MdOutlineKeyboardArrowDown />
                                </div>
                                <hr />
                                <div className={`${styles.tourDetailsContent} ${tab == 'policy' ? styles.active : ''}`}>
                                    <div>
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Cancellation</h2>
                                        <ul className='list-disc'>
                                            <li>To cancel any tour, an email has to be sent to tours@gozayaan.com mentioning the tour booking ID and details about the cancellation. </li>
                                            <li>The time of sending the email will be considered as the time of cancellation.</li>
                                            <li>The email will be considered as the final application for cancellation. A phone call to the Go Zayaan hotline number or any other team member of Go Zayaan will not be considered as a request for cancellation.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Refund</h2>
                                        <ul className='list-disc'>
                                            <li>The full amount of the tour fee will be refunded if the booking is canceled twenty-four (24) hours prior to the start of the experience/tour.</li>
                                            <li>No refund will be provided if the booking is canceled less than twenty-four (24) hours prior to the start of the experience/tour.</li>
                                            <li>Convenience fee is non-refundable and will be deducted from the paid amount.</li>
                                            <li>All refunds will be processed within seven (7) working days.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-[18px] text-[#1c3c6b] font-bold">Child Policy</h2>
                                        <ul className='list-disc'>
                                            <li>No charge will be applied for kids below three (3) years old.</li>
                                            <li>BDT 1,599 has to be paid for anyone between three (3) and seven (7) years old</li>
                                            <li>Full price has to be paid for anyone who is seven (7) years old.</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={`min-w-[300px] p-4 bg-white drop-shadow-2xl rounded-lg  h-[100%] sticky top-[80px] ${styles.selectOption}`}>
                            {/* date selector  */}
                            <div className='mb-3 p-2 rounded-lg border border-[#1c3c6b]'>
                                <label>Journey Date</label>
                                {/* <h2>23 Jun, 2023</h2> */}
                                <input type='date' />
                            </div>
                            <h2>Select Options</h2>
                            <div className='mb-3 p-2 rounded-lg border border-[#1c3c6b]'>
                                <div className='flex  items-center justify-between'>
                                    <div className=''>
                                        <h2>Lower Deck</h2>
                                        <p>Upto {person} traveler</p>
                                    </div>
                                    <div className='flex gap-x-2 items-center'>
                                        <button
                                            onClick={() => {
                                                setPerson(person - 1)
                                            }}
                                            disabled={person == 0}

                                        ><AiOutlineMinusCircle size={26} /></button>
                                        <span>{person}</span>
                                        <button
                                            onClick={() => {
                                                setPerson(person + 1)
                                            }}

                                        ><AiOutlinePlusCircle size={26} /></button>

                                    </div>
                                </div>
                                {
                                    person > 0 &&
                                    <details className='mt-2'>
                                        <summary className='cursor-pointer'>
                                            <hr />
                                            <p className='my-2 text-[12px]'>Travelers</p>
                                            <div className='flex gap-x-2 items-center'>
                                                <h2>{adult} Adults</h2>
                                                <h2>{child} Children</h2>
                                                <h2>{infant} Infants</h2>
                                            </div>
                                        </summary>
                                        <ul className="p-2 menu dropdown-content bg-base-100 w-full drop-shadow-lg">
                                            <li>
                                                <a className='flex  items-center justify-between'>
                                                    <div className=''>
                                                        <h2>Adult</h2>
                                                    </div>
                                                    <div className='flex gap-x-2 items-center'>
                                                        <button
                                                            onClick={() => {
                                                                setAdult(adult - 1)
                                                            }}
                                                            disabled={adult == 0}

                                                        ><AiOutlineMinusCircle size={26} /></button>
                                                        <span>{adult}</span>
                                                        <button
                                                            onClick={() => {
                                                                setAdult(adult + 1)
                                                            }}
                                                            disabled={adult == person}

                                                        ><AiOutlinePlusCircle size={26} /></button>

                                                    </div>
                                                </a>
                                                <hr />
                                            </li>
                                            <li>
                                                <a className='flex  items-center justify-between'>
                                                    <div className=''>
                                                        <h2>Child</h2>
                                                        <p className='text-[10px]'>3-7 years</p>
                                                    </div>
                                                    <div className='flex gap-x-2 items-center'>
                                                        <button
                                                            onClick={() => {
                                                                setChild(child - 1)
                                                            }}
                                                            disabled={child == 0}

                                                        ><AiOutlineMinusCircle size={26} /></button>
                                                        <span>{adult}</span>
                                                        <button
                                                            onClick={() => {
                                                                setChild(child + 1)
                                                            }}
                                                            disabled={child == person}

                                                        ><AiOutlinePlusCircle size={26} /></button>

                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='flex  items-center justify-between'>
                                                    <div className=''>
                                                        <h2>Infant</h2>
                                                        <p className='text-[10px]'>Bellow 3</p>
                                                    </div>
                                                    <div className='flex gap-x-2 items-center'>
                                                        <button
                                                            onClick={() => {
                                                                setInfant(infant - 1)
                                                            }}
                                                            disabled={infant == 0}

                                                        ><AiOutlineMinusCircle size={26} /></button>
                                                        <span>{adult}</span>
                                                        <button
                                                            onClick={() => {
                                                                setInfant(infant + 1)
                                                            }}
                                                            disabled={infant == person}

                                                        ><AiOutlinePlusCircle size={26} /></button>

                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </details>
                                }
                            </div>
                            <div className={`${styles.details}`}>
                                {person > 0 && <h5>Up to {person} travelers</h5>}
                                <p>Starting From <br /><del className='uppercase my-2'>BDT 6,697</del></p>
                                <h4>BDT 6,363</h4>
                                {
                                    person > 0 && <p>BDT 2,120 per traveler</p>
                                }
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
'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import bannerStyling from '../styles/banner.module.css'
import styles from '../styles/flight.module.css'
import commonStyle from '../styles/common.module.css'
import { MdWatchLater } from 'react-icons/md'
import { IoIosContact } from 'react-icons/io'
import { RiMessengerLine } from 'react-icons/ri'
//card image importing
import BBA from '../../../public/flight/bba.png'
import FlightCard from '../components/FlightCard';
import FlightFilter from '../components/FlightFilter';
import { FaFilter } from 'react-icons/fa';
const Flight = () => {
    const [way, setWay] = useState("one")
    const [filter, setFilter] = useState(false)
    const allFlight = [
        {
            name: "Biman Bangladesh Airlines",
            dac: '15:15',
            cxb: '16.30',
            type: 'Non-stop',
            timeDuration: '1h 15m',
            numberPlat: 'EDOM0623',
            prevPrice: 4499,
            currentPrice: 4009,
            img: BBA,
            details: {
                fullname: "Biman Bangladesh Airlines BG 437 | DH8",
                flightClass: "Economy",
                arivalTime: 'Mon, 12 Jun, \n 2023',
                leaveTime: 'Mon, 12 Jun, \n 2023',
                Baggage: {
                    Flight: 'DAC - CXB',
                    Cabin: "7 Kilograms",
                    CheckIn: "20 Kilograms",
                },
                Fare: {
                    FareSummary: "Adult x 1",
                    BaseFare: "BDT 3,774",
                    Tax: 'BDT 725'
                },
                Policy: {
                    Cancellation: "Cancellation Fee = Airline's Fee + GoZayaan Fee  Refund Amount = Paid Amount - Cancellation Fee",
                    ReIssue: "Re-issue Fee = Airline's Fee + Fare Difference + GoZayaan Fee",
                    statment: "*The airline's fee is indicative and per person. Convenience fee is non-refundable."
                }
            }

        },
        {
            name: "Biman Bangladesh Airlines",
            dac: '15:15',
            cxb: '16.30',
            type: 'Non-stop',
            timeDuration: '1h 15m',
            numberPlat: 'EDOM0623',
            prevPrice: 4499,
            currentPrice: 4009,
            img: BBA,
            details: {
                fullname: "Biman Bangladesh Airlines BG 437 | DH8",
                flightClass: "Economy",
                arivalTime: 'Mon, 12 Jun, 2023',
                leaveTime: 'Mon, 12 Jun, 2023',
                Baggage: {
                    Flight: 'DAC - CXB',
                    Cabin: "7 Kilograms",
                    CheckIn: "20 Kilograms",
                },
                Fare: {
                    FareSummary: "Adult x 1",
                    BaseFare: "BDT 3,774",
                    Tax: 'BDT 725'
                },
                Policy: {
                    Cancellation: "Cancellation Fee = Airline's Fee + GoZayaan Fee Refund Amount = Paid Amount - Cancellation Fee",
                    ReIssue: "Re-issue Fee = Airline's Fee + Fare Difference + GoZayaan Fee",
                    statment: "*The airline's fee is indicative and per person. Convenience fee is non-refundable."
                }
            }

        },
        {
            name: "Biman Bangladesh Airlines",
            dac: '15:15',
            cxb: '16.30',
            type: 'Non-stop',
            timeDuration: '1h 15m',
            numberPlat: 'EDOM0623',
            prevPrice: 4499,
            currentPrice: 4009,
            img: BBA,
            details: {
                fullname: "Biman Bangladesh Airlines BG 437 | DH8",
                flightClass: "Economy",
                arivalTime: 'Mon, 12 Jun, 2023',
                leaveTime: 'Mon, 12 Jun, 2023',
                Baggage: {
                    Flight: 'DAC - CXB',
                    Cabin: "7 Kilograms",
                    CheckIn: "20 Kilograms",
                },
                Fare: {
                    FareSummary: "Adult x 1",
                    BaseFare: "BDT 3,774",
                    Tax: 'BDT 725'
                },
                Policy: {
                    Cancellation: "Cancellation Fee = Airline's Fee + GoZayaan Fee Refund Amount = Paid Amount - Cancellation Fee",
                    ReIssue: "Re-issue Fee = Airline's Fee + Fare Difference + GoZayaan Fee",
                    statment: "*The airline's fee is indicative and per person. Convenience fee is non-refundable."
                }
            }

        }
    ]

    return (
        <div>
            <Navbar prop={{ isNavbar: false }} />
            <div className={`bg-white py-6`}>
                <div className={`${styles.flightContainer}`}>
                    {/* city filtering */}
                    <div className={`${bannerStyling.filterPackage} `}>
                        <div className={`${bannerStyling.filterItem}`}>
                            <input defaultChecked onClick={() => setWay('one')} type='radio' name='package' id='oneWay' />
                            <label htmlFor='oneWay'>One way</label>
                        </div>
                        <div className={`${bannerStyling.filterItem}`}>
                            <input checked={way == 'round'} onClick={() => setWay('round')} type='radio' name='package' id='roundWay' />
                            <label htmlFor='roundWay'>Round way</label>
                        </div>
                        <div onClick={() => setWay('multi')} className={`${bannerStyling.filterItem}`}>
                            <input checked={way == 'multi'} type='radio' name='package' id='multi' />
                            <label htmlFor='multi'>Multi City</label>
                        </div>
                    </div>

                    {/* main  content here */}
                    <div className={`grid gap-y-5 gap-x-3 md:gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-5  mb-[2rem] ${bannerStyling.flightContent}`}>
                        <div className={`${bannerStyling.tourContent} ${bannerStyling.hotelContent}`}>
                            <label htmlFor='tour'>FROM</label>
                            <select id='tour'>
                                <option defaultChecked>
                                    Cox Bazar
                                </option>
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
                        <div className={`${bannerStyling.tourContent} ${bannerStyling.hotelContent}`}>
                            <label htmlFor='tour'>TO</label>
                            <select id='tour'>
                                <option defaultChecked>
                                    Cox Bazar
                                </option>
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
                        <div className={`grid ${way == 'multi' ? 'grid-cols-1' : 'grid-cols-2'} gap-x-3 ${bannerStyling.tourContent} ${bannerStyling.hotelContent}`}>
                            <div>
                                <label htmlFor='tour'>JOURNEY DATE</label>
                                <input type='date' />
                            </div>
                            <div className={`${way == 'multi' ? 'hidden' : 'block'} border-l-4`}>
                                <label htmlFor='tour'>RETURN DATE</label>
                                {
                                    way == 'one' &&
                                    <p className={`cursor-pointer text-[11px] mt-1`} onClick={() => setWay('round')}>Save more on return flight</p>
                                }
                                {
                                    way == 'round' &&
                                    <input type='date' />
                                }

                            </div>
                        </div>
                        <div className={`${bannerStyling.tourContent} ${bannerStyling.hotelContent}`}>
                            <label htmlFor='tour'>TRAVELER, CLASS</label>
                            <h2>1 Traveler</h2>
                            <p>Economy</p>
                        </div>
                        <button className={`${styles.btn}`}>Modify Search</button>
                    </div>
                </div>
            </div>
            {
                filter &&
                <div className={`lg:block mt-8 bg-white max-w-[1112px] mx-auto py-4 rounded shadow-lg`}>
                    <FlightFilter prop = {{filter, setFilter}}/>
                </div>
            }
            <button onClick={() => setFilter(true)} className='px-6 py-2 lg:hidden z-50 rounded bg-[#fccd03] fixed left-1/2 bottom-24 -translate-x-1/2 flex items-center gap-x-3'><FaFilter /> <span>Filter</span></button>
            <div className={`${commonStyle.container} `}>
                <div className='flex gap-3 flex-col-reverse lg:flex-row justify-between  lg:mt-8'>
                    <div className='flex justify-between items-center bg-white py-4 px-8 rounded shadow-lg lg:w-4/5'>
                        <div>
                            <h2 className='text-[16px] font-bold text-[#1c3c6b]'>Cheapest</h2>
                            <p className='text-[12px] mt-1 text-[rgb(93,105,116]'>Showing the cheapest flights in ascending order</p>
                        </div>
                        <div>

                            <h2 className='text-[16px] font-bold text-[#1c3c6b]'>Fastest </h2>
                            <p className='text-[12px] mt-1 text-[rgb(93,105,116]'>Click to see the fastest flights in ascending order</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 items-center shadow-lg bg-white p-8 rounded lg:w-1/5'>
                        <MdWatchLater className='text-[30px]' />
                        <p className='text-[24px] font-bold text-[#1c3c6b]'>18: 50</p>
                    </div>
                </div>

            </div>
            <div className={`flex flex-col lg:flex-row gap-8 ${styles.flightContainer}`}>
                <div className='w-full'>
                    {/* show data here  */}
                    <div className="container mx-auto">
                        <FlightCard allFlight={allFlight} />
                    </div>

                </div>
                <div className={`w-full lg:w-[257px]`}>
                    {/* <div className='flex gap-x-4 items-center shadow-lg bg-white p-8 rounded mb-8'>
                        <MdWatchLater className='text-[30px]' />
                        <p className='text-[24px] font-bold text-[#1c3c6b]'>18: 50</p>
                    </div> */}
                    {/* need help section  */}
                    <div className="bg-white shadow-lg rounded-t-lg">
                        <h3 className='bg-[#0b74a7] p-3 text-white font-bold text-[16px] rounded-t-lg'>Need Help ?</h3>
                        <div className='flex p-2 gap-x-4 items-center my-4 rounded'>
                            <span className='bg-[#fccd03] p-2 rounded-full'>
                                <IoIosContact />
                            </span>
                            <p className='text-[14px] text-[#1c3c6b]'>+88 09678 332211</p>
                        </div>
                        <hr />
                        <div className='flex p-2 gap-x-4 items-center my-4 rounded'>
                            <span className='bg-[#fccd03] p-2 rounded-full'>
                                <RiMessengerLine />
                            </span>
                            <p className='text-[14px] text-[#1c3c6b]'>m.me/GoZayaanBD</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flight;
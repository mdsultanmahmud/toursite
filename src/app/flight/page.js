'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import bannerStyling from '../styles/banner.module.css'
import styles from '../styles/flight.module.css'
import { MdWatchLater } from 'react-icons/md'
import { IoIosContact } from 'react-icons/io'
import { RiMessengerLine } from 'react-icons/ri'
//card image importing
import BBA from '../../../public/flight/bba.png'
import FlightCard from '../components/FlightCard';
const Flight = () => {
    const [way, setWay] = useState("one")
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

    const items = [
        {
          title: 'Section 1',
          content: 'Content of section 1',
        },
        {
          title: 'Section 2',
          content: 'Content of section 2',
        },
        {
          title: 'Section 3',
          content: 'Content of section 3',
        },
      ];
    return (
        <div>
            <Navbar isNavbar={false} />
            <div className={`bg-white mb-8`}>
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
                    <div className={`grid gap-x-5 grid-cols-5 mb-[2rem] ${bannerStyling.flightContent}`}>
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
            <div className={`flex gap-x-8 ${styles.flightContainer}`}>
                <div className='w-full'>
                    <div className='flex justify-between items-center bg-white py-4 px-8 rounded shadow-lg'>
                        <div className='border-r-2'>
                            <h2 className='text-[16px] font-bold text-[#1c3c6b]'>Cheapest</h2>
                            <p className='text-[12px] mt-1 text-[rgb(93,105,116]'>Showing the cheapest flights in ascending order</p>
                        </div>
                        <hr />
                        <div>

                            <h2 className='text-[16px] font-bold text-[#1c3c6b]'>Fastest </h2>
                            <p className='text-[12px] mt-1 text-[rgb(93,105,116]'>Click to see the fastest flights in ascending order</p>
                        </div>
                    </div>
                    {/* show data here  */}
                    <div className="container mx-auto p-4">
                        <h1 className="text-2xl font-bold mb-4">Accordion Example</h1>
                        <FlightCard items={items} />
                    </div>

                </div>
                <div className={`w-[257px]`}>
                    <div className='flex gap-x-4 items-center shadow-lg bg-white p-8 rounded mb-8'>
                        <MdWatchLater className='text-[30px]' />
                        <p className='text-[24px] font-bold text-[#1c3c6b]'>18: 50</p>
                    </div>
                    {/* need help section  */}
                    <div className="bg-white shadow-lg rounded-lg">
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
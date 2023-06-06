'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import bannerStyling from '../styles/banner.module.css'
import styles from '../styles/flight.module.css'
const Flight = () => {
    const [way, setWay] = useState("one")
    return (
        <div>
            <Navbar isNavbar={false} />
            <div className={`bg-white`}>
                <div className={`${styles.flightContainer} mb-8`}>
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
        </div>
    );
};

export default Flight;
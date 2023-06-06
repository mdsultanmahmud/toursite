'use client'
import React, { useState } from 'react';
import styles from '../styles/banner.module.css'
// import react icons 
import { RxCross1 } from 'react-icons/rx'
import Link from 'next/link';
const SearchFlight = ({ search }) => {
    const [way, setWay] = useState("one")

    return (
        <div className={`${search == 'flight' ? 'block' : 'hidden'}`}>
            {/* city filtering */}
            <div className={`${styles.filterPackage}`}>
                <div className={`${styles.filterItem}`}>
                    <input defaultChecked onClick={() => setWay('one')} type='radio' name='package' id='oneWay' />
                    <label htmlFor='oneWay'>One way</label>
                </div>
                <div className={`${styles.filterItem}`}>
                    <input checked={way == 'round'} onClick={() => setWay('round')} type='radio' name='package' id='roundWay' />
                    <label htmlFor='roundWay'>Round way</label>
                </div>
                <div onClick={() => setWay('multi')} className={`${styles.filterItem}`}>
                    <input checked={way == 'multi'} type='radio' name='package' id='multi' />
                    <label htmlFor='multi'>Multi City</label>
                </div>
            </div>

            {/* main  content here */}
            <div className={`grid gap-x-5 grid-cols-4 mb-[2rem] ${styles.flightContent}`}>
                <div className={`${styles.tourContent} ${styles.hotelContent}`}>
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
                <div className={`${styles.tourContent} ${styles.hotelContent}`}>
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
                <div className={`grid ${way == 'multi' ? 'grid-cols-1' : 'grid-cols-2'} gap-x-3 ${styles.tourContent} ${styles.hotelContent}`}>
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
                <div className={`${styles.tourContent} ${styles.hotelContent}`}>
                    <label htmlFor='tour'>TRAVELER, CLASS</label>
                    <h2>1 Traveler</h2>
                    <p>Economy</p>
                </div>
            </div>

            {/* for multi way  */}
            <div className={`grid gap-x-5 grid-cols-4 mb-[2rem] ${styles.flightContent} ${way == 'multi' ? 'block' : 'hidden'}`}>
                <div className={`${styles.tourContent} ${styles.hotelContent}`}>
                    <label htmlFor='tour'>FROM</label>
                    <select id='tour'>
                        <option defaultChecked>
                            Select a City
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
                    <p className='text-[12px]'>Click to choose an airport</p>
                </div>
                <div className={`${styles.tourContent} ${styles.hotelContent}`}>
                    <label htmlFor='tour'>TO</label>
                    <select id='tour'>
                        <option defaultChecked>
                            Select a City
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
                    <p className='text-[12px]'>Click to choose an airport</p>
                </div>
                <div className={`grid ${way == 'multi' ? 'grid-cols-1' : 'grid-cols-2'} gap-x-3 ${styles.tourContent} ${styles.hotelContent}`}>
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
                <div className={`${styles.tourContent} ${styles.hotelContent} flex justify-between items-center`}>
                    <p className='text-[12px] text-[rgb(28,60,107)] font-bold cursor-pointer'>Add another city </p>
                    <RxCross1 className='cursor-pointer' />

                </div>
            </div>

           <Link href={"/flight"}> <button>Search</button></Link>

        </div >
    );
};

export default SearchFlight;
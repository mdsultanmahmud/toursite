import React from 'react';
import commonStyle from '../styles/common.module.css'
import styles from '../styles/banner.module.css'
import Link from 'next/link';
const SearchHotel = ({ search }) => {
    return (
        <div className={`${search == 'hotel' ? 'block' : 'hidden'}`}>
            <div className={`grid gap-y-5 gap-x-3 md:gap-x-5 grid-cols-2 lg:grid-cols-4 mt-[2rem]`}>
                <div className={`${styles.tourContent} ${styles.hotelContent}`}>
                    <label htmlFor='tour'>CITY/HOTEL/RESORT/AREA</label>
                    <select id='tour'>
                        <option defaultChecked>
                            Cox Bazar
                            <span>Bangladesh</span>
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
                    <label htmlFor='tour'>CHECK IN</label>
                    <input type='date' />
                </div>
                <div className={`${styles.tourContent} ${styles.hotelContent}`}>
                    <label htmlFor='tour'>CHECK OUT</label>
                    <input type='date' />
                </div>
                <div className={`${styles.tourContent} ${styles.hotelContent}`}>
                    <label htmlFor='tour'>ROOMS & GUESTS</label>
                    <h2>{1} Room, {2} Guests</h2>
                    <p>2 Adults</p>
                </div>
            </div>
            <div className={`flex gap-4 md:gap-x-8 items-center flex-wrap ${styles.selectionContainer}`}>
                <h4>Search For</h4>
                <div>
                    <input id='business' type='checkbox' />
                    <label htmlFor='business'>Business</label>
                </div>
                <div>
                    <input id='Couples' type='checkbox' />
                    <label htmlFor='Couples'>Couples</label>
                </div>
                <div>
                    <input id='Families' type='checkbox' />
                    <label htmlFor='Families'>Families</label>
                </div>
                <div>
                    <input id='Friends' type='checkbox' />
                    <label htmlFor='Friends'>Friends</label>
                </div>
                <div>
                    <input id='Solo' type='checkbox' />
                    <label htmlFor='Solo'>Solo</label>
                </div>
            </div>
            <Link href={"/hotel"}> <button>Search</button></Link>
        </div>
    );
};

export default SearchHotel;
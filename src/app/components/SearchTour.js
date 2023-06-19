import React from 'react';
import commonStyle from '../styles/common.module.css'
import styles from '../styles/banner.module.css'
import Link from 'next/link';
const SearchTour = ({ search }) => {
    return (
        <div className={`${search == 'tour' ? 'block' : 'hidden'}`}>
            <div className={`${styles.tourContent} my-[2rem] block w-full`}>
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
            <Link href={"/tour"}><button>Search</button></Link>
        </div>
    );
};

export default SearchTour;
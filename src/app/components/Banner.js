import React from 'react';
import commonStyle from '../styles/common.module.css'
import styles from '../styles/banner.module.css'
import Image from 'next/image';
//import image 
import flight from '../../../public/flight-icon.svg'
import hotel from '../../../public/hotel-icon.svg'
import tour from '../../../public/tour-icon.svg'
const Banner = () => {
    return (
        <div className={`${styles.bannerContainer}`}>
            <div className={commonStyle.container}>
                <div className={`${styles.bannerContent} drop-shadow-2xl bg-white p-4 rounded-xl`}>
                    {/* category filtering  */}
                    <div className={`${styles.catItemContainer} drop-shadow-2xl bg-white p-2 rounded-xl`}>
                        <div className={`flex items-center gap-x-[80px]`}>
                            <div className={styles.itemContainer}>
                                <Image src={flight} alt='icon of flight' width={30} height={20} />
                                <p>Flight</p>
                            </div>
                            <div className={styles.itemContainer}>
                                <Image src={hotel} alt='icon of flight' width={30} height={20} />
                                <p>Hotel</p>
                            </div>
                            <div className={styles.itemContainer}>
                                <Image src={tour} alt='icon of flight' width={30} height={20} />
                                <p>Tour</p>
                            </div>
                        </div>
                    </div>
                    {/* city filtering */}
                    <div className={`${styles.filterPackage}`}>
                        <div className={`${styles.filterItem}`}>
                            <input type='radio' name='package' id='oneWay' />
                            <label htmlFor='oneWay'>One way</label>
                        </div>
                        <div className={`${styles.filterItem}`}>
                            <input type='radio' name='package' id='twoWay' />
                            <label htmlFor='twoWay'>Two way</label>
                        </div>
                        <div className={`${styles.filterItem}`}>
                            <input type='radio' name='package' id='multi' />
                            <label htmlFor='multi'>Multi City</label>
                        </div>
                    </div>

                    {/* main  content here */}
                    <div>
                        <div>
                            <h3>From</h3>
                            <p>Dhaka</p>
                            <p>habijaabbi....</p>
                        </div>
                    </div>
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
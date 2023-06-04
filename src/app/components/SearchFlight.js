import React from 'react';
import commonStyle from '../styles/common.module.css'
import styles from '../styles/banner.module.css'
const SearchFlight = ({search}) => {
    return (
        <div className={`${search == 'flight' ? 'block' : 'hidden'}`}>
            <h1>Search here for the flight</h1>
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
        </div>
    );
};

export default SearchFlight;
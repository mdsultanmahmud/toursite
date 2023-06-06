
import commonStyle from '../styles/common.module.css'
import styles from '../styles/banner.module.css'
import Image from 'next/image';
//import image 
import flight from '../../../public/flight-icon.svg'
import hotel from '../../../public/hotel-icon.svg'
import tour from '../../../public/tour-icon.svg'
import SearchFlight from './SearchFlight';
import SearchHotel from './SearchHotel';
import SearchTour from './SearchTour';
import Link from 'next/link';
import Navbar from './Navbar';
const Banner = ({ searchingProps }) => {
    const { search, setSearch } = searchingProps
    return (
        <div className={`${styles.bannerContainer}`}>
            <Navbar isNavbar={true}/>
            <div className={commonStyle.container}>
                <div className={`${styles.bannerContent} drop-shadow-2xl bg-white p-4 rounded-xl`}>
                    {/* category filtering  */}
                    <div className={`${styles.catItemContainer} drop-shadow-2xl bg-white rounded-xl`}>
                        <div className={`flex items-center gap-x-[80px]`}>
                            <div onClick={() => setSearch("flight")} className={`${styles.itemContainer} ${search == 'flight' ? styles.activeTab : ''}`}>
                                <Image src={flight} alt='icon of flight' width={30} height={20} />
                                <p>Flight</p>
                            </div>
                            <div onClick={() => setSearch("hotel")} className={`${styles.itemContainer} ${search == 'hotel' ? styles.activeTab : ''}`}>
                                <Image src={hotel} alt='icon of flight' width={30} height={20} />
                                <p>Hotel</p>
                            </div>
                            <div onClick={() => setSearch("tour")} className={`${styles.itemContainer} ${search == 'tour' ? styles.activeTab : ''}`}>
                                <Image src={tour} alt='icon of flight' width={30} height={20} />
                                <p>Tour</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SearchFlight search={search} />
                        <SearchHotel search={search} />
                        <SearchTour search={search} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
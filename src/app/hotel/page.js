
import Navbar from '../components/Navbar';
import styles from '../styles/hotel.module.css'
import bannerStyle from '../styles/banner.module.css'
import commonStyles from '../styles/common.module.css'
import { AiTwotoneStar } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { RxCrossCircled } from 'react-icons/rx'
import { IoIosArrowForward } from 'react-icons/io'
import HotelCard from '../components/HotelCard';
import hotelOne from '../../../public/popularHotel/hotelOne.jpg'
import hotelTwo from '../../../public/popularHotel/hotelTwo.jpg'
import { v4 as uuidv4 } from 'uuid';
const Hotel = () => {
    const hotels = [
        {
            id: uuidv4(),
            name: 'Ocean Paradise Hotel & Resort',
            star: 5,
            location: "Kalatoli, Cox's Bazar",
            prevRate: 7906,
            currentRate: 3985,
            f1: " Air Conditioning",
            f2: " Accessible Bathroom",
            f3: "In-room Accessibility",
            discount: 49,
            img: hotelOne
        },
        {
            id: uuidv4(),
            name: 'Seagull Hotels Ltd.',
            star: 5,
            location: "Beach road, Cox's Bazar",
            prevRate: 7510,
            currentRate: 4205,
            f1: "Air Conditioning",
            f2: " Disability Friendly",
            f3: "Couple Friendly",
            discount: 43,
            img: hotelTwo
        },
        {
            id: uuidv4(),
            name: 'Ocean Paradise Hotel & Resort',
            star: 5,
            location: "Kalatoli, Cox's Bazar",
            prevRate: 7906,
            currentRate: 3985,
            f1: " Air Conditioning",
            f2: " Accessible Bathroom",
            f3: "In-room Accessibility",
            discount: 49,
            img: hotelOne
        },
        {
            id: uuidv4(),
            name: 'Seagull Hotels Ltd.',
            star: 5,
            location: "Beach road, Cox's Bazar",
            prevRate: 7510,
            currentRate: 4205,
            f1: "Air Conditioning",
            f2: " Disability Friendly",
            f3: "Couple Friendly",
            discount: 43,
            img: hotelTwo
        },
    ]
    return (
        <div>
            <Navbar prop={{isNavbar: false}} />
            <div className='bg-white py-6 mt-16'>
                <div className={` ${commonStyles.container}`}>
                    <div className={`grid gap-x-5 grid-cols-5 mt-[2rem]`}>
                        <div className={`${bannerStyle.tourContent} ${bannerStyle.hotelContent}`}>
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
                        <div className={`${bannerStyle.tourContent} ${bannerStyle.hotelContent}`}>
                            <label htmlFor='tour'>CHECK IN</label>
                            <input type='date' />
                        </div>
                        <div className={`${bannerStyle.tourContent} ${bannerStyle.hotelContent}`}>
                            <label htmlFor='tour'>CHECK OUT</label>
                            <input type='date' />
                        </div>
                        <div className={`${bannerStyle.tourContent} ${bannerStyle.hotelContent}`}>
                            <label htmlFor='tour'>ROOMS & GUESTS</label>
                            <h2>{1} Room, {2} Guests</h2>
                            <p>2 Adults</p>
                        </div>
                        <button className={`${commonStyles.btn}`}> Modify Search</button>
                    </div>
                </div>
            </div>
            {/* main section starts here  */}
            <div className={`py-4 ${commonStyles.container} flex gap-x-8`}>
                <div className={`${styles.hotelFilterCon} drop-shadow-lg rounded`}>
                    <div className={`${styles.filterOption} flex justify-between items-center`}>
                        <h2>Filter</h2>
                        <button>Reset</button>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Popular Filters</h3>
                        <div className={`${styles.formControl}`}>
                            <input type='checkbox' id='air' />
                            <label htmlFor='air'>5 Star</label>
                        </div>
                        <div className={`${styles.formControl}`}>
                            <input type='checkbox' id='air' />
                            <label htmlFor='air'>Air Conditioning</label>
                        </div>
                        <div className={`${styles.formControl}`}>
                            <input type='checkbox' id='air' />
                            <label htmlFor='air'>Wi-Fi</label>
                        </div>
                        <div className={`${styles.formControl}`}>
                            <input type='checkbox' id='air' />
                            <label htmlFor='air'>3 Star</label>
                        </div>
                        <div className={`${styles.formControl}`}>
                            <input type='checkbox' id='air' />
                            <label htmlFor='air'>Breakfast</label>
                        </div>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Property Name</h3>
                        <div className={`${styles.propertyCon}`}>
                            <div className='flex justify-between items-center py-2  border-r border-[#1c3c6b]'>
                                <input placeholder='property Name' type='text' />
                                <RxCrossCircled size={22} className='mr-2' />
                            </div>
                            <BsSearch size={22} className='mx-2' />
                        </div>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Price Range</h3>
                        <div className={`${styles.priceRangeCon}`}>
                            <input type='number' />
                            <span>to</span>
                            <input type='number' />
                            <button><IoIosArrowForward size={22} /></button>
                        </div>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>User Rating</h3>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>1.5 Poor</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>2 Poor</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>2.5 Okay</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>3 Okay</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>3.5 Good</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>4 Good</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>4.5 Excellent</label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Star Rating</h3>
                        <div className={`${styles.ratingCon}`}>
                            <p className='flex items-center gap-x-1'>
                                <span>5</span>
                                <AiTwotoneStar />
                            </p>
                            <p className='flex items-center gap-x-1'>
                                <span>4</span>
                                <AiTwotoneStar />
                            </p>
                            <p className='flex items-center gap-x-1'>
                                <span>3</span>
                                <AiTwotoneStar />
                            </p>
                            <p className='flex items-center gap-x-1'>
                                <span>2</span>
                                <AiTwotoneStar />
                            </p>
                            <p className='flex items-center gap-x-1'>
                                <span>1</span>
                                <AiTwotoneStar />
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Accommodation Type</h3>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Resort Hotel</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Resort</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Hotel</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Apart-hotel</label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Facilities</h3>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Breakfast</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Fireplace</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Non-smoking</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Restaurant</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Restaurant</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Wi-Fi</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Parking</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>24-hour Security</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Business Facilities</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Swimming Pool</label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Amenities</h3>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Air Conditioning</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Balcony</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Bathtub</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Ceiling Fan</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Clothes Dryer</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Connecting Rooms</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Cooker</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Cot on Demand</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Dining Area</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Disability Friendly</label>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={`mt-6 mb-10`}>
                        <h3>Neighbourhood</h3>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Beach road</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Cox`&apos;`s Bazar</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Cox`&apos;`s Bazar Sadar</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Hotel - Motel Zone</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Hotel-Motel Zone</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Jhilwanja</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>kolatoli</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Laboni Point</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>South Kolatoli</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Sugandha Point</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Ukhia</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.hotelSearchCon} ${commonStyles.container}`}>
                    <div className={`flex justify-between items-center`}>
                        <h2 className='text-[16px] font-bold'>43 properties found</h2>
                        <select className='px-6 py-2 outline-none bg-whtie rouned'>
                            <option defaultChecked value={'pop'}>Popularity</option>
                            <option value={'price'}>Price</option>
                        </select>
                    </div>
                    <div className='my-4'>
                        {
                            hotels.map((hotel, index) => <HotelCard key={index} hotel = {hotel}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotel;
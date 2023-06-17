'use client'
import styles from '../styles/navbar.module.css'
import logo from '../../../public/logo.svg'
import flight from '../../../public/flight-icon.svg'
import hotel from '../../../public/hotel-icon.svg'
import tour from '../../../public/tour-icon.svg'
import bdt from '../../../public/bdt.svg'
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const Navbar = ({ prop }) => {
    const [shownav, setShowNav] = useState(false)
    const { search, setSearch, isNavbar } = prop
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            if (scrollY >= 170) {
                setShowNav(true)
            } else {
                setShowNav(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.navContainer} ${shownav || !isNavbar ? 'shadow-lg bg-white' : 'bg-transparent'}`}>
            <nav className={`${styles.navContent}`}>
                <div>
                    <Link href={"/"}><Image src={logo} alt='Logo of the website' width={130} height={40} /></Link>
                </div>
                <div className={`hidden lg:flex items-center gap-12  ${shownav || !isNavbar ? 'flex' : 'hidden'}`}>
                    <Link href={'/'}>
                        <div onClick={() => setSearch("flight")} className={`${styles.itemContainer} ${search == 'flight' ? styles.activeTab : ''}`}>
                            <Image src={flight} alt='icon of flight' width={30} height={20} />
                            <p>Flight</p>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div onClick={() => setSearch("hotel")} className={`${styles.itemContainer} ${search == 'hotel' ? styles.activeTab : ''}`}>
                            <Image src={hotel} alt='icon of flight' width={30} height={20} />
                            <p>Hotel</p>
                        </div>
                    </Link>
                    <Link href={'/'}>
                        <div onClick={() => setSearch("tour")} className={`${styles.itemContainer} ${search == 'tour' ? styles.activeTab : ''}`}>
                            <Image src={tour} alt='icon of flight' width={30} height={20} />
                            <p>Tour</p>
                        </div>
                    </Link>
                </div>
                <div className='flex items-center gap-3'>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="m-1 flex items-center gap-1">
                            <Image src={bdt} alt='image of bdt' width={24} height={24} />
                            <span>BDT</span>
                            <IoIosArrowDown />
                        </label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    <Link href={"/account/signin"}><button className={styles.btn}>Sign In</button></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
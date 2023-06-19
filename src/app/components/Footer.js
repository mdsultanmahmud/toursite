import React from 'react';
import styles from '../styles/footer.module.css'
import Link from 'next/link';
import visa from '../../../public/visa.svg'
import amex from '../../../public/amex.svg'
import master from '../../../public/master.svg'
import dbbl from '../../../public/dbbl.svg'
import bkash from '../../../public/bkash.svg'
import nogod from '../../../public/nogod.svg'
import upay from '../../../public/upay.svg'
import union from '../../../public/union.svg'
import tap from '../../../public/tap.svg'
import Image from 'next/image';
import { FaFacebookF } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineHome } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import footLogo from '../../../public/footerLogo.png'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiBookAdd } from 'react-icons/bi'
const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={`${styles.footerContent}`}>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <h2>Discover</h2>
                        <div className={`grid gap-2 grid-cols-2`}>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>Refund Policy</Link>
                            <Link href={"/"}>Terms</Link>
                            <Link href={"/"}>EMI Policy</Link>
                            <Link href={"/"}>Talent & Culture</Link>
                            <Link href={"/"}>Talent & Culture</Link>
                        </div>
                    </div>
                    <div>
                        <h2>Payment Methods</h2>
                        <div className={`grid gap-1 grid-cols-4`}>
                            <Image src={visa} alt='footer payment icon' width={50} height={40} />
                            <Image src={amex} alt='footer payment icon' width={50} height={40} />
                            <Image src={master} alt='footer payment icon' width={50} height={40} />
                            <Image src={dbbl} alt='footer payment icon' width={50} height={40} />
                            <Image src={bkash} alt='footer payment icon' width={50} height={40} />
                            <Image src={nogod} alt='footer payment icon' width={50} height={40} />
                            <Image src={upay} alt='footer payment icon' width={50} height={40} />
                            <Image src={union} alt='footer payment icon' width={50} height={40} />
                            <Image src={tap} alt='footer payment icon' width={50} height={40} />
                        </div>
                    </div>
                    <div>
                        <h2>Need Help ?</h2>
                        <div >
                            <p>
                                We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM).
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2>Contact</h2>
                        <div >
                            <p>info@gozayaan.com</p>
                            <p>info@gozayaan.com</p>
                            <div className={styles.iconContainer}>
                                <span><FaFacebookF /></span>
                                <span><AiFillYoutube /></span>
                                <span><BsInstagram /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='my-8' />
                <div className='flex items-center justify-between pb-8'>
                    <Image src={footLogo} alt='footer logo' width={110} height={42} />
                    <p>© Copyright GoZayaan Ltd.</p>
                </div>
                <div className={`${styles.mdFooterContainer} lg:hidden`}>
                    <div className={`${styles.mdFooter}`}>
                        <Link href={'/'}>
                            <AiOutlineHome size={22} className='text-[#1c3c6b]' />
                            <h1>Home</h1>
                        </Link>
                        <Link href={'/'}>
                            <BiBookAdd size={22} className='text-[#1c3c6b]' />
                            <h1>Bookings</h1>
                        </Link>
                        <Link href={'/'}>
                            <BsFillPersonFill size={22} className='text-[#1c3c6b]' />
                            <h1>Account</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
'use client'
import { useState } from 'react';
import styles from '../styles/flightcard.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { RiFilter2Fill } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'
import wOne from '../../../public/flight/w-1.svg'
import wTwo from '../../../public/flight/w-2.svg'
import wThree from '../../../public/flight/w-3.svg'
import wFour from '../../../public/flight/w-4.svg'
import Image from 'next/image';
const FlightFilter = ({ prop }) => {
    const { filter, setFilter } = prop
    const [dropdown, setDropdown] = useState(false)
    return (
        <div className={`${styles.filterContainer} relative`}>
            <div className={`items-center gap-x-8  ${!dropdown ? 'flex' : 'hidden'} hidden lg:flex`}>
                <div className='flex items-center gap-x-4 ml-8'>
                    <h2 className='flex items-center gap-x-2 text-[16px] font-bold text-[#1c3c6b]'> <RiFilter2Fill /> Filters</h2>
                    <div className='flex items-center gap-x-2'>
                        <p className='text-[16px] font-bold text-[#1c3c6b]'>Stops:</p>
                        <span className='w-[30px] h-[25px] border border-[#1c3c6b] shadow ml-1 text-center'>0</span>
                        <span className='w-[30px] h-[25px] border border-[#1c3c6b] shadow ml-1 text-center'>1</span>
                        <span className='w-[30px] h-[25px] border border-[#1c3c6b] shadow ml-1 text-center'>2</span>
                    </div>
                </div>
                <ul className='flex gap-x-8'>
                    <li>Pertially Refundable</li>
                    <li onClick={() => setDropdown(true)}><span>Layover Time</span> <IoIosArrowDown /></li>
                    <li onClick={() => setDropdown(true)}><span>Depart Time</span> <IoIosArrowDown /></li>
                    <li onClick={() => setDropdown(true)}><span>Airlines</span> <IoIosArrowDown /></li>
                    <li onClick={() => setDropdown(true)}><span>More Filters</span> <IoIosArrowDown /></li>
                </ul>
            </div>
            <div className={`justify-between items-center ${dropdown ? 'flex' : 'hidden'} px-4 mb-2`}>
                <h1 className='text-[16px] font-bold text-[#1c3c6b]'>Showing 18 Flight Results</h1>
                <div className='flex gap-x-6 items-center'>
                    <button onClick={() => setDropdown(false)} className={`rounded px-3 py-1 border border-[#1c3c6b] text-[12px] text-[#1c3c6b]`}>Close</button>
                    <button className='text-[12px] text-[#1c3c6b]'>Reset All Filters</button>
                </div>
            </div>
            <div className={`${styles.dropdown} ${dropdown || filter ? styles.active : ''}`}>
                <div className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 px-6`}>
                    <div>
                        <h2>Stops</h2>
                        <div className='flex items-center gap-x-4 mb-2'>
                            <span className='w-[30px] h-[25px] border border-[#1c3c6b] shadow ml-1 text-center rounded'>0</span>
                            <span className='w-[30px] h-[25px] border border-[#1c3c6b] shadow ml-1 text-center rounded'>1</span>
                            <span className='w-[30px] h-[25px] border border-[#1c3c6b] shadow ml-1 text-center rounded'>2</span>
                        </div>
                        <h2>Fare Type:</h2>
                        <div className='mb-2'>
                            <p className='text-[12px]'>Pertially Refundable</p>
                        </div>
                        <h2>Price Range</h2>
                        <div>
                            <input type='range' className='w-full' />
                            <div className='flex justify-between items-center'>
                                <p className='text-[12px]'>BDT 4,509 <br /> Min</p>
                                <p className='text-[12px]'>BDT 4,999 <br /> Max</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Schedule</h2>
                        <div>
                            <h4 className='py-2 text-[14px]'>Onward Depart Time</h4>
                            <div className='flex items-center justify-between mb-4 rounded border border-[#1c3c6b]'>
                                <div className='text-center p-2 border-r-2 border-[#1c3c6b]'>
                                    <Image src={wOne} alt='img' width={20} height={20} className='mx-auto block' />
                                    <p className='text-[12px]'>00 - 06</p>
                                </div>
                                <div className='text-center p-2 border-r-2 border-[#1c3c6b]'>
                                    <Image src={wTwo} alt='img' width={20} height={20} className='mx-auto block' />
                                    <p className='text-[12px]'>06 - 12</p>
                                </div>
                                <div className='text-center p-2 border-r-2 border-[#1c3c6b]'>
                                    <Image src={wThree} alt='img' width={20} height={20} className='mx-auto block' />
                                    <p className='text-[12px]'>12 - 18</p>
                                </div>
                                <div className='text-center p-2'>
                                    <Image src={wFour} alt='img' width={20} height={20} className='mx-auto block' />
                                    <p className='text-[12px]'>18 - 00</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='py-2 text-[#1c3c6b] text-[14px] bg-[#dae1e7] rounded'>Layover Time</h4>
                            <div>
                                <span className='w-[40px] text-[14px]  h-[25px] border border-[#1c3c6b] shadow text-center rounded-l'>0h - 5h</span>
                                <span className='w-[40px] text-[14px]  h-[25px] border border-[#1c3c6b] shadow text-center'>5h - 10h</span>
                                <span className='w-[40px] text-[14px]  h-[25px] border border-[#1c3c6b] shadow text-center'>10h - 15h</span>
                                <span className='w-[40px] text-[14px]  h-[25px] border border-[#1c3c6b] shadow text-center rounded-r'>15h+</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Airlines</h2>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='air' />
                                <label htmlFor='air'>Air Astra</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='bba' />
                                <label htmlFor='bba'>Biman Bangladesh Airlines</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='usbangla' />
                                <label htmlFor='usbangla'>US Bangla</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='novair' />
                                <label htmlFor='novair'>NOVOAIR</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Aircraft</h2>
                        <div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='AT7' />
                                <label htmlFor='AT7'>AT7</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='ATR725' />
                                <label htmlFor='ATR725'>ATR725</label>
                            </div>
                            <div className={`${styles.formControl}`}>
                                <input type='checkbox' id='DH8' />
                                <label htmlFor='DH8'>DH8</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => setFilter(false)} className={`${styles.filterBtn}`}>Reset All Filters</button>
                <button onClick={() => setFilter(false)} className='p-4 absolute top-1 right-2 lg:hidden'><ImCross size={22} /></button>
            </div>

        </div>
    );
};



export default FlightFilter;
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { IoIosArrowDown } from 'react-icons/io'
import { CgArrowRight } from 'react-icons/cg'
import styles from '../styles/flightcard.module.css'
const FlightCard = ({ allFlight }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    let [tab, setTab] = useState('baggage')
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div >
            {allFlight.map((item, index) => (
                <div key={index} className='bg-white drop-shadow-lg rounded-lg mb-8'>
                    <div className='flex flex-col lg:flex-row justify-between border-b-2 border-[#1c3c6b]'>
                        <div className='flex justify-between p-4 lg:p-0'>
                            {/* name part  */}
                            <div className='flex items-center gap-x-2 p-4'>
                                <Image src={item.img} alt='flight img' width={40} height={50} />
                                <p className='text-[14px] text-[#1c3c6b]'>{item.name}</p>
                            </div>
                            {/* time duration part  */}
                            <div className='flex items-center gap-x-8 py-4'>
                                <div>
                                    <p className='text-[18px] text-[#1c3c6b] font-bold'>{item.dac}</p>
                                    <p className='text-[14px] text-gray-600'>DAC</p>
                                </div>
                                <div>
                                    <p className='text-[12px] border-b-2 border-[#1c3c6b] px-2'>{item.type}</p>
                                    <hr />

                                </div>
                                <div>
                                    <p className='text-[18px] text-[#1c3c6b] font-bold'>{item.cxb}</p>
                                    <p className='text-[14px] text-gray-600'>CXB</p>
                                </div>
                                <div>
                                    <p>{item.timeDuration}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#ecf3fe] p-4'>
                            <p className='text-[#0b74a7] uppercase text-[14px] text-right'>{item.numberPlat}</p>
                            <div>
                                <del className='text-[14px] '> BDT {item.prevPrice}</del>
                                <span className='text-[18px] text-[#1c3c6b] font-bold'> BDT {item.currentPrice}</span>
                            </div>
                            <Link href={"/"} className='flex justify-between items-center bg-[#fccd03] px-4 py-2 rounded font-bold text-[14px] text-[#1c3c6b] mt-2 '>
                                <span>Select</span>
                                <BsArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className='my-4 py-2 px-4 flex items-center justify-between'>
                        <button
                            className="px-2 my-0 focus:outline-none flex items-center gap-x-2 text-[14px]"
                            onClick={() => handleClick(index)}
                        >
                            <span>Partially Refundable</span>
                            <IoIosArrowDown />
                        </button>
                        <button
                            className="px-2 my-0 focus:outline-none flex items-center gap-x-2 text-[14px]"
                            onClick={() => handleClick(index)}
                        >
                            <span>Flight Details</span>
                            <IoIosArrowDown />
                        </button>
                    </div>


                    {/* flight details  */}
                    {activeIndex === index && (
                        <div className="border-t-2 border-[#1c3c6b]">
                            <div className='grid  grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0'>
                                <div className="border-r-2 border-[#1c3c6b] p-4">
                                    <h2 className={`${styles.title}`}>Flight Details</h2>
                                    <button className={`${styles.detailsBtn}`}>DAC-CXB</button>
                                    <div className='flex items-center justify-between border-b-2 border-[#1c3c6b] my-4'>
                                        <div className='flex items-center gap-x-2 p-4'>
                                            <Image src={item.img} alt='flight img' width={40} height={50} />
                                            <p className='text-[14px] text-[#1c3c6b]'>{item.name}</p>
                                        </div>
                                        <p>({item.details.flightClass})</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div>
                                            <p className='text-[18px] text-[#1c3c6b] font-bold'>{item.dac}</p>
                                            <p className='text-[14px] text-gray-600'>{item.details.leaveTime} <br /> DAC</p>
                                        </div>
                                        <div>
                                            <p className='border-t-2 border-[#1c3c6b] px-2'>{item.timeDuration}</p>
                                        </div>
                                        <div>
                                            <p className='text-[18px] text-[#1c3c6b] font-bold'>{item.cxb}</p>
                                            <p className='text-[14px] text-gray-600'>{item.details.arivalTime} <br /> CXB</p>
                                        </div>

                                    </div>
                                </div>

                                <div className={`${styles.detailsContainer}`}>
                                    <div className='border-b-2 border-[#1c3c6b] p-4 flex gap-x-6 items-center'>
                                        <h2 className={`${tab == 'baggage' ? styles.active : ''}`} onClick={() => setTab('baggage')}>Baggage</h2>
                                        <h2 className={`${tab == 'fire' ? styles.active : ''}`} onClick={() => setTab('fire')}>Fire</h2>
                                        <h2 className={`${tab == 'policy' ? styles.active : ''}`} onClick={() => setTab('policy')}>Policy</h2>
                                    </div>
                                    <div className={`${tab == 'baggage' ? 'block' : 'hidden'} relative h-[80%]`}>
                                        <div className='flex items-center justify-between p-4'>
                                            <h3>Flight</h3>
                                            <h3>Cabin</h3>
                                            <h3>Check-in</h3>
                                        </div>
                                        <div className='flex items-center justify-between p-4'>
                                            <p>DAC - CXB</p>
                                            <p>7 Kilograms</p>
                                            <p>20 Kilograms</p>
                                        </div>
                                        <div className='flex items-center justify-between p-4 absolute bottom-0 left-0 w-full bg-[#ecf3fe]'>
                                            <h4>Total <span>(1 Traveler)</span></h4>
                                            <h4>BDT 4,499</h4>
                                        </div>
                                    </div>
                                    <div className={`${tab == 'fire' ? 'block' : 'hidden'} relative h-[80%]`}>
                                        <div className='flex items-center justify-between p-4'>
                                            <h3>Fare Summary</h3>
                                            <h3>Base Fare</h3>
                                            <h3>Tax</h3>
                                        </div>
                                        <div className='flex items-center justify-between p-4'>
                                            <p>Adult x 1</p>
                                            <p>BDT 3,774</p>
                                            <p>BDT 725</p>
                                        </div>
                                        <div className='flex items-center justify-between p-4 absolute bottom-0 left-0 w-full bg-[#ecf3fe]'>
                                            <h4>Total <span>(1 Traveler)</span></h4>
                                            <h4>BDT 4,499</h4>
                                        </div>
                                    </div>
                                    <div className={`${tab == 'policy' ? 'block' : 'hidden'} relative h-[350px] ${styles.policyContent}`}>
                                        <div className='p-4'>
                                            <h5>Cancellation</h5>
                                            <hr />
                                            <p>{item.details.Policy.Cancellation}</p>
                                            <p>{item.details.Policy.ReIssue}</p>
                                            <h5>Re-issue</h5>
                                            <hr />
                                            <p>{item.details.Policy.ReIssue}</p>
                                            <p className='mb-5'>{item.details.Policy.statment}</p>
                                        </div>
                                        <div className='flex items-center justify-between p-4 absolute bottom-0 left-0 w-full bg-[#ecf3fe]'>
                                            <h4>Total <span>(1 Traveler)</span></h4>
                                            <h4>BDT 4,499</h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FlightCard;
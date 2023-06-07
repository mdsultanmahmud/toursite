'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import {CgArrowRight} from 'react-icons/cg'

const FlightCard = ({ allFlight }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div >
            {allFlight.map((item, index) => (
                <div key={index} className='bg-white drop-shadow-lg rounded-lg my-8'>
                    <div className='flex justify-between'>
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
                                <p className='text-[12px]'>{item.type}</p>
                                <hr/>
                                
                            </div>
                            <div>
                                <p className='text-[18px] text-[#1c3c6b] font-bold'>{item.cxb}</p>
                                <p className='text-[14px] text-gray-600'>CXB</p>
                            </div>
                            <div>
                                <p>{item.timeDuration}</p>
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
                    <hr />
                    <div className='my-4 py-2 px-4 flex items-center justify-between'>
                        <button
                            className="p-2 focus:outline-none flex items-center gap-x-2 text-[14px]"
                            onClick={() => handleClick(index)}
                        >
                            <span>Partially Refundable</span>
                            <IoIosArrowDown/>
                        </button>
                        <button
                            className="p-2 focus:outline-none flex items-center gap-x-2 text-[14px]"
                            onClick={() => handleClick(index)}
                        >
                            <span>Flight Details</span>
                            <IoIosArrowDown/>
                        </button>
                    </div>

                    {/* flight details  */}
                    {activeIndex === index && (
                        <div className="p-2">
                            {item.details.fullname}
                            <p>loremdlfsld ksdlf dlskjf ;sdjfds;lewirlmfdsokfmdfkdlfm</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FlightCard;
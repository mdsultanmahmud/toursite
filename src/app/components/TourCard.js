import Image from 'next/image';
import React from 'react';
import { MdLocationOn, MdOutlineAccessibleForward } from 'react-icons/md';
import { IoIosPeople, IoMdPeople } from 'react-icons/io'
import { BsBookmarkPlusFill, BsStopwatchFill } from 'react-icons/bs'
import { GiThreeFriends } from 'react-icons/gi'
const TourCard = ({ tour }) => {
    const { name, img, location, prevRate, currentRate, discount, f1, f2, f3, option1, option2, option3 } = tour
    return (
        <div className='my-6'>
            <div className="rounded-t-lg rounded-b-none card card-side bg-base-100 shadow p-3">
                <Image src={img} alt='img' width={220} height={200} className='rounded h-[230px]' />
                <div className="card-body p-4">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex items-start justify-between'>
                        <div className='w-[55%]'>
                            <div className='flex items-center gap-x-1 mb-4'>
                                <MdLocationOn />
                                <p className='text-[12px]'>{location}</p>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap '>
                                <p className='text-[12px] text-gray-600' ><BsStopwatchFill className='inline mr-1' size={20} /> {f1}</p>
                                <p className='text-[12px] text-gray-600' ><IoIosPeople className='inline mr-1' size={20} />{f2}</p>
                                <p className='text-[12px] text-gray-600' ><BsBookmarkPlusFill className='inline mr-1' size={20} /> {f3}</p>
                            </div>
                            <div className='flex items-center gap-2 flex-wrap '>
                                <span className='px-2 py-1 mt-1 font-semibold inline rounded text-[#4788b6] bg-[#ebf0f4] text-[12px] flex items-center gap-x-1'><GiThreeFriends /> <span>{option1}</span></span>
                                <span className='px-2 py-1 mt-1 font-semibold inline rounded text-[#4788b6] bg-[#ebf0f4] text-[12px] flex items-center gap-x-1'><IoMdPeople /> <span>{option2}</span></span>
                                <span className='px-2 py-1 mt-1 font-semibold inline rounded text-[#4788b6] bg-[#ebf0f4] text-[12px] flex items-center gap-x-1'><IoMdPeople /> <span>{option3}</span></span>
                            </div>

                        </div>
                        <div className='text-[12px] text-right'>
                            <p className='text-[12px] my-1'>starts from <br /> <del className=' text-red-500 font-semibold text-[15px]'>BDT {prevRate}</del></p>
                            <h3 className='text-[20px] font-bold '>BDT {currentRate}</h3>
                            <p className='text-[12px] mt-1'>per person <br />  <span className='px-2 py-1 mt-1 font-semibold rounded text-[#4788b6] bg-[#ebf0f4]'>{discount}% off</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-200 mt-0 shadow-xl rounded-b-lg px-2 pb-2'>
                <p className='text-[#1c3c6b]  text-semibold'>&info;*{discount}% discount for selected payment methods.</p>
            </div>
        </div>
    );
};


export default TourCard;
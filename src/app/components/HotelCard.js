import Image from 'next/image';
import React from 'react';
import { AiFillStar } from 'react-icons/ai'
import { MdLocationOn, MdOutlineAccessibleForward } from 'react-icons/md'
import { FiCrosshair } from 'react-icons/fi'
import Link from 'next/link';
const HotelCard = ({ hotel }) => {
    const { name, star, img, location, prevRate, currentRate, discount, f1, f2, f3,id } = hotel
    return (
        <div className='my-6'>
            <Link href={`/hotel/${id}`}>
                <div className="card card-side bg-base-100 shadow-xl ruonded p-3 flex flex-col md:flex-row">
                    <Image src={img} alt='img' width={300} height={500} className='rounded-lg' />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-x-3'>
                                <div className='flex items-center gap-x-1 border p-1 rounded'>
                                    <AiFillStar className='text-yellow-500' />
                                    <span className='text-[12px]'>{star}</span>
                                    <span className='text-[12px]'>Star</span>
                                </div>
                                <div className='flex items-center gap-x-1'>
                                    <MdLocationOn />
                                    <p className='text-[12px]'>{location}</p>
                                </div>
                            </div>
                            <span className='text-[12px] px-2 py-1 bg-[#ff7f5c] rounded-lg text-white'>{discount}% off</span>
                        </div>
                        <div className='flex items-start justify-between'>
                            <div className='flex items-center gap-x-3 flex-wrap w-[55%]'>
                                <p className='text-[12px] flex items-center gap-x-1 text-gray-600' ><FiCrosshair /> <span>{f1}</span></p>
                                <p className='text-[12px] flex items-center gap-x-1 text-gray-600' ><MdOutlineAccessibleForward /> <span>{f2}</span></p>
                                <p className='text-[12px] flex items-center gap-x-1 text-gray-600' ><MdOutlineAccessibleForward /> <span>{f3}</span></p>
                            </div>
                            <div className='text-[12px] text-right'>
                                <p className='text-[12px] text-[#62e4b2] font-semibold '>*Add. discount no payment</p>
                                <p className='text-[12px] my-1'>starts from <br /> <del className=' text-red-500 font-semibold text-[15px]'>BDT {prevRate}</del></p>
                                <h3 className='text-[20px] font-bold '>BDT {currentRate}</h3>
                                <p className='text-[12px] mt-1'>for 1 Night, per room</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HotelCard;
"use client"
import Image from 'next/image';
import React from 'react';
import { FcCheckmark } from 'react-icons/fc'
import { FiCrosshair } from 'react-icons/fi';
import { IoIosInformationCircle } from 'react-icons/io'
import { MdOutlineAccessibleForward } from 'react-icons/md';
import { FaBed } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const RoomDetails = ({ room }) => {
    console.log(window)
    const { name, type, person, adult, capacity, extraBed, guest, isSmoke, Characteristics, size,
        view, media, bedroom, food, others, images, discount, prevRate, currentRate } = room
    return (
        <div className='grid grid-cols-2 bg-white drop-shadow-lg p-3 rouned mb-8'>
            <div className='p-4 border-r-2'>
                <div>
                    <div>
                        <PhotoProvider>
                            {
                                images.map((image, index) => <PhotoView key={image.id} src={image.img}>
                                    <Image src={image.img} alt='img of the room' height={300} width={500}
                                        className={`w-full h-[300px] cursor-pointer ${index >= 1 ? 'hidden' : ''}`}
                                    />
                                </PhotoView>)
                            }
                        </PhotoProvider>
                    </div>
                    <PhotoProvider>
                        <div className='grid grid-cols-3 gap-x-3 my-5'>
                            {
                                images.map((image, index) => <PhotoView key={image.id} src={image.img}>
                                    <Image src={image.img} alt='img of the room' height={100} width={100}
                                        className={`w-[100px] h-[100px] rounded cursor-pointer ${index >= 3 ? 'hidden' : ''}`}
                                    />
                                </PhotoView>)
                            }
                        </div>
                    </PhotoProvider>
                </div>
                <h2>{name}</h2>
                <div>
                    <p className='flex items-center gap-x-2 text-[12px] text-gray-600'><FaBed /> <span>{type}</span></p>
                    <p className='flex items-center gap-x-2 text-[12px] text-gray-600'><BsFillPersonFill /> <span> Maximum Room Capacity: {capacity}</span></p>
                </div>

                <button className='underline font-bold text-[12px] text-[#1c3c6b] my-4'>View room details </button>
                <div>
                    <p className='my-4 font-semibold text-[12px]'>Hurry Up! Only 3 Rooms Left</p>
                    <div className='flex items-center gap-x-4'>
                        {
                            media.map((m, index) => <div key={index} className='flex items-center gap-x-2'>

                                <FcCheckmark size={22} />
                                <p>{m.fs}</p>

                            </div>)
                        }
                    </div>
                </div>
                <div>
                    <p>Safe/Locker</p>
                    <button className='underline font-bold text-[12px] text-[#1c3c6b] my-4'>Show All</button>
                </div>
            </div>
            <div className='p-3'>
                <div className='flex justify-between items-center'>
                    <h5 className='px-4 py-2 rounded-lg text-black bg-base-300'>Option 1</h5>
                    <h5 className='px-4 py-2 rounded-xl text-slate-300 bg-[#ff7f5c]'>{discount} %off</h5>
                </div>
                <div className='flex items-start justify-between mt-5'>
                    <div className='w-[55%]'>
                        <p className='text-[12px] flex items-center gap-x-1 text-gray-600' ><FiCrosshair /> <span>{person}</span></p>
                        <p className='text-[12px] flex items-center gap-x-1 text-gray-600' ><MdOutlineAccessibleForward /> <span>Breakfast Included</span></p>
                        <p className='text-[12px] flex items-center gap-x-1 text-gray-600' ><MdOutlineAccessibleForward /> <span>Bed & Breakfast-Refundable</span></p>
                        <ul className='list-disc'>
                            <li>Free cancellation before 00:01 on Sun, 18 Jun 2023</li>
                        </ul>
                    </div>
                    <div className='text-[12px] text-right'>
                        <p className='text-[12px] text-[#62e4b2] font-semibold '>*Add. discount no payment</p>
                        <p className='text-[12px] my-1'>starts from <br /> <del className=' text-red-500 font-semibold text-[15px]'>BDT {prevRate}</del></p>
                        <h3 className='text-[20px] font-bold '>BDT {currentRate}</h3>
                        <p className='text-[12px] mt-1'>+ BDT 460 Tax & Fees <br />for 1 Night</p>
                        <button className='px-6 py-2 font-semibold mt-3 rounded-xl text-black text-[12px] bg-[#fccd03]'>Add a room</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
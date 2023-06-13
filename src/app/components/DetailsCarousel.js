import Image from 'next/image';
import React from 'react';

const DetailsCarousel = ({image}) => {
    return (
        <div id={`slide${image.id}`} className="carousel-item relative w-full">
            <Image src={image.img} className="w-full h-[420px]" width={500} height={420} alt='img of tour' />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${image.id == 1 ? 8 : image.id - 1}`} className="btn btn-circle">❮</a>
                <a href={`#slide${image.id == 8 ? 1 : image.id + 1}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default DetailsCarousel;
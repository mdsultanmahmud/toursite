import React from 'react';
import styles from '../styles/common.module.css'
import whyimg from '../../../public/why-gozayaan-lg.webp'
import Image from 'next/image';
const WhyGozayan = () => {
    return (
        <div className='my-12'>
            <div className={`${styles.container}`}>
                <Image className='w-[100%] rounded-2xl' src={whyimg} alt='img of the why gozayaan' width={1000} height={600} />
            </div>
        </div>
    );
};

export default WhyGozayan;
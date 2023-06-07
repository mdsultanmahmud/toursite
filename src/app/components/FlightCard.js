'use client'
import { useState } from 'react';



const FlightCard = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <button
                        className="border-b-2 border-gray-300 p-2 focus:outline-none"
                        onClick={() => handleClick(index)}
                    >
                        {item.title}
                    </button>
                    {activeIndex === index && (
                        <div className="p-2">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FlightCard;
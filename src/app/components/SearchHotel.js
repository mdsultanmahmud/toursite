import React from 'react';

const SearchHotel = ({search}) => {
    return (
        <div className={`${search == 'hotel' ? 'block' : 'hidden'}`}>
            <h1>Search here for hotel</h1>
        </div>
    );
};

export default SearchHotel;
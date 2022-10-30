import React from 'react';

const CoupleRow = ({c}) => {
    const { picture, name } = c
    return (
        <div>
             <div 
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
                            <img src={picture} alt="Shoes" className='w-10/12 shadow-lg rounded-lg' style={{ height: '250px' }} />
                            <h3 className='font-bold text-primary text-sm mr-10 text-center my-2'>{name}</h3>
                        </div>
        </div>
    );
};

export default CoupleRow;
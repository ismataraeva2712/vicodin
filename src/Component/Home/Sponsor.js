import React from 'react';
import company1 from '../../img/company1.png'
import c2 from '../../img/c2.png'
import c3 from '../../img/c3.png'
import c4 from '../../img/c4.png'
import c5 from '../../img/c5.png'
const Sponsor = () => {
    return (
        <div className='grid lg:grid-cols-5 mt-12 px-12'>
            <img src={company1} alt="" />
            <img src={c2} alt="" />
            <img src={c3} alt="" />
            <img src={c4} alt="" />
            <img src={c5} alt="" />
        </div>
    );
};

export default Sponsor;
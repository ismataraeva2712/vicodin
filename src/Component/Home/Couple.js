import React, { useEffect, useState } from 'react';

import CoupleRow from './CoupleRow';

const Couple = () => {
    const [couple,setCouple]=useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCouple(data))
    },[])
    
    return (
        <div className='px-12'>
        <h1 className='font-bold text-primary text-3xl text-center my-5'>Our Couple Success Story</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {
                couple.map(c=><CoupleRow
                key={c._id}
                c={c}
                ></CoupleRow>)
            }
        </div>
      
       
        

    </div>
    );
};

export default Couple;
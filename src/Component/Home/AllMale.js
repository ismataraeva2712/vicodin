import React, { useEffect, useState } from 'react';
import Men from './Men';

const AllMale = () => {
    const [mens,setMens]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/men")
        .then(res=>res.json())
        .then(data=>setMens(data))
    },[])
    return (
       
            <div className='px-12'>
            <h1 className='font-bold text-primary text-3xl text-center my-5'>Match your partner (Male) </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    mens.slice(0,6).map(men=><Men 
                    key={men._id}
                    men={men}
                    ></Men>)
                }
            </div>
        </div>
    );
};

export default AllMale;
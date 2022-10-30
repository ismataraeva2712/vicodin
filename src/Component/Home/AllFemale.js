import React, { useEffect, useState } from 'react';
import Female from './Female';

const AllFemale = () => {
    const [womens,setWoMens]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/women")
        .then(res=>res.json())
        .then(data=>setWoMens(data))
    },[])
    return (
        <div>
            <div className='px-12'>
        <h1 className='font-bold text-primary text-3xl text-center my-5'>Match your partner (Female) </h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                womens.map(women=><Female
                key={women._id}
                women={women}
                ></Female>)
            }
        </div>
      </div>
       
        </div>
    );
};

export default AllFemale;
import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';
import Female from './Female';

const FemaleMember = () => {
    const [womens,setWoMens]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/women")
        .then(res=>res.json())
        .then(data=>setWoMens(data))
    },[])
    return (
        <div className='px-12'>
        <h1 className='font-bold text-primary text-3xl text-center my-5'>Match your partner (Female) </h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                womens.slice(0,3).map(women=><Female
                key={women._id}
                women={women}
                ></Female>)
            }
        </div>
      
        <div className='text-center  my-12'>
        <AnimationOnScroll  animateIn="animate__bounceIn" >
       <Link to='/feMale'> <button  className='btn btn-primary  text-white'>See More</button></Link>
        </AnimationOnScroll>
        </div>
        

    </div>
    );
};

export default FemaleMember;
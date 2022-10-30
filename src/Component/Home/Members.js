import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import Men from './Men';
import { AnimationOnScroll } from 'react-animation-on-scroll';
const Members = () => {
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
                    mens.slice(0,3).map(men=><Men 
                    key={men._id}
                    men={men}
                    ></Men>)
                }
            </div>
          
            <div className='text-center  my-12'>
            <AnimationOnScroll  animateIn="animate__bounceIn" >
           <Link to='/allMale'> <button  className='btn btn-primary  text-white'>See More</button></Link>
            </AnimationOnScroll>
            </div>
            

        </div>
    );
};

export default Members;
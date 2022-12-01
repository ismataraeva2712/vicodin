import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Css/style.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import {FaUserAlt } from 'react-icons/fa';
import {AiFillTags } from 'react-icons/ai';
import {SlCalender } from 'react-icons/sl';
const Blog = ({blog}) => {
    const{name,writer,date,Category,picture}=blog
    return (
        <div>
           
           
             <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-72' style={{height:'250px'}} src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <div className='flex justify-between'>
    <div className='flex'>
    <FaUserAlt className='font-bold text-lg text-primary mr-2'></FaUserAlt>
    <p className='uppercase font-bold'> {writer}</p>
    </div>
    <div className='flex'>
    <AiFillTags className='font-bold text-lg text-primary mr-1'></AiFillTags>
    <p className='uppercase font-bold'> {Category}</p>
    </div>
   
    </div>
   
  
   
    <h2 className="card-title">
      {name}
      
    </h2>
  
   
    <div className="divider"></div>
    <div className='flex justify-between'>
    <div className='flex'>
    <SlCalender className='font-bold text-lg text-primary mr-2'></SlCalender>
    <p className='uppercase font-bold'> {date}</p>
    </div>
    <div className='flex'>
    <p className='font-bold text-primary'>Read More</p>
    </div>
   
    </div>
   
    
  </div>
</div>
            
        </div>
    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode,Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Css/style.css";

// import required modules

import { Navigation } from "swiper";
import "swiper/css/navigation";
const Blogs = () => {
    const[blogs,setBlogs]=useState([])
    useEffect(()=>{
fetch('http://localhost:5000/blogsection')
.then(res=>res.json())
.then(data=>setBlogs(data))
    },[])
    return (
        <div className='px-12 mt-12'>
            <h1 className="text-5xl font-bold text-center">Leatest Blog</h1>
            <Swiper
             
             slidesPerView={4}
             spaceBetween={30}
             freeMode={true}
             pagination={{
                clickable: true,
            }}
             navigation={true}
             modules={[FreeMode,Pagination,Navigation]}
             className="mySwiper"
         >
             
             
{/* {
   blogs.map(blog=>{
    <SwiperSlide>
   <h1>heloo</h1>
    </SwiperSlide>
   })
} */}
<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12'>
   {
           
   blogs.map(blog=><Blog
    key={blog._id}
    blog={blog}
    ></Blog>)
}
</div>

    
          
            </Swiper>
        </div>
    );
};

export default Blogs;
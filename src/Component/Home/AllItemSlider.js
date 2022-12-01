import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../Css/style.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { TbDental } from 'react-icons/tb';
import { MdOutlineHealthAndSafety } from 'react-icons/md';
import { GiLoveInjection } from 'react-icons/gi';
import {GiMedicines } from 'react-icons/gi';
import {RiHealthBookFill } from 'react-icons/ri';
import {BiHealth } from 'react-icons/bi';
import {FaBed } from 'react-icons/fa';
import {GiHealthCapsule } from 'react-icons/gi';
import { Navigation } from "swiper";
import "swiper/css/navigation";
const AllItemSlider = () => {
    return (
        <div className='mt-12'>
            <Swiper
             
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[FreeMode, Pagination,Navigation]}
                className="mySwiper"
            >
                 <SwiperSlide><div className='text-center'>
                    <GiLoveInjection className='font-bold text-6xl text-primary'></GiLoveInjection>
                    <h3 className='text-lg'>All Products</h3>
                </div></SwiperSlide>
                <SwiperSlide><div style={{height: '120px'}} className='text-center'>
                    <TbDental className='font-bold text-6xl text-primary'></TbDental>
                    <h3 className='text-lg'>Dental Item</h3>
                </div></SwiperSlide>
                <SwiperSlide><div className='text-center'>
                    <MdOutlineHealthAndSafety className='font-bold text-6xl text-primary'></MdOutlineHealthAndSafety>
                    <h3 className='text-lg'>Accessories</h3>
                </div></SwiperSlide>
                <SwiperSlide><div className='text-center'>
                    <GiMedicines className='font-bold text-6xl text-primary'></GiMedicines>
                    <h3 className='text-lg'>Medicine Item</h3>
                </div></SwiperSlide>
                <SwiperSlide><div className='text-center'>
                    <FaBed className='font-bold text-6xl text-primary'></FaBed>
                    <h3 className='text-lg'>Medicine Cap</h3>
                </div></SwiperSlide>
                <SwiperSlide><div className='text-center'>
                    <RiHealthBookFill className='font-bold text-6xl text-primary'></RiHealthBookFill>
                    <h3 className='text-lg'>Best Deal</h3>
                </div></SwiperSlide>
                <SwiperSlide><div className='text-center'>
                    <BiHealth className='font-bold text-6xl text-primary'></BiHealth>
                    <h3 className='text-lg'>All Products</h3>
                </div></SwiperSlide>
               
                <SwiperSlide><div className='text-center'>
                    <GiHealthCapsule className='font-bold text-6xl text-primary'></GiHealthCapsule>
                    <h3 className='text-lg'>Medicine Collection</h3>
                </div></SwiperSlide>

            </Swiper>
            <div className="divider"></div> 
        </div>
    );
};

export default AllItemSlider;
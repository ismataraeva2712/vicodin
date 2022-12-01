import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'
import banner4 from '../../img/banner4.jpg'
const Banner = () => {
    return (
        <div className='text-start'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='' style={{ background: `url(${banner1})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat' ,}}>
          
        <div className="p-40 min-h-screen max-w-full"   >
  <h1 className='text-2xl uppercase '>Top <span className='text-primary'> Deal</span></h1>
  <h1 className='text-5xl font-bold my-3'>SERVIKAL GLOVES</h1>
  <h1 className='text-xl  '>Get up to 50% discount off today.</h1>
  <button className="btn btn-accent uppercase mt-5">Get Started</button>
</div>
        </SwiperSlide>
        <SwiperSlide className='' style={{ background: `url(${banner2})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat' ,}}>
          
        <div className="p-40 min-h-screen max-w-full"   >
  <h1 className='text-2xl uppercase '>Top <span className='text-primary'> Deal</span></h1>
  <h1 className='text-5xl font-bold my-3'>ONLINE PHARMACY</h1>
  <h1 className='text-xl  '>Get up to 50% discount off today.</h1>
  <button className="btn btn-accent mt-5">Get Started</button>
</div>
        </SwiperSlide>
       
        <SwiperSlide className='' style={{ background: `url(${banner3})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat' ,}}>
          
        <div className="p-40 min-h-screen max-w-full"   >
  <h1 className='text-2xl uppercase '>Top <span className='text-primary'> Deal</span></h1>
  <h1 className='text-5xl font-bold my-3'>PRESSURE MONITOR</h1>
  <h1 className='text-xl  '>Get up to 50% discount off today.</h1>
  <button className="btn btn-accent mt-5">Get Started</button>
</div>
        </SwiperSlide>
        <SwiperSlide className='' style={{ background: `url(${banner4})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat' ,}}>
          
        <div className="p-40 min-h-screen max-w-full"   >
  <h1 className='text-2xl uppercase '>Top <span className='text-primary'> Deal</span></h1>
  <h1 className='text-5xl font-bold my-3'>DENTAL ITEMS</h1>
  <h1 className='text-xl  '>Get up to 50% discount off today.</h1>
  <button className="btn btn-accent uppercase mt-5">Get Started</button>
</div>
        </SwiperSlide>
       
       

      </Swiper>
        </div>
    );
};

export default Banner;
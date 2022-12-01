import React from 'react';
import siram from '../../img/siram.jpg'
import siram2 from '../../img/siram2.jpg'
import siram3 from '../../img/siram3.jpg'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const TopDiscount = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-10 px-12 mb-12'>
            <AnimationOnScroll animateIn="animate__bounceIn" duration={5}>
                <div className='rounded-lg shadow-2xl' style={{ background: `url(${siram})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '220px' }}>
                    <div className='p-4  mt-10'> <h4 className="text-sm pt-4 ">BEAUTY PACK</h4>
                        <h3 className="text-xl font-bold">Facial Mask Up To 30%</h3>
                        <button className='uppercase btn btn-primary text-white mt-3'>Shop Now</button>
                    </div>

                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn" duration={5}>
                <div className='rounded-lg shadow-2xl' style={{ background: `url(${siram2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '220px' }}>
                    <div className='p-4 mt-10 text-white'> <h4 className="text-sm pt-4 ">BEAUTY PACK</h4>
                        <h3 className="text-xl font-bold">Face Wash Up To 75%</h3>
                        <button className='uppercase btn btn-neutral text-primary  mt-3'>Shop Now</button>
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceIn" duration={5}>
                <div className='rounded-lg shadow-2xl' style={{ background: `url(${siram3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '220px' }}>
                    <div className='p-4 mt-10'> <h4 className="text-sm pt-4">BEAUTY PACK</h4>
                        <h3 className="text-xl font-bold">Cream Bright Up To 25%</h3>
                        <button className='uppercase btn btn-primary text-white mt-3'>Shop Now</button>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    );
};

export default TopDiscount;
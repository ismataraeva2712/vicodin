import React from 'react';
import b1 from '../../img/b1.jpg'
import b2 from '../../img/b2.jpg'
import b3 from '../../img/b3.jpg'
import b4 from '../../img/b4.jpg'

import b5 from '../../img/b5.jpg'
import '../Css/Banner.css'
const Banner = () => {
    return (
        <div>
        <div class="hero banner " style={{ background: `url(${b5})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat' ,}}>
            <div class="hero-content flex-col lg:flex-row-reverse transbox">
                <div
                    data-aos="fade-down"
                    data-aos-offset="200"
                    data-aos-delay="60"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"

                >  <img src={b2} class="lg:max-w-sm rounded-lg shadow-2xl" /></div>

                <div>
                    <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    ><h1 class="text-5xl font-bold text-primary">TAMIL <span className='text-primary'>MATRIMONY</span></h1></div>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    > <p class="py-6 text-primary font-bold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae .</p></div>
                    <div data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="70"
                        data-aos-duration="1400"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                    > <button class="btn btn-primary text-white">Get Started</button></div>


                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;
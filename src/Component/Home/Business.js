import React from 'react';
import { FaTruck, FaUsers ,FaPeopleCarry} from 'react-icons/fa';
import {BsFillCreditCard2FrontFill} from 'react-icons/bs';
import {AiFillGift} from 'react-icons/ai';
const Business = () => {
    return (
        <div className='mt-12 text-center'>
             
             <div
                            data-aos="zoom-out"
                            data-aos-offset="200"
                            data-aos-delay="60"
                            data-aos-duration="1200"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true">
             <div class="stats stats-vertical lg:stats-horizontal shadow">
  
             <div class="stat">
   
    <div class="stat-title font-bold text-xl">15 days returns</div>
    <div className='flex justify-center item-center my-2'><FaPeopleCarry className='text-primary text-5xl mr-3' /> </div>
    <div class="stat-desc">Moneyback guarantee</div>
  </div>

  <div class="stat">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title font-bold text-xl">Annual revenue</div>
    <div class="stat-value text-primary">2.6 M</div>
    <div class="stat-desc">21% more than last Year</div>
  </div>
  
  <div class="stat">
    <div class="stat-title font-bold text-xl">Reviews</div>
   <div className='flex justify-center item-center my-2'><FaUsers className='text-primary text-5xl mr-3' /> </div>
    <div class="stat-desc">42k +</div>
  </div>
  
  <div class="stat">
    <div class="stat-title font-bold text-xl">Free shipping</div>
    <div className='flex justify-center item-center my-2'><FaTruck className='text-primary text-5xl mr-3' /></div>
    <div class="stat-desc">On all orders over $49.00</div>
  
  </div>
  <div class="stat">
    <div class="stat-title font-bold text-xl">Secure checkout</div>
    <div className='flex justify-center item-center my-2'><BsFillCreditCard2FrontFill className='text-primary text-4xl mr-3' /> </div>
    <div class="stat-desc">Protected by Paypal</div>
  </div>
  <div class="stat">
    <div class="stat-title font-bold text-xl">Offer & gift here</div>
    <div className='flex justify-center item-center my-2'><AiFillGift className='text-primary text-4xl mr-3' /> </div>
    <div class="stat-desc">On all orders over</div>
  </div>
 
  
  
</div>
</div>
        </div>
    );
};

export default Business;
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const FeatureProduct = ({featureProduct}) => {
   const{name,genericName,price,previousPrice,picture}=featureProduct
    return (
        <AnimationOnScroll animateIn="animate__bounceIn" duration={5}>
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className='w-72' style={{height:'250px'}} src={picture} alt="Shoes" /></figure>
  <div className="card-body">
  <p className='uppercase'>{name}</p>
   
    <h2 className="card-title">
      {genericName}
      <div className="badge badge-primary text-neutral">NEW</div>
    </h2>
  
    <div className='flex'><p className='p-0 m-0 text-lg'>$ {price}</p>
    <p><s className='text-red-600 text-lg'>$ {previousPrice}</s></p>
    <p></p>
    <p></p>
    <p></p>
    </div>
    <div className="card-actions justify-end">
      <div className="btn btn-primary  text-neutral font-bold uppercase">Add +</div> 
     
    </div>
  </div>
</div>
        </div>
        </AnimationOnScroll>
    );
};

export default FeatureProduct;
import React from 'react';
import vaccine from '../../img/vaccine.jpg'
const Vaccine = () => {
    return (
        <div className='mt-12' style={{ background: `url(${vaccine})`, backgroundSize: 'cover',backgroundRepeat:'no-repeat' ,height:'350px'}}>
            <div className='px-12 pt-10 ' >
            <h5 className='text-primary font-bold '>Todays Hot Offer</h5>
            <h2 className='text-4xl font-bold'>Free Covid-19 Vaccine
Campaign Ticket</h2>
<h6>Cur tantas regiones barbarorum obiit, tot maria transmist
summo bono fruitur id est voluptate barbarorum</h6>
<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    sec
  </div>
</div>
<button className='btn btn-primary mt-3'>BOOK NOW</button>
            </div>
          
        </div>
    );
};

export default Vaccine;
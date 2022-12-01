import React from 'react';
import partners from '../../img/partners.jpg'
import doctor2 from '../../img/doctor2.jpg'
import {BsFillTelephoneForwardFill } from 'react-icons/bs';
const MedicalPartner = () => {
  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-2 px-12'>

      <div> <img src={partners} className="rounded-lg shadow-2xl" /></div>
      <div className='ml-5'>
        <h1 className="text-5xl font-bold">Your faithful partners Medical Goods</h1>
        <h3 className="text-lg ">Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</h3>
       
        <p >  <input  type="checkbox" checked="checked" className="checkbox checkbox-success " /> Better security for patient privacy and information.</p>
        <p >  <input type="checkbox" checked="checked" className="checkbox checkbox-success" /> More products at lower prices.</p>
        <p >  <input type="checkbox" checked="checked" className="checkbox checkbox-success " /> connect customers with the power of eCommerce at all.</p>
        <div className="flex flex-col w-full">
 
  <div className="divider"></div> 
  <div className="flex w-full">
  <div className="grid h-20 flex-grow card  rounded-box place-items-center">
    <div className='flex'>
    <div className="avatar">
  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={doctor2} />
  </div>
</div>
<div className='my-5 ml-2'>
<h4 className='text-lg '>
Jerry Henson</h4>
<h4 className=' '>
Medical Specialist</h4>
</div>
    </div>
    </div>
  <div className="divider divider-horizontal"></div>
  <div className="grid h-20 flex-grow  rounded-box place-items-center">
    <div className='flex'>
      <div>   <BsFillTelephoneForwardFill className='font-bold text-4xl text-primary'></BsFillTelephoneForwardFill>
                   </div>
                   <div className=' ml-3'>
<h4 className=' '>
Get Support</h4>
<h4 className=' '>
123-456-789-10</h4>
</div>
    </div>
  </div>
</div>
</div>
      </div>

    </div>

  );
};

export default MedicalPartner;
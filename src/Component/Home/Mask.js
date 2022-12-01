import React from 'react';
import mask from '../../img/mask.jpg'

import { RiSurgicalMaskFill } from 'react-icons/ri';
import {CgEditMask} from 'react-icons/cg';
import {GiWashingMachine} from 'react-icons/gi';
import {FaLayerGroup} from 'react-icons/fa';
const Mask = () => {
    return (
        <div className='mt-12 px-12 grid sm:grid-cols-1 lg:grid-cols-2'>
            <div><img src={mask} className="rounded-lg shadow-2xl" /></div>
            <div className='px-12 pt-10 '>
                <h2  className='text-primary font-bold '>N95 Facial Covering Mask</h2>
                <h2 className='text-5xl font-bold'>Grade A Safety Masks For Sale. Haurry Up!</h2>
                <p>Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                <div className='grid grid-cols-2 mt-5 gap-6'>
                    <div className='flex'>< RiSurgicalMaskFill className='font-bold text-4xl text-primary'></ RiSurgicalMaskFill> <p className='text-lg ml-2'>Activated Carbon</p></div>
                    <div className='flex'>< CgEditMask className='font-bold text-4xl text-primary'></CgEditMask> <p className='text-lg ml-2'>Breathing Valve</p></div>
                    <div className='flex'>< FaLayerGroup className='font-bold text-4xl text-primary'></ FaLayerGroup> <p className='text-lg ml-2'>6 Layer Filteration</p></div>
                    <div className='flex'>< GiWashingMachine className='font-bold text-4xl text-primary'></ GiWashingMachine> <p className='text-lg ml-2'>Rewashes & Reusable</p></div>
                </div>
            </div>
        </div>
    );
};

export default Mask;
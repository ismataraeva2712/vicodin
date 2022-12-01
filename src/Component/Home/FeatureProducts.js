import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeatureProduct from './FeatureProduct';

const FeatureProducts = () => {
    const[featureProducts,setFeatureProducts]=useState([])
    useEffect(()=>{
fetch('http://localhost:5000/featureProduct')
.then(res=>res.json())
.then(data=>setFeatureProducts(data))
    },[])
    return (
        <div className='px-12 mt-12'>
            <h1 className="text-5xl font-bold text-center">Featured Products</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12'>
{
    featureProducts.map(featureProduct=><FeatureProduct
    key={featureProduct._id}
    featureProduct={featureProduct}
    ></FeatureProduct>)
}
            </div>
        </div>
    );
};

export default FeatureProducts;
import React, { useEffect } from 'react';
import { useState } from 'react';
import LeatestProduct from './LeatestProduct';

const LeatestProducts = () => {
    const[leatestProducts,setleatestProducts]=useState([])
    useEffect(()=>{
fetch('http://localhost:5000/leatestProduct')
.then(res=>res.json())
.then(data=>setleatestProducts(data))
    },[])
    return (
        <div  className='px-12 mt-12'>
           <h1 className="text-5xl font-bold text-center">Leatest Product</h1> 
           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12'>
{
    leatestProducts.map(leatestProduct=><LeatestProduct
    key={leatestProduct._id}
    leatestProduct={leatestProduct}
    ></LeatestProduct>)
}
            </div>
        </div>
    );
};

export default LeatestProducts;
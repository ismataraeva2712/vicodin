import React from 'react';
import AllItemSlider from './AllItemSlider';
import Banner from './Banner';
import Blogs from './Blogs';
import Business from './Business';
import FeatureProducts from './FeatureProducts';
import Footer from './Footer';
import LeatestProducts from './LeatestProducts';
import Mask from './Mask';
import MedicalPartner from './MedicalPartner';
import Sponsor from './Sponsor';
import TopDiscount from './TopDiscount';
import Vaccine from './Vaccine';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllItemSlider></AllItemSlider>
            <MedicalPartner></MedicalPartner>
            <TopDiscount></TopDiscount>
            
            <FeatureProducts></FeatureProducts>
            <Vaccine></Vaccine>
            <LeatestProducts></LeatestProducts>
            <Mask></Mask>
            <Business></Business>
            <Blogs></Blogs>
            <Sponsor></Sponsor>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;
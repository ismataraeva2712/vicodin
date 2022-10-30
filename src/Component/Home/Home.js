import React from 'react';
import Banner from './Banner';
import Couple from './Couple';
import FemaleMember from './FemaleMember';
import Footer from './Footer';
import Members from './Members';
import MyProfile from './MyProfile';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Couple></Couple>
           <FemaleMember></FemaleMember>
            <Members></Members>
            <MyProfile></MyProfile>
            <Footer></Footer>
        </div>
    );
};

export default Home;
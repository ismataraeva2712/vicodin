import React, { useEffect, useState } from 'react';
import Profile from './Profile';

const ProfileInfo = () => {
    const [member,setMember]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/member`)
        .then(res=>res.json())
        .then(data=>setMember(data))
    },[])
    return (
        <div>
               <div
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
            <div >
                {
                    member.slice(0,1).map(profile=><Profile
                    key={profile._id}
                    profile={profile}
                    ></Profile>)
                }
            </div>
                    </div>
        </div>
    );
};

export default ProfileInfo;
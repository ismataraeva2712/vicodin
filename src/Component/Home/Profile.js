import React from 'react';

const Profile = ({profile}) => {
    const { picture, name, age, location, education, profession, _id } = profile
    return (
        <div class="card max-w-sm bg-base-100 shadow-xl">
        <figure><img src={picture} alt="Shoes" style={{ height: '220px' }} /></figure>
        <div class="card-body">
          <h2 class="card-title">
            {name}
            <div class="badge badge-primary">TOP</div>
          </h2>
          <p>Age : {age}</p>
          <p>Education : {education} $</p>
          <p>Profession : {profession}</p>
          <p>Location : {location}</p>
          <div class="card-actions justify-end">

            
          </div>
        </div>
      </div>
    );
};

export default Profile;
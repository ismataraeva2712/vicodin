import React from 'react';

const Female = ({women}) => {
    const { picture, name, age, location, education, profession, _id } = women
    return (
        <div>
            <div
                        data-aos="zoom-in"
                        data-aos-offset="200"
                        data-aos-delay="60"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true">
        <div class="card max-w-sm bg-base-100 shadow-xl">
          <figure><img src={picture} alt="Shoes" className='' style={{ height: '150px' }} /></figure>
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
        </div>
        </div>
    );
};

export default Female;
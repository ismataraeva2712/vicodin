import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import w1 from '../../img/w1.jpg'
import Profile from './Profile';
import ProfileInfo from './ProfileInfo';
const MyProfile = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth)
    const onSubmit = data => {
        console.log({ ...data, email: user.email })
        const url = `http://localhost:5000/member`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...data, email: user.email })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast("Updated Biodata successfully.")
            })
    };
    
    return (
        <div>
             <div><h1 className='text-primary text-center text-3xl font-bold my-12'>Create Your Biodata</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-80 px-12 mx-auto'>
                <div
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="60"
                    data-aos-duration="1200"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true">
                    <div>

                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-control mt-2">
                                        <input placeholder="Name" class="input input-bordered form-control" {...register("name", { required: true, maxLength: 20 })} />
                                    </div>
                                    
                                    <div class="form-control mt-2">
                                        <input placeholder="Education" class="input input-bordered" {...register("education")} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Profession" class="input input-bordered form-control" {...register("profession")} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Photo Url" class="input input-bordered form-control" {...register("picture")} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Age" class="input input-bordered form-control" {...register("age")} />
                                    </div>
                                    <div class="form-control mt-2">
                                        <input placeholder="Location" class="input input-bordered form-control" {...register("location")} />
                                    </div>

                                    <div class="form-control mt-2">

                                        <input class="input input-bordered btn btn-primary text-white" type="submit" value='Add Item' />
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                 <ProfileInfo></ProfileInfo>

                </div>
            </div>
        </div> 
        </div>
    );
};

export default MyProfile;
import React from 'react';
import heroImg from '../../images/Header.jpg'

const Home = () => {
    return (
        <div className="hero my-8 mx-auto w-10/12 sm:h-full" >
            <img src={heroImg} className='lg:w-full h-full rounded-lg' alt="" />
            <div className="hero-overlay bg-opacity-70  rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 lg:text-4xl sm:text-3xl font-bold">Welcome To Buzz Round</h1>
                    <p className="mb-5 lg:text-xl sm:text-medium">Challenge <span className='text-emerald-400'>Yourself</span> ! Gather More <span className='text-emerald-400'>Knowledge.</span> </p>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Home;
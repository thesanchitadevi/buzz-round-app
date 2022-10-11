import React from 'react';
import Lottie from "lottie-react";
import Error from "../../assests/36395-lonely-404.json"

const ErrorPage = () => {
    return (
        <div className='w-full lg:w-4/5 lg:mx-auto h-50  sm:h-96'>
            <Lottie animationData={Error} loop={true}></Lottie>
        </div>
    );
};

export default ErrorPage;
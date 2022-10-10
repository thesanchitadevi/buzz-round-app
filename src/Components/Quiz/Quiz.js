import React from 'react';


const Quiz = ({ quiz }) => {
    console.log(quiz);
    const { id, name,logo, total } = quiz;

    return (
        <div>           
            <div className="card w-80 bg-gray-200 shadow-xl image-full mx-auto my-10">
                <figure><img src={logo} alt="...." /></figure>
                <div className="card-body justify-center items-center">
                    <h2 className="text-center text-2xl font-bold">{name}</h2>
                    <h2 className="text-center text-xl font-bold">Total Quiz : {total}</h2>
                    <div className="card-actions justify-center">
                        <button className="px-14 py-2 rounded bg-emerald-600">Take Quiz</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Questions = ({ question, handleButton }) => {
    const [active, setActive] = useState();
    const handleToViewAns = () => {
        setActive(show => !show)
    }

    const [selected, setSelected] = useState('');
    const handleChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
    };

    return (
        <div>
            <ToastContainer></ToastContainer>
            <section>
                <div className='bg-slate-100 shadow-lg mx-auto lg:w-1/2 text-xl font-medium m-5 rounded-xl p-6'>
                    <div  className='flex justify-between'>

                        <h1>Quiz  : {question.question.slice(3, -4)} </h1>


                        {/* eye icon for correct answer */}
                        <FontAwesomeIcon onClick={handleToViewAns} className={active ? '' : 'hidden'} icon={faEye}>
                        </FontAwesomeIcon>
                        <FontAwesomeIcon onClick={handleToViewAns} className={active ? 'hidden' : ''} icon={faEyeSlash}>
                        </FontAwesomeIcon>

                    </div>
                    {
                        question.options.map(option =>
                            
                            <div onClick={() => handleButton(option, question.correctAnswer)} className='cursor-pointer border border-emerald-300  hover:text-emerald-600 p-2 my-4 rounded flex justify-left items-center'>
                                <label className='pr-8'>
                                    <input value={option} onChange={handleChange}
                                    type="radio"  /></label>
                                {option}
                            </div>)
                    }
                </div>
                {/* to show correct answer */}
                <div className={active ? '' : 'hidden'}>
                    <div className="alert bg-emerald-500 shadow-lg lg:w-1/2 mx-auto ">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className='text-white font-medium lg:text-lg sm:text-xl'>Correct Answer :  {question.correctAnswer}</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};
//question.options.map((e, i) => (i + 1 + "." + e)).join(' ')
export default Questions;
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Questions = ({ question, handleButton }) => {

    return (
        <div>
            <ToastContainer></ToastContainer>
            <section>
                <div className='bg-slate-100 shadow-lg mx-auto text-center w-1/2 text-xl font-medium m-5 rounded-xl p-6'>
                    <h1>Quiz : {question.question.slice(3, -4)} </h1>
                    {
                        question.options.map(option =>
                            <div onClick={() => handleButton(option, question.correctAnswer)} className='cursor-pointer border border-emerald-300  text-center hover:text-emerald-600 p-2 my-4 rounded '>
                                {option}
                            </div>)
                    }
                </div>
            </section>
        </div>
    );
};
//question.options.map((e, i) => (i + 1 + "." + e)).join(' ')
export default Questions;
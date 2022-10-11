import React from 'react';

const Questions = ({ questions,question }) => {
    
    return (
        <div className='bg-slate-400 text-center text-xl font-medium m-5 rounded-xl py-6'>
            <h1>Quiz : {question.question} </h1>
            <section >
                {question.options.map((e, i) => (i + 1 + "." + e)).join(' ')}
            </section>
        </div>
    );
};
//question.options.map((e, i) => (i + 1 + "." + e)).join(' ')
export default Questions;
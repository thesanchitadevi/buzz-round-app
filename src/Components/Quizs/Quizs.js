import React from 'react';
import { useLoaderData, useResolvedPath } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const quizs = useLoaderData();
    const quizTopic = quizs.data;
    
    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                quizTopic.map(quiz => <Quiz
                    key={quiz.id}
                    quiz={quiz}
                ></Quiz>)
            } 
            
        </div>
    );
};

export default Quizs;
import React from 'react';
import { useLoaderData, useResolvedPath } from 'react-router-dom';
import Home from '../Home/Home';
import Quiz from '../Quiz/Quiz';

const Quizs = () => {
    const quizs = useLoaderData();
    const quizTopic = quizs.data;

    return (
        <div>
            <Home></Home>
            <div className='grid grid-cols-4 gap-2 w-10/12 mx-auto '>
                {
                    quizTopic.map(quiz => <Quiz
                        key={quiz.id}
                        quiz={quiz}
                    ></Quiz>)
                }

            </div>
        </div>
)};

export default Quizs;
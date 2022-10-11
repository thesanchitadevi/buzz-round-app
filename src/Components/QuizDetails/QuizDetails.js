import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quiz = useLoaderData();
    // console.log(quiz);
    const quizQues = quiz.data;
    const { name, questions } = quizQues;
    // console.log(questions);
    return (
        <div>
            <h1>Here quiz ques : { name}</h1>
            <p>Ques : {questions.length}</p>
            {
                questions.map(question => <Questions
                    key={question.id}
                    question={question}></Questions>)
            }
        </div>
    );
};

export default QuizDetails;
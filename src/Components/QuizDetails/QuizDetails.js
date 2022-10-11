import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import { toast } from 'react-toastify';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const [rightAnswer, setRightAnswer] = useState([]);
    // console.log(quiz);
    const quizQues = quiz.data;
    const { name, questions } = quizQues;
    console.log(questions);

    const rightMessage = () => {
        toast.success('The Answer is Right !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const wrongMessage = () => {
        toast.error('Alas ! You choose a Wrong Answer.', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const handleButton = (chooseAnswer, correctAnswer) => {
        if (chooseAnswer === correctAnswer) {
            rightMessage()
            if (!(rightAnswer.includes(correctAnswer))) {
                let rightAnsArr = [...rightAnswer, correctAnswer]
                setRightAnswer(rightAnsArr)
            }
        }
        else {
            wrongMessage()
        }
    }

    return (
        <div>
            <h1>Here quiz ques : { name}</h1>
            <p>Ques : {questions.length}</p>
            {
                questions.map(question => <Questions
                    key={question.id}
                    question={question}
                    handleButton={handleButton}
                ></Questions>)
            }
        </div>
    );
};

export default QuizDetails;
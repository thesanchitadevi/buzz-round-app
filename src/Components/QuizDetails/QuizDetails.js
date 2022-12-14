import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import { toast } from 'react-toastify';

const QuizDetails = () => {
    const quiz = useLoaderData();
    // console.log(quiz);
    const quizQues = quiz.data;
    const { name, questions } = quizQues;
    // console.log(questions);

    const [rightAnswer, setRightAnswer] = useState([]);

    /* toast to show right wrong message */
    const rightMessage = () => {
        toast.success('The Answer is Right !', {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const wrongMessage = () => {
        toast.error('Alas ! You choose a Wrong Answer.', {
            position: toast.POSITION.TOP_RIGHT,           
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
        <div >
            <div  >
                <h1 className='text-center text-3xl text-emerald-600 font-bold py-5'>Quiz on {name}</h1>
                <h2 className='text-center py-3 lg:text-xl sm:text-lg bg-emerald-600 text-white my-2 w-1/2 mx-auto rounded-xl'>Your got {rightAnswer.length} out of { questions.length}</h2>
            </div>
            {
                questions.map((question,index) => <Questions
                    key={question.id}
                    question={question}
                    serial={index + 1}
                    handleButton={handleButton}
                ></Questions>)
            }
        </div>
    );
};

export default QuizDetails;
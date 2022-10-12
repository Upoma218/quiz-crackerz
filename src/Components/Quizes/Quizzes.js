import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Quizzes = () => {
    const quiz = useLoaderData();
    const quizzes = quiz.data;
    const {name, questions} = quizzes;
    
    
    return (
        <div className='p-4 m-6 bg-white'>
            <h1 className=' text-info font-bold'>Quiz of {name}</h1>
            <div className='p-3'>
                {
                    questions.map(question => <Quiz key={question.id} questionData={question}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizzes;
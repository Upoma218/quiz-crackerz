import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Quiz.css'

const Quiz = ({questionData}) => {
    console.log(questionData)
    const {correctAnswer,id, options,question} = questionData;
    return (
        <div className=' quiz p-4 m-6 border border-2 rounded'>
            <h2 className='text-success'>{question}</h2>
            <div className='p-5'>
                {
                    options.map(option => <div><input type="radio" /><span className='ms-3'>{option}</span></div>)
                }
                 <span><FontAwesomeIcon className='mt-4 font-lg' icon={faEye} /></span>
            </div>
           
        </div>
    );
};

export default Quiz;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const questions = data.data.question;
    return (
        <div>
            <h1 className='p-6 text-success font-bold m-5'>This is Chart</h1>
            <div>
                <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey={questions} />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;
/* 
key={**}onClick={() => handleCorrectAnser(option)}
key ={option}
props === correctAnswer */
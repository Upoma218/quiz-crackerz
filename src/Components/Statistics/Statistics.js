import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Statistics = ({cart}) => {
     const {total} = cart;
    return (
        <div>
            <h1 className='p-6 text-success font-bold m-5'>This is Chart</h1>
            <div>
                <LineChart width={600} height={300} data={cart} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#03010e" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
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
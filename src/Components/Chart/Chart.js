import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const quiz = useLoaderData();
    console.log(quiz.data);

    return (
        <div className='w-1/2 mx-auto mt-10'>
            <div>
                <ResponsiveContainer width='70%' height='80%'>
                    <BarChart data={quiz.data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                        
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Chart;
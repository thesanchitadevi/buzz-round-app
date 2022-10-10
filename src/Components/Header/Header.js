import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl w-10/12 mx-auto">
                <div className="flex-1">
                    <Link className="pl-2 text-2xl font-bold text-emerald-600" to='/'>Buzz Round</Link>
                </div>
                <div className="flex-none">
                    <ul className="flex">
                        <li className='px-2 text-xl font-semibold text-emerald-600'><Link to='/quizs'>Quiz</Link></li>
                        <li className='px-2 text-xl font-semibold text-emerald-600'><Link to='/chart'>Chart</Link></li>
                        <li className='px-2 text-xl font-semibold text-emerald-600'><Link to='/faq'>FAQ</Link></li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
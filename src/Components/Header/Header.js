import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        color: "grey"
    };
    return (
        <div>
            <div className="navbar bg-base-100 shadow-xl w-11/12 mx-auto">
                <div className="flex-1">
                    <Link className="pl-2 text-2xl font-bold text-emerald-600" to='/'>Buzz Round</Link>
                </div>
                <div className="flex-none">
                    <ul className="flex">
                        <li className='px-2 text-xl font-semibold text-emerald-600'><NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to='/quizs'>Quiz</NavLink></li>
                        <li className='px-2 text-xl font-semibold text-emerald-600'><NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to='/chart'>Chart</NavLink></li>
                        <li className='px-2 text-xl font-semibold text-emerald-600'><NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } to='/faq'>FAQ</NavLink></li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Header;
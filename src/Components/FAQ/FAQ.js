import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className="collapse mx-auto w-9/12 mt-10  bg-slate-200 rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title  text-emerald-600 text-xl font-medium">
                    Write down the purpose of react-router.
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-normal'>React Router is a standard library for routing in React. It's a dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React router use components yo display individual information.</p>
                </div>
            </div>
            <div className="collapse mx-auto w-9/12 my-5  bg-slate-200 rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-emerald-600 text-xl font-medium">
                    How does context-api works?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-normal'>Context Api provides a way to pass data through the component tree without having to pass props down manually at every level. <br />
                        To create context api you need <span className='text-emerald-600'>React.createContext().</span> It returns a consumer and a provider. <span className='text-emerald-600'>Provider</span> is a component  that as it's names suggests provides the state to its children and  <span className='text-emerald-600'>Consumer</span> is a component that consumes and uses the state.</p>
                </div>
            </div>
            <div className="collapse mx-auto w-9/12  bg-slate-200 rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title  text-emerald-600 text-xl font-medium">
                    What is useRef hook in react ?
                </div>
                <div className="collapse-content">
                    <p className='text-lg font-normal'>The useRef is a hook that allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
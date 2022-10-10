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
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse mx-auto w-9/12 my-5  bg-slate-200 rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title text-emerald-600 text-xl font-medium">
                    How does context-api works?
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse mx-auto w-9/12  bg-slate-200 rounded-lg">
                <input type="checkbox" />
                <div className="collapse-title  text-emerald-600 text-xl font-medium">
                    What do you know about "usehref" ?
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
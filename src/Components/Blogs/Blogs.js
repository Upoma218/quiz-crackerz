import React from 'react';

const Blogs = () => {
    return (
        <div className='p-5 m-5'>
            <h1> Blogs</h1>
            <div>
                <h4>1. What is purpose of react router?</h4>
                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
            </div>
            <div>
                <h4>2. How does context API works?</h4>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div>
                <h4>What is "useRef"?</h4>
                <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with myRef , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>
        </div>
    );
};

export default Blogs;
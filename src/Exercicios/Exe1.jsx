import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// const getCurrentDate = () =>{
//     const date = new Date();
//     return date.toDateString();
// }

const getCurrentDate = function(){
    const date = new Date();
    return date.toDateString();
}

//tag , props, text
//const greeting = React.createElement('h1', {}, 'Hello World');

const greeting = <h1> Currrent Date: {getCurrentDate()}</h1>;

ReactDOM.render(greeting, document.getElementById('root'));
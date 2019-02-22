import React from 'react';
import ReactDOM from 'react-dom';

//CREATE A REACT COMPONENT EITHER FUNCTIONAL OR CLASS
/*
const App = () => { return <div><h1>Hi There!</h1></div>; }
const App = () => { return ( <div><h1>Hi There!</h1></div> ); }
const App = () => <div><h1>Hi There!</h1></div>;

const App = function App() {
    return <div><h1>Hi There!</h1></div>;
}
*/

const App = function() {
    return <div><h1>Hi There</h1></div>;
}

//TAKE THE REACT COMPONENT AND RENDER IT ON THE SCREEN
//ReactDOM.render(WHAT TO RENDER, WHERE TO RENDER);
ReactDOM.render(<App/>, document.querySelector('#root'));
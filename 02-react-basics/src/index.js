import React from 'react';
import ReactDOM from 'react-dom';

/*
const App = function() {
    return (
        <div>
            <label class="label" for="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style="background-color: orange; color: black;">Submit</button>
        </div>
    );
  }
  */

  //const buttonText = "Click Me!";
  const buttonText = {text: "Click Me!"};
  const labelText = "Enter Name:";
  const style = {backgroundColor: 'orange', text: 'black'};


  const App = function() {
    return (
        <div>
            <label className="label" htmlFor="name">{labelText}</label>
            <input id="name" type="text"/>
            {/*<button style={{backgroundColor: 'orange', color: 'black'}}>Submit</button>*/} {/* This is a JSX comment */}
            {/*<button style={style}>{buttonText}</button>*/}
            <button style={style}>{buttonText.text}</button>
        </div>
    );
  }

  ReactDOM.render(<App/>, document.querySelector("#root") );
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("Inside constructor");

        this.state = { latitude: null, errorMessage: null };

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    componentDidMount()
    {
        console.log("Inside componentDidMount. Component was rendered to the screen.");
    }

    componentDidUpdate()
    {
        console.log("Inside componentDidUpdate. Component was just updated. So it re-rendered to the screen.");
    }

    componentWillUnmount()
    {
        console.log("Inside componentWillUnmount. Component was removed from the screen.");
    }

    render()
    {
        console.log("Inside render.");
        if(this.state.latitude && !this.state.errorMessage)
        {
            return <div><h1>Latitude: {this.state.latitude}</h1></div>;
        }
        if(!this.state.latitude && this.state.errorMessage)
        {
            return <div><h1>Error: {this.state.errorMessage}</h1></div>;
        }
        return <div><h1>Loading!</h1></div>;
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
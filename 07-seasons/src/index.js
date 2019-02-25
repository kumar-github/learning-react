import React from 'react';
import ReactDOM from 'react-dom';

/*
const App = () => {
    window.navigator.geolocation.getCurrentPosition(
        position => console.log(position),
        error => console.log(error)
        );

        return (
            <div><h1>Latitude:</h1></div>
        );
};
*/

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { lat: null, errorMessage: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ lat: position.coords.latitude });
            },
            error => {
                console.log(error);
                this.setState({ errorMessage: error.message });
            }
        );
    }

    render()
    {

        return (
            <div>
                <h1>Latitude: {this.state.lat}</h1>
                <h1>Error: {this.state.errorMessage}</h1>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
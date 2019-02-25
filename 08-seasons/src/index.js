import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = { latitude: null, errorMessage: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ latitude: position.coords.latitude });
            },
            error => {
                console.log(error);
                this.setState({ errorMessage: error.message });
            }
        );
    }

    render()
    {
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
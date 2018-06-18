import React from 'react';

import Filter from './components/filter';

import './App.css';


class App extends React.Component {

    render() {

        return (
            <div className="App">
                <Filter onSelect={(chord) => {
                    console.log('Selected: '+ JSON.stringify(chord));
                }}/>

                <div className="Details">
                    <p>Details Here</p>
                </div>
            </div>
        );
    }
}

export default App;

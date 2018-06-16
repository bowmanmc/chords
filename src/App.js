import React from 'react';

import Chord from './components/chord';
import Header from './components/header';

import './App.css';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="Content">
                    <Chord />
                </div>
            </div>
        );
    }
}

export default App;

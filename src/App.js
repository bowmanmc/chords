import React from 'react';

import ChordDiagram from './components/chord';
import Header from './components/header';

import './App.css';


class App extends React.Component {

    render() {
        const chords = [{
            name: 'C Major',
            key: 'C',
            mod: 'maj',
            tabs:      ['x','3','2','0','1','0'],
            fingering: ['x','3','2','0','1','0']
        }, {
            name: 'E Major',
            key: 'E',
            mod: 'maj',
            tabs:      ['0','2','2','1','0','0'],
            fingering: ['0','2','3','1','0','0']
        }, {
            name: 'E Major 2',
            key: 'E',
            mod: 'maj',
            startFret: 6,
            tabs:      ['x','7','9','9','9','7'],
            fingering: ['x','1','3','3','3','1']
        }];

        return (
            <div className="App">
                <Header />
                <div className="Content">
                    {chords.map((chord, i) => {
                        return <ChordDiagram key={i} chord={chord} />
                    })}
                </div>
            </div>
        );
    }
}

export default App;

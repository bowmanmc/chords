import React from 'react';

import ChordDatabase from './data';
import ChordDiagram from './components/chord';

import './App.css';


class App extends React.Component {

    render() {
        const family = ChordDatabase.C;

        return (
            <div className="App">
            {Object.keys(family).map(chordKey => {
                const chord = family[chordKey];
                return (
                    <div key={chordKey} className="Chords">
                        <h2>{chord.name}</h2>
                        <div className="Positions">
                        {chord.positions.map((position, i) => {
                            return <ChordDiagram key={i} chord={position} onClick={() => {
                                console.log('You clicked on chord: ' + JSON.stringify(chord) + ' at position: ' + JSON.stringify(position));
                            }}/>
                        })}
                        </div>
                    </div>
                );
            })}
            </div>
        );
    }
}

export default App;

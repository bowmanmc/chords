import React from 'react';

import ChordDatabase from './data';
import ChordDiagram from './components/chord';
import Header from './components/header';

import './App.css';


class App extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            root: 'c'
        };
    }

    render() {
        const { root } = this.state;

        const family = ChordDatabase[root];

        return (
            <div className="App">
                <Header selected={root} onRootChange={(root) => {
                    window.scrollTo(0, 0);
                    this.setState({root});
                }}/>
                <div className="Content">
                {Object.keys(family).map(chordKey => {
                    const chord = family[chordKey];
                    return (
                        <div key={chordKey} className="Chord">
                            <div className="ChordMeta">
                                <h2>{chord.name}</h2>
                                <p>{chord.shortName} - {chord.positions.length} positions</p>
                            </div>
                            <div className="Positions">
                            {chord.positions.map((position, i) => {
                                return (
                                    <div key={i} className="Position">
                                        <ChordDiagram key={i} chord={position} />
                                    </div>
                                );
                            })}
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
}

export default App;

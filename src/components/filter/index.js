import React from 'react';

import ChordDiagram from '../chord';

import ChordDatabase from '../../data';


import './index.css';


class Filter extends React.Component {

    render() {
        const family = ChordDatabase.C;

        return (
            <div className="Filter">

                <div className="FilterBox">
                </div>

                <div className="FilterResults">
                {Object.keys(family).map(chordKey => {
                    const chord = family[chordKey];
                    return (
                        <div className="FilterResult">
                            <h2>{chord.name}</h2>
                            <div className="positions">
                            {chord.positions.map((position, i) => {
                                return <ChordDiagram key={i} size="small" chord={position} />
                            })}
                            </div>
                        </div>
                    );
                })}
                </div>
            </div>
        );
    }
};

export default Filter;

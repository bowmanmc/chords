import React from 'react';

import ChordDiagram from '../chord';

import ChordDatabase from '../../data';


import './index.css';


class Filter extends React.Component {

    render() {
        const chords = ChordDatabase.C.major;

        return (
            <div className="Filter">
                <p>Filter Here.</p>

                <div className="FilterResults">
                    {chords.map((chord, i) => {
                        return <ChordDiagram key={i} chord={chord} />
                    })}
                </div>
            </div>
        );
    }
};

export default Filter;

import React from 'react';
import PropTypes from 'prop-types';

import ChordDiagram from '../chord';


const ChordFamilyViewer = (props) => {
    const { family } = props;

    return (
        <div className="Viewer">
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
    );
};

ChordFamilyViewer.propTypes = {
    family: PropTypes.object.isRequired
};

export default ChordFamilyViewer;

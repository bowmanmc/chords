import React from 'react';
import PropTypes from 'prop-types';

import ChordDiagram from '../chord';


const ChordPositions = (props) => {
    const { chord } = props;

    if (!chord || !chord.name) {
        return null;
    }

    return (
        <div className="ChordPositions">
            {chord.positions.map((position, i) => {
                return (
                    <div className="ChordPosition" key={i} >
                        <ChordDiagram chord={position} />
                    </div>
                );
            })}
        </div>
    );
};

ChordPositions.propTypes = {
    chord: PropTypes.object.isRequired
};

export default ChordPositions;

import React from 'react';
import PropTypes from 'prop-types';

import Fingerings from './Fingerings';
import Fretboard from './Fretboard';
import Labels from './Labels';

import './index.css';


const ChordDiagram = props => {

    const { chord } = props;

    const fretboardConfig = {
        fingeringRadius: 3,
        fretSpacing: 12.5,
        numFrets: 5,
        numStrings: 6,
        nutSize: 4,
        startX: 10,
        startY: 10,
        stringSpacing: 10
    };

    return (
        <svg className="ChordDiagram" viewBox='0 0 70 80'>
            <Fretboard config={fretboardConfig} chord={chord} />
            <Labels config={fretboardConfig} chord={chord} />
            <Fingerings config={fretboardConfig} chord={chord} />
        </svg>
    );
};

ChordDiagram.propTypes = {
    chord: PropTypes.object.isRequired
};

export default ChordDiagram;

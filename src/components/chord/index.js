import React from 'react';

import Fingerings from './Fingerings';
import Fretboard from './Fretboard';
import Labels from './Labels';

import './index.css';


const ChordDiagram = props => {

    const { chord } = props;

    const fretboardConfig = {
        fretSpacing: 12.5,
        numFrets: 5,
        numStrings: 6,
        nutSize: 4,
        startX: 10,
        startY: 10,
        stringSpacing: 10
    };

    let labels = null;
    if (props.labels) {
        labels = <Labels config={fretboardConfig} chord={chord} />;
    }

    return (
        <svg className="ChordDiagram" viewBox='0 0 70 80'>
            <Fretboard config={fretboardConfig} chord={chord} />
            {labels}
            <Fingerings labels={props.labels} config={fretboardConfig} chord={chord} />
        </svg>
    )
};

export default ChordDiagram;

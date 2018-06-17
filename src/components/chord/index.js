import React from 'react';

import Fretboard from './Fretboard';
import Labels from './Labels';

import './index.css';


const ChordDiagram = props => {

    const chord = {
        name: 'C Major',
        key: 'C',
        mod: 'maj',
        tabs:      ['x','3','2','0','1','0'],
        //tabs: ['0', 'x', '0', 'x', '0', 'x'],
        fingering: ['x','3','2','0','1','0']
    };

    const fretboardConfig = {
        fretSpacing: 12.5,
        numFrets: 5,
        numStrings: 6,
        nutSize: 4,
        showNut: true,
        startFret: 1,
        startX: 10,
        startY: 10,
        stringSpacing: 10
    };

    return (
        <svg className="ChordDiagram" viewBox='0 0 70 80'>
            <g className="Fingers" transform={`translate(${fretboardConfig.startX}, ${fretboardConfig.startY})`}>
                {chord.tabs.map((tab, i) => {
                    if (tab === 'x' || tab === '0') {
                        return null;
                    }
                    const fretOffset = Number(tab);
                    const r = 3;
                    const x = i * fretboardConfig.stringSpacing;
                    const y = (fretOffset * fretboardConfig.fretSpacing) + fretboardConfig.nutSize - (fretboardConfig.fretSpacing / 2);// - (fretboardConfig.fretSpacing / 2);
                    return (
                        <circle cx={x} cy={y} r={r}/>
                    );
                })}
            </g>
            <Labels config={fretboardConfig} tabs={chord.tabs} />
            <Fretboard config={fretboardConfig} />
        </svg>
    )
};

export default ChordDiagram;

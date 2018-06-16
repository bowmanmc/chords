import React from 'react';

import './index.css';


const Chord = props => {

    const numStrings = 6;
    const numFrets = 5;

    const fretboard = {
        fretSpacing: 12.5,
        nutSize: 4,
        startX: 10,
        startY: 10,
        stringSpacing: 10
    };

    return (
        <svg className="Chord" viewBox='0 0 70 100'>
            <g className="Strings">
                {Array.from({length: numStrings}, (v, i) => i).map(i => {
                    let height = (numFrets + 1) * fretboard.fretSpacing + 1;
                    let x = fretboard.startX + (i * fretboard.stringSpacing);
                    return (
                        <line key={i} className={`string-${i + 1}`}
                            x1={x} x2={x}
                            y1={fretboard.startY} y2={height} />
                    );
                })}
            </g>
            <g className="Frets">
                {[1, 2, 3, 4, 5].map(i => {
                    let y = (fretboard.startY + fretboard.nutSize) + (i * fretboard.fretSpacing);
                    return (
                        <line key={i}
                            x1={fretboard.startX}
                            x2={fretboard.stringSpacing * numStrings}
                            y1={y} y2={y} />
                    )
                })}
            </g>
            <g className="Nut">
                <rect x={fretboard.startX}
                    y={fretboard.startY}
                    width={fretboard.stringSpacing * (numStrings - 1)}
                    height={fretboard.nutSize} />
            </g>
        </svg>
    )
};

export default Chord;

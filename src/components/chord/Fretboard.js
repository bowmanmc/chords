import React from 'react';
import PropTypes from 'prop-types';


const Fretboard = props => {

    const { chord, config } = props;
    const { startFret } = chord;
    const firstFret = startFret || 0;

    const transform = `translate(${config.startX}, ${config.startY})`;

    // Should we draw the nut or not? Check for startFret setting
    let nutSize = 0;
    let nut = null;
    if (firstFret === 0) {
        nutSize = config.nutSize;
        nut = (
            <g className="Nut" transform={transform}>
                <rect x={0}
                    y={0}
                    width={config.stringSpacing * (config.numStrings - 1)}
                    height={config.nutSize} />
            </g>
        );
    }

    const fretWidth = config.stringSpacing * (config.numStrings - 1);
    const stringHeight = config.fretSpacing * config.numFrets + nutSize;

    return (
        <g className="Fretboard">
            <g className="Frets" transform={transform}>
                {Array.from({length: (config.numFrets + 1)}, (v, i) => i).map(i => {
                    const fretNum = i + firstFret;
                    //console.log('drawing fret ' + fretNum);
                    const y = (i * config.fretSpacing) + nutSize;
                    return <line className={`fret-${fretNum}`} key={i} x1={0} x2={fretWidth} y1={y} y2={y} />;
                })}
            </g>
            <g className="Strings" transform={transform}>
                {Array.from({length: config.numStrings}, (v, i) => i).map(i => {
                    const x = i * config.stringSpacing;
                    return (
                        <line key={i} className={`string-${config.numStrings - i}`}
                            x1={x} x2={x}
                            y1={0} y2={stringHeight} />
                    );
                })}
            </g>
            {nut}
        </g>
    );
};

Fretboard.propTypes = {
    chord: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
};

export default Fretboard;

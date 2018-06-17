import React from 'react';


const Fretboard = props => {

    const { config } = props;

    const transform = `translate(${config.startX}, ${config.startY})`;

    let nutSize = 0;
    let nut = null;
    if (config.showNut) {
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
                    const y = (i * config.fretSpacing) + nutSize;
                    return <line key={i} x1={0} x2={fretWidth} y1={y} y2={y} />;
                })}
            </g>
            <g className="Strings" transform={transform}>
                {Array.from({length: config.numStrings}, (v, i) => i).map(i => {
                    const x = i * config.stringSpacing;
                    return (
                        <line key={i} className={`string-${i + 1}`}
                            x1={x} x2={x}
                            y1={0} y2={stringHeight} />
                    );
                })}
            </g>
            {nut}
        </g>
    );
};

export default Fretboard;

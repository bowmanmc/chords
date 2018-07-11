import React from 'react';


const Ties = (props) => {

    const {ties, config, firstFret} = props;

    const stringPercentage = 100 / (config.numStrings - 1);

    let nutSize = 0;
    if (firstFret === 0) {
        nutSize = config.nutSize;
    }

    return (
        <g className="Ties">
            {Object.keys(ties).map(fret => {
                const tie = ties[fret];
                let x = tie.first * config.stringSpacing;
                let width = tie.last - tie.first;
                let scaleX = (stringPercentage * width) / 100;
                let scaleY = 1;
                if (width <= 3) {
                    scaleY = 0.5;
                }

                let fretOffset = Number(tie.tab);
                if (firstFret > 0) {
                    fretOffset -= firstFret;
                }
                else {
                    fretOffset -= 1;
                }

                let y = ((fretOffset * config.fretSpacing) + nutSize) - config.fingeringRadius;

                return (
                    <g key={fret} className="Tie" transform={`translate(${x}, ${y}), scale(${scaleX}, ${scaleY})`}>
                        <path d="M25,0C11.1,0-0.1,5.6,0,5.7c3.2-1.4,12-4.7,25-4.7s21.8,3.3,25,4.7C50.1,5.7,38.9,0,25,0z" />
                    </g>
                );
            })}
        </g>
    );
};

export default Ties;

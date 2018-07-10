import React from 'react';


const Ties = (props) => {

    const {ties, config} = props;

    const stringPercentage = 100 / config.numStrings;

    return (
        <g className="Ties">
            {Object.keys(ties).map(fret => {
                const tie = ties[fret];
                let x = tie.first * config.stringSpacing;
                let width = tie.last - tie.first + 1;
                let scaleX = (stringPercentage * width) / 100;
                console.log('Tie: ' + JSON.stringify(tie));
                console.log('    Width: ' + width);
                console.log('    width: ' + scaleX);
                return (
                    <g className="tie" transform={`translate(${x}, 0), scale(${scaleX}, 1)`}>

                    </g>
                );
            })}
        </g>
    );
};

export default Ties;

// <path d="M25,0C11.1,0-0.1,5.6,0,5.7c3.2-1.4,12-4.7,25-4.7s21.8,3.3,25,4.7C50.1,5.7,38.9,0,25,0z" />

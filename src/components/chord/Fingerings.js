import React from 'react';
import PropTypes from 'prop-types';


const Fingerings = props => {
    const { chord, config } = props;
    const { fingering, startFret, tabs } = chord;
    const firstFret = startFret || 0;

    let nutSize = 0;
    if (firstFret === 0) {
        nutSize = config.nutSize;
    }

    const r = 3; // circle radius

    const transform = `translate(${config.startX}, ${config.startY})`;

    return (
        <g className="Fingerings" transform={transform}>
            {tabs.map((tab, i) => {
                if (tab === 'x' || tab === '0') {
                    return null;
                }
                const fretOffset = Number(tab) - firstFret;
                const x = i * config.stringSpacing;
                let y = (fretOffset * config.fretSpacing) + nutSize;
                if (firstFret > 0) {
                    y += (config.fretSpacing / 2);
                }
                else {
                    y -= (config.fretSpacing / 2);
                }

                return (
                    <g key={i} className="Fingering" transform={`translate(${x}, ${y})`}>
                        <circle cx={0} cy={0} r={r}/>
                        <text x={0} y={r/2} textAnchor='middle'>{fingering[i]}</text>
                    </g>
                );
            })}
        </g>
    );
};

Fingerings.propTypes = {
    chord: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
};

export default Fingerings;

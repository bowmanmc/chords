import React from 'react';
import PropTypes from 'prop-types';

import Ties from './Ties';
import utils from './utils';


const Fingerings = props => {
    const { chord, config } = props;
    const { fingering, startFret, tabs } = chord;
    const firstFret = startFret || 0;

    let nutSize = 0;
    if (firstFret === 0) {
        nutSize = config.nutSize;
    }

    const r = config.fingeringRadius;

    const transform = `translate(${config.startX}, ${config.startY})`;

    let ties = utils.calculateTies(fingering, tabs);

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
            <Ties ties={ties} config={config} firstFret={firstFret} />
        </g>
    );
};

Fingerings.propTypes = {
    chord: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
};

export default Fingerings;

/*
<g className="tie" transform={'translate(0, 0)'}>
    <path d="M19.8,0C8.8,0-0.1,3.7,0,3.8c2.5-0.9,9.5-3.1,19.8-3.1s17.3,2.2,19.8,3.1C39.7,3.8,30.8,0,19.8,0z" />
</g>
*/

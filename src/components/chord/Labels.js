import React from 'react';
import PropTypes from 'prop-types';


const Labels = props => {
    const { chord, config } = props;
    const { tabs, startFret } = chord;
    const firstFret = startFret || 0;

    let fretLabels = null;
    if (firstFret > 0) {
        fretLabels = (
            <g className="FretLabels" transform={`translate(0, ${config.startY})`}>
                {Array.from({length: config.numFrets}, (v, i) => i).map(i => {
                    const fretNum = firstFret === 0 ? (i + 1) : (firstFret + i);
                    let y = (i * config.fretSpacing) + (config.fretSpacing / 2);
                    if (firstFret === 0) {
                        y += config.nutSize;
                    }
                    return <text key={i} x={6} y={y+1.5}>{fretNum}</text>;
                })}
            </g>
        );
    }

    return (
        <g className="Labels">
            <g className="NutLabels" transform={`translate(${config.startX}, 0)`}>
                {tabs.map((tab, i) => {
                    if (tab === 'x' || tab === '0') {
                        let x = (i * config.stringSpacing);
                        return (
                            <text key={i} alignmentBaseline='end' textAnchor='middle'
                                x={x} y={8}>{tab === '0' ? 'o' : 'x'}</text>
                        );
                    }
                    return null;
                })}
            </g>
            {fretLabels}
        </g>
    );
};

Labels.propTypes = {
    chord: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired
};

export default Labels;

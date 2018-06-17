import React from 'react';


const Labels = props => {
    const { chord, config } = props;
    const { tabs, startFret } = chord;
    const firstFret = startFret || 0;

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
            <g className="FretLabels" transform={`translate(0, ${config.startY})`}>
                {Array.from({length: config.numFrets}, (v, i) => i).map(i => {
                    const fretNum = firstFret === 0 ? (i + 1) : (firstFret + i);
                    let y = (i * config.fretSpacing) + (config.fretSpacing / 2);
                    if (firstFret === 0) {
                        y += config.nutSize;
                    }
                    return <text key={i} alignmentBaseline='middle' x={8} y={y}>{fretNum}</text>;
                })}
            </g>
        </g>
    );
};

export default Labels;

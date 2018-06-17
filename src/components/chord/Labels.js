import React from 'react';


const Labels = props => {
    const { tabs, config } = props;

    return (
        <g className="Labels">
            <g className="NutLabels" transform={`translate(${config.startX}, 0)`}>
                {tabs.map((tab, i) => {
                    if (tab.toLowerCase() === 'x' || tab === '0') {
                        let x = (i * config.stringSpacing);
                        return (
                            <text alignmentBaseline='end' textAnchor='middle'
                                x={x}
                                y={8}>{tab === '0' ? 'o' : 'x'}</text>
                        );
                    }
                    return null;
                })}
            </g>
            <g className="FretLabels" transform={`translate(0, ${config.startY})`}>
                {Array.from({length: config.numFrets}, (v, i) => i).map(i => {
                    const fretNum = config.startFret + i;
                    let y = (i * config.fretSpacing) + (config.fretSpacing / 2);
                    if (config.showNut) {
                        y += config.nutSize;
                    }
                    return <text alignmentBaseline='middle' x={8} y={y}>{fretNum}</text>;
                })}
            </g>
        </g>
    );
};

export default Labels;

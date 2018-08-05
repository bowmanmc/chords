import React from 'react';
import PropTypes from 'prop-types';

import ChordMeta from './ChordMeta';
import ChordDiagram from "../chord";


const ChordList = (props) => {
    const { chords } = props;

    if (!chords) {
        return null;
    }

    return (
        <div className="ChordList">
            {chords.map((chord, i) => {
                return (
                    <div className="Chord" key={i}>
                        <ChordMeta chord={chord} />
                        <ChordDiagram chord={chord.position} />
                    </div>
                );
            })}
        </div>
    );
};

ChordList.propTypes = {
    chords: PropTypes.array.isRequired
};

export default ChordList;

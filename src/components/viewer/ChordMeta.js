import React from 'react';
import PropTypes from 'prop-types';


const ChordMeta = (props) => {
    const { chord } = props;

    if (!chord || !chord.name) {
        return null;
    }

    return (
        <div className="ChordMeta">
            <h2>{chord.name}</h2>
        </div>
    );
};

ChordMeta.propTypes = {
    chord: PropTypes.object.isRequired
};

export default ChordMeta;

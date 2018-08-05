import React from 'react';
import PropTypes from 'prop-types';

import ChordMeta from './ChordMeta';
import ChordPositions from './ChordPositions';


const FamilyViewer = (props) => {
    const { family } = props;

    if (!family) {
        return null;
    }

    console.log('Rendering FamilyViewer for ' + JSON.stringify(family));

    return (
        <div className="FamilyViewer">
            {family.map((chord, i) => {
                return (
                    <React.Fragment key={i}>
                        <ChordMeta chord={chord} />
                        <ChordPositions chord={chord} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

FamilyViewer.propTypes = {
    family: PropTypes.array.isRequired
};

export default FamilyViewer;

import React from 'react';
import PropTypes from 'prop-types';

import ChordDatabase from '../../data';

import ChordCollectionViewer from './ChordCollectionViewer';
import ChordFamilyViewer from './ChordFamilyViewer';

import './index.css';


const Viewer = (props) => {

    const { root } = props;

    const family = ChordDatabase[root];

    if (family.type) {
        return <ChordCollectionViewer collection={family} />;
    }
    else {
        return <ChordFamilyViewer family={family} />;
    }

};

Viewer.propTypes = {
    root: PropTypes.string.isRequired
};

export default Viewer;

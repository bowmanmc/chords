import React from 'react';
import PropTypes from 'prop-types';

import ChordDatabase from '../../data';

import CollectionMeta from './CollectionMeta';
import FamilyViewer from './FamilyViewer';

import './index.css';


const Viewer = (props) => {
    const { root } = props;
    const collection = ChordDatabase[root];

    if (!collection) {
        // whoops!
        return (
            <div className="Viewer">
                <h1>No Collection for "{root}" found.</h1>
            </div>
        );
    }

    // Families are sub-collections under the chords attribute... things like
    // major, minor, etc...
    const families = Object.keys(collection.chords);

    return (
        <div className="Viewer">
            <CollectionMeta collection={collection} />
            {families.map(familyKey => {
                const family = collection.chords[familyKey];
                return <FamilyViewer key={familyKey} family={family} />
            })}
        </div>
    );
};

Viewer.propTypes = {
    root: PropTypes.string.isRequired
};

export default Viewer;

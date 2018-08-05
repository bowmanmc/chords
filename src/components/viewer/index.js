import React from 'react';
import PropTypes from 'prop-types';

import ChordDatabase from '../../data';

import CollectionMeta from './CollectionMeta';
import ChordList from './ChordList';


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

    let items = collection;
    if (!Array.isArray(collection)) {
        items = [collection];
    }

    return (
        <div className="Viewer">
            {items.map((item, i) => {
                return (
                    <React.Fragment key={i}>
                        <CollectionMeta collection={item} />
                        <ChordList chords={item.chords} />
                    </React.Fragment>
                );
            })}
        </div>
    );
};

Viewer.propTypes = {
    root: PropTypes.string.isRequired
};

export default Viewer;

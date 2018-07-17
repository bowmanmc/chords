import React from 'react';
import PropTypes from 'prop-types';

import ChordDiagram from '../chord';


const ChordCollectionViewer = (props) => {
    const { collection } = props;

    return (
        <div className="Viewer">
            <div className="CollectionInfo">
                <h2>{collection.name}</h2>
                <p>{collection.description}</p>
            </div>
            <div className="Chords">
            {collection.chords.map((chord, i) => {
                let sn = null;
                if (chord.shortName) {
                    sn = `(${chord.shortName})`;
                }
                return (
                    <div key={chord.shortName} className="Chord">
                        <div className="ChordMeta">
                            <h3>{chord.name} {sn}</h3>
                        </div>
                        <div key={i} className="Position">
                            <ChordDiagram hideFretLabels={chord.hideFretLabels} key={i} chord={chord.position} />
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    );
};

ChordCollectionViewer.propTypes = {
    collection: PropTypes.object.isRequired
};

export default ChordCollectionViewer;

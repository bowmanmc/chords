import React from 'react';
import PropTypes from 'prop-types';


const CollectionMeta = (props) => {
    const { collection } = props;

    if (!collection || !collection.description) {
        return null;
    }

    return (
        <div className="CollectionMeta">
            <h1>{collection.name}</h1>
            <p>{collection.description}</p>
        </div>
    );
};

CollectionMeta.propTypes = {
    collection: PropTypes.object.isRequired
};

export default CollectionMeta;

import React from 'react';
import PropTypes from 'prop-types';


const CollectionMeta = (props) => {
    const { collection } = props;

    if (!collection || !collection.name) {
        return null;
    }

    let description = null;
    if (collection.description) {
        description = (<p>{collection.description}</p>);
    }

    let altName = null;
    if (collection.shortName) {
        altName = (
            <span className="altName">({collection.shortName})</span>
        );
    }

    return (
        <div className="CollectionMeta">
            <h1>{collection.name}</h1>
            {altName}
            {description}
        </div>
    );
};

CollectionMeta.propTypes = {
    collection: PropTypes.object.isRequired
};

export default CollectionMeta;

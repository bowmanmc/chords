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

    return (
        <div className="CollectionMeta">
            <h1>{collection.name}</h1>
            {description}
        </div>
    );
};

CollectionMeta.propTypes = {
    collection: PropTypes.object.isRequired
};

export default CollectionMeta;

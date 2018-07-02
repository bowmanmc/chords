import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const KEYS = [{
    value: 'c', text: 'C'
}, {
    value: 'csharp', text: 'C♯ / D♭'
}, {
    value: 'd', text: 'D'
}, {
    value: 'dsharp', text: 'D♯ / E♭'
}, {
    value: 'e', text: 'E'
}, {
    value: 'f', text: 'F'
}, {
    value: 'fsharp', text: 'F♯ / G♭'
}, {
    value: 'g', text: 'G'
}, {
    value: 'gsharp', text: 'G♯ / A♭'
}, {
    value: 'a', text: 'A'
}, {
    value: 'asharp', text: 'A♯ / B♭'
}, {
    value: 'b', text: 'B'
}];


const Selector = props => {
    let className = 'Selector';
    let bgClass = 'SelectorBackground';
    if (props.active) {
        className += ' Selector-active';
        bgClass = 'SelectorBackground-active';
    }

    return (
        <React.Fragment>
            <div className={className}>
                <div className="SelectorGroup">
                    <span className="GroupName">Root Notes</span>
                    <div className="GroupButtons">
                    {KEYS.map(key => {
                        return (
                            <Link key={key.value}
                                to={`/${key.value}`}
                                onClick={() => {
                                    props.onClose();
                                    window.scrollTo(0,0);
                                }}
                                className="GroupButton">{key.text}</Link>
                        );
                    })}
                    </div>
                </div>
            </div>
            <div className={bgClass} onClick={() => {
                props.onClose();
            }} />
        </React.Fragment>
    );
};

Selector.propTypes = {
    active: PropTypes.bool,
    onClose: PropTypes.func.isRequired
};

Selector.defaultProps = {
    active: false
};

export default Selector;

import React from 'react';
import PropTypes from 'prop-types';


const KEYS = [{
    value: 'c', text: 'C'
}, {
    value: 'c_sharp', text: 'C♯ / D♭'
}, {
    value: 'd', text: 'D'
}, {
    value: 'd_sharp', text: 'D♯ / E♭'
}, {
    value: 'e', text: 'E'
}, {
    value: 'f', text: 'F'
}, {
    value: 'f_sharp', text: 'F♯ / G♭'
}, {
    value: 'g', text: 'G'
}, {
    value: 'g_sharp', text: 'G♯ / A♭'
}, {
    value: 'a', text: 'A'
}, {
    value: 'a_sharp', text: 'A♯ / B♭'
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
                            <div key={key.value}
                                onClick={() => {
                                    props.onSelect(key.value);
                                }}
                                className="GroupButton">
                                {key.text}
                            </div>
                        );
                    })}
                    </div>
                </div>
            </div>
            <div className={bgClass} onClick={() => {
                props.onClose();
            }}></div>
        </React.Fragment>
    );
};

Selector.propTypes = {
    active: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
};

Selector.defaultProps = {
    active: false
};

export default Selector;
import React from 'react';


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
    if (props.active) {
        className += ' Selector-active';
    }
    console.log('Rendering Selctor with class: ' + className);
    return (
        <div className={className}>
            {KEYS.map(key => {
                return <div key={key.value} className="Button">{key.text}</div>
            })}
        </div>
    )
};

export default Selector;

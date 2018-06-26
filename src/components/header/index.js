import React from 'react';
import ReactResponsiveSelect from 'react-responsive-select';

import './index.css';

const caretIcon = (
    <svg viewBox="0 0 448 512">
        <path d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM92.5 220.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H101c-10.7 0-16.1 12.9-8.5 20.5z"/>
    </svg>
);

const KEYS = [{
    value: 'all', text: 'All'
}, {
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

const Header = props => {

    //const handleChange =

    return (
        <div className="Header">
            <div className="Logo">
                ShredShed - Chords
            </div>
            <div className="Filter">
                <ReactResponsiveSelect
                    name='root'
                    options={KEYS}
                    caretIcon={caretIcon}
                    selectedValue={props.selected}
                    onChange={(e) => {props.onRootChange(e.value);}}
                    />
            </div>
        </div>
    );
};

export default Header;

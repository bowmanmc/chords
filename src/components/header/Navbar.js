import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../logo';


const CARET = <svg viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM92.5 220.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H101c-10.7 0-16.1 12.9-8.5 20.5z"/></svg>;

const Navbar = props => {

    const a = props.active;

    const menuItemClickHandler = (selected) => {
        if (a === selected) {
            props.onToggleSelector(null);
        }
        else {
            props.onToggleSelector(selected);
        }
    };

    return (
        <div className="Navbar">
            <div className="LogoContainer">
                <Link to={'/'}><Logo /></Link>
            </div>
            <div className="Menu">
                <div className={a === 'collections' ? 'MenuItem MenuItem__selected' : 'MenuItem'}
                    onClick={() => { menuItemClickHandler('collections'); }}>
                    {CARET} Collections
                </div>
                <div className={a === 'root' ? 'MenuItem MenuItem__selected' : 'MenuItem'}
                    onClick={() => { menuItemClickHandler('root'); }}>
                    {CARET} C
                </div>
                <div className={a === 'quality' ? 'MenuItem MenuItem__selected' : 'MenuItem'}
                    onClick={() => { menuItemClickHandler('quality'); }}>
                    {CARET} all
                </div>
                <div className="MenuItem MenuItem__fill"
                     onClick={() => { menuItemClickHandler(null); }}>
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    active: PropTypes.string,
    onToggleSelector: PropTypes.func.isRequired
};

export default Navbar;

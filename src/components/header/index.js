import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Selector from './Selector';

import './index.css';


class Header extends React.Component {

    state = {
        activeSelector: 'collections'
    };

    render() {
        return (
            <div className="Header">
                <Navbar active={this.state.activeSelector} onToggleSelector={(selector) => {
                    this.setState({
                        activeSelector: selector
                    });
                }} />

                <Selector active={this.state.showSelector}
                    onClose={() => {
                        this.setState({showSelector: false});
                    }} />
            </div>
        );
    }
}

Header.propTypes = {
    selected: PropTypes.string.isRequired
};

export default Header;

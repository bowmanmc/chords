import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Selector from './Selector';

import './index.css';


class Header extends React.Component {

    state = {
        showSelector: false
    };

    render() {
        return (
            <div className="Header">
                <Navbar active={this.state.showSelector} onToggle={() => {
                    this.setState(prevState => ({
                        showSelector: !prevState.showSelector
                    }));
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

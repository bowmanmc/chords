import React from 'react';
import PropTypes from 'prop-types';

import Navbar from './Navbar';
import Selector from './Selector';

import './index.css';


class Header extends React.Component {

    state = {
        showSelector: true
    }

    render() {
        return (
            <div className="Header">
                <Navbar active={this.state.showSelector} onToggle={() => {
                    this.setState(prevState => ({
                        showSelector: !prevState.showSelector
                    }));
                }}/>
                <Selector
                    onSelect={selection => {
                        this.props.onRootChange(selection);
                        this.setState({showSelector: false});
                    }}
                    active={this.state.showSelector} />
            </div>
        );
    }
}

Header.propTypes = {
    onRootChange: PropTypes.func.isRequired
};

export default Header;

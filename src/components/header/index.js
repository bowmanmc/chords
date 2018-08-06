import React from 'react';

import Navbar from './Navbar';
import Selector from './Selector';

import './index.css';


class Header extends React.Component {

    state = {
        activeSelector: null
    };

    render() {
        return (
            <div className="Header">
                <Navbar active={this.state.activeSelector} onToggleSelector={(selector) => {
                    this.setState({
                        activeSelector: selector
                    });
                }} />

                <Selector active={this.state.activeSelector}
                    onClose={() => {
                        this.setState({activeSelector: null});
                    }} />
            </div>
        );
    }
}

export default Header;

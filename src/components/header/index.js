import React from 'react';

import Navbar from './Navbar';
import Selector from './Selector';

import './index.css';


class Header extends React.Component {

    state = {
        showSelector: false
    }

    render() {
        return (
            <div className="Header">
                <Navbar active={this.state.showSelector} onToggle={() => {
                    this.setState(prevState => ({
                        showSelector: !prevState.showSelector
                    }));
                }}/>
                <Selector active={this.state.showSelector} />
            </div>
        );
    }
};

export default Header;

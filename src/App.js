import React from 'react';

import Header from './components/header';
import Viewer from './components/viewer';

import './App.css';


class App extends React.Component {

    render() {

        const root = this.props.match.params.chord || 'open';
        //const quality = this.props.match.params.quality;

        return (
            <div className="App">
                <Header />
                <Viewer root={root} />
            </div>
        );
    }
}

export default App;

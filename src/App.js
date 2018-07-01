import React from 'react';

import Header from './components/header';
import Viewer from './components/viewer';

import './App.css';


class App extends React.Component {

    render() {

        const root = this.props.match.params.chord || 'c';
        //const quality = this.props.match.params.quality;

        //console.log(`Rendering Viewer for chord ${root} - ${quality}`);

        return (
            <div className="App">
                <Header selected={root} />
                <Viewer root={root} />
            </div>
        );
    }
}

export default App;

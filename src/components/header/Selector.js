import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Selector = props => {
    let className = 'Selector';
    let bgClass = 'SelectorBackground';
    if (props.active) {
        className += ' Selector-active';
        bgClass = 'SelectorBackground-active';
    }

    const resetScroll = () => {
        props.onClose();
        window.scrollTo(0,0);
        Array.from(document.getElementsByClassName("Positions")).forEach(el => {
            el.scrollLeft = 0;
        });
    };

    return (
        <React.Fragment>
            <div className={className}>
                <div className="SelectorGroup">
                    <span className="GroupName">Collections</span>
                    <div className="GroupButtons">
                        <span>
                            <Link to={'/open'} onClick={resetScroll} className="GroupButton">Open Chords</Link>
                            <Link to={'/barre'} onClick={resetScroll} className="GroupButton">Barre Chords</Link>
                        </span>
                    </div>
                </div>
                <div className="SelectorGroup">
                    <span className="GroupName">Root Notes</span>
                    <div className="GroupButtons">
                        <span>
                            <Link to="/c" onClick={resetScroll} className="GroupButton">C</Link>
                            <Link to="/csharp" onClick={resetScroll} className="GroupButton">C♯ / D♭</Link>
                        </span>
                        <span>
                            <Link to="/d" onClick={resetScroll} className="GroupButton">D</Link>
                            <Link to="/dsharp" onClick={resetScroll} className="GroupButton">D♯ / E♭</Link>
                        </span>
                        <span>
                            <Link to="/e" onClick={resetScroll} className="GroupButton">E</Link>
                        </span>
                        <span>
                            <Link to="/f" onClick={resetScroll} className="GroupButton">F</Link>
                            <Link to="/fsharp" onClick={resetScroll} className="GroupButton">F♯ / G♭</Link>
                        </span>
                        <span>
                            <Link to="/g" onClick={resetScroll} className="GroupButton">G</Link>
                            <Link to="/gsharp" onClick={resetScroll} className="GroupButton">G♯ / A♭</Link>
                        </span>
                        <span>
                            <Link to="/a" onClick={resetScroll} className="GroupButton">A</Link>
                            <Link to="/asharp" onClick={resetScroll} className="GroupButton">A♯ / B♭</Link>
                        </span>
                        <span>
                            <Link to="/b" onClick={resetScroll} className="GroupButton">B</Link>
                        </span>
                    </div>
                </div>
            </div>
            <div className={bgClass} onClick={() => {
                props.onClose();
            }} />
        </React.Fragment>
    );
};

Selector.propTypes = {
    active: PropTypes.string,
    onClose: PropTypes.func.isRequired
};

Selector.defaultProps = {
    active: null
};

export default Selector;

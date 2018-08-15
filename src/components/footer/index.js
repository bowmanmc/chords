import React from 'react';

import Logo from '../logo';

import './index.css';


const Footer = () => {

    return (
        <footer className="Footer">

            <section className="copyright">
            </section>

            <section className="app">
                <a target="_system" href="https://www.shredahead.app"><Logo grayscale={true} /></a>
                <p>
                    For more information about Shred Ahead, please check out
                    our website
                    at <a target="_system" href="https://www.shredahead.app">www.shredahead.app</a>
                </p>
            </section>

            <section className="company">
            </section>

        </footer>
    );
}

export default Footer;

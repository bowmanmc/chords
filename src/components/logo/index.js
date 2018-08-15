import React from 'react';

import Acoustic from './Acoustic';
import LesPaul from './LesPaul';
import Stratocaster from './Stratocaster';
import Telecaster from './Telecaster';

import './index.css';


const GUITARS = [
    <LesPaul />, <Stratocaster />, <Telecaster />, <Acoustic />
];

const Logo = (props) => {

    const randomIdx = Math.floor(Math.random() * GUITARS.length);
    const randomGuitar = GUITARS[randomIdx];

    let className="Logo";
    if (props.grayscale) {
        className = "Logo Logo-grayscale";
    }

    return (
        <svg className={className} viewBox="0 0 1136.21 419.5">
            <defs>
                <clipPath id="a">
                    <path fill="none" d="M179 0c-359.6-1.3-79.4 419-1.3 419.5S561.34 1.3 179 0z"/>
                </clipPath>
            </defs>
            <g className="Text">
                <path d="M501.87 34.73c-6.93-8.31-19.08-12.88-34.2-12.88h-.5c-30.42 0-48.24 13.07-52.95 38.9l-4 23c-2.65 14.94 4.57 27.55 22.08 38.58l18.29 11.52c6.55 4 8.1 7.67 6.63 15.64l-2.51 13.81c-1.78 10.93-9.72 12.57-14.29 12.57-3.51 0-6-.86-7.45-2.54-1.94-2.29-1.81-6.1-1.36-8.85l5.49-30.61h-35.61l-6 33.39c-2.09 12-.2 21.56 5.62 28.47 6.76 8 18.48 12.14 34.83 12.14h.5c32.25 0 48.08-11.79 52.94-39.39l4.5-25.23c3.73-20.39-7.4-29.2-22.35-38.61L453 93.14c-6.11-3.87-7.49-7.28-6.18-15.15l2.26-12.09c1.29-8.11 5.8-12.05 13.8-12.05 3.64 0 6.18.81 7.55 2.43s1.87 4.56 1.25 8.43l-5.26 28.64h35.68L507.61 62c2.02-11.11.09-20.27-5.74-27.27zM590.97 23.85l-12.75 73h-26.14l12.75-73h-36.1l-31.98 182h36.1l13.5-76h26.14l-13.5 76h36.11l31.98-182h-36.11zM728.31 36.61c-7-8.35-19.14-12.76-35.15-12.76H645l-32 182h36.1l12.25-69.75h9.52l9.75 69.75h35.9l-12-75.12c13.22-6.16 21.1-17.49 24.06-34.53l5.53-31.2c2.1-11.75.14-21.29-5.8-28.39zm-52.95 19.74h12.3c4.49 0 7.37.83 8.8 2.55s1.81 4.89 1 9.34l-4 22.74c-2 10.88-7.54 13.12-15.31 13.12h-11.08zM835.85 56.35l5.73-32.5h-83.86l-31.98 182h84.61l5.73-32.5h-48.49l7.75-43.5h40.01l5.73-32.5h-40.01l7.04-41h47.74zM938.55 36.61c-7-8.35-19.13-12.76-35.14-12.76h-47.69l-32 182h48.92c31.93 0 49.07-12.68 54-39.9L944.36 65c2.09-11.74.14-21.28-5.81-28.39zm-62.39 136.74h-10.58l20.52-117h11.81c4.48 0 7.36.83 8.8 2.55s1.81 4.89 1 9.34l-16.25 92c-1.95 10.87-7.53 13.11-15.3 13.11z" />
                <path d="M662.09 399.66l-2.56-182h-45.76l-71.95 182h39l14.22-39h29.25l-.82 39zm-36.21-123.28l-1.12 53.28H606.4zM767.76 217.66l-13.95 73h-29.24l13.95-73h-38.85l-34.98 182h38.85l14.76-76h29.24l-14.77 76h38.86l34.98-182h-38.85zM906.17 250.16l6.27-32.5h-91.08l-34.98 182h91.89l6.28-32.5H831.5l8.49-43.5h43.75l6.28-32.5h-43.78l7.71-41h52.22zM1001.44 399.66l-2.56-182h-45.76l-72 182h39.05l14.22-39h29.25l-.82 39zm-36.21-123.28l-1.12 53.28h-18.36zM1129.9 231.4c-7.4-9-20.9-13.74-39-13.74H1039l-35 182h53.19c34.7 0 53.34-12.66 58.67-39.84l19.42-101c2.23-11.16.4-20.39-5.38-27.42zm-68.84 135.76h-11.9l22.45-117h13.24c5.17 0 8.58 1 10.14 2.87 1.44 1.74 1.74 4.75.91 9l-17.77 92c-1.87 9.44-6.65 13.13-17.07 13.13z" />
            </g>
            <g clipPath="url(#a)">
                <path className="Pick" d="M179 0c-359.6-1.3-79.4 419-1.3 419.5S561.34 1.3 179 0z"/>
                { randomGuitar }
            </g>
        </svg>
    );
};

export default Logo;



import MovableSeventh from '../movable/seventh';


export default {
    name: 'F♯ / G♭ Seventh',
    shortName: 'F♯7 / G♭7',
    root: 'F♯ / G♭',
    quality: 'seventh',
    chords: [{
        position: MovableSeventh.E1(2)
    }, {
        position: MovableSeventh.E2(2)
    }, {
        position: MovableSeventh.D1(4)
    }, {
        position: MovableSeventh.A1(9)
    }, {
        position: MovableSeventh.A2(9)
    }, {
        position: MovableSeventh.A3(9)
    }]
};

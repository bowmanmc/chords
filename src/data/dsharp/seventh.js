import MovableSeventh from '../movable/seventh';


export default {
    name: 'D♯ / E♭ Seventh',
    shortName: 'D♯7 / E♭7',
    root: 'D♯ / E♭',
    quality: 'seventh',
    chords: [{
        position: MovableSeventh.D1(1)
    }, {
        position: MovableSeventh.A1(6)
    }, {
        position: MovableSeventh.A2(6)
    }, {
        position: MovableSeventh.A3(6)
    }, {
        position: MovableSeventh.E1(11)
    }, {
        position: MovableSeventh.E2(11)
    }]
};

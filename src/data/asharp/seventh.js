import MovableSeventh from '../movable/seventh';


export default {
    name: 'A♯ / B♭ Seventh (A♯7 / B♭7)',
    root: 'A♯ / B♭',
    quality: 'seventh',
    chords: [{
        position: MovableSeventh.A1(1)
    }, {
        position: MovableSeventh.A2(1)
    }, {
        position: MovableSeventh.E1(6)
    }, {
        position: MovableSeventh.E2(6)
    }, {
        position: MovableSeventh.D1(8)
    }, {
        position: MovableSeventh.A3(13)
    }]
};

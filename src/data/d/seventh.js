import MovableSeventh from '../movable/seventh';


export default {
    name: 'D Seventh (D7)',
    root: 'D',
    quality: 'seventh',
    chords: [{
        position: {
            tabs: ['x', 'x', '0', '2', '1', '2'],
            fingering: ['x', 'x', '0', '2', '1', '3']
        }
    }, {
        position: MovableSeventh.A1(5)
    }, {
        position: MovableSeventh.A2(5)
    }, {
        position: MovableSeventh.A3(5)
    }, {
        position: MovableSeventh.E1(10)
    }, {
        position: MovableSeventh.E2(10)
    }]
};

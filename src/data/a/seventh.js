import MovableSeventh from '../movable/seventh';


export default {
    name: 'A Seventh (A7)',
    root: 'A',
    quality: 'seventh',
    chords: [{
        position: {
            tabs: ['x', '0', '2', '0', '2', '0'],
            fingering: ['x', '0', '2', '0', '3', '0']
        }
    }, {
        position: {
            tabs: ['x', '0', '2', '2', '2', '3'],
            fingering: ['x', '0', '1', '1', '1', '2']
        }
    }, {
        position: MovableSeventh.E1(5)
    }, {
        position: MovableSeventh.E2(5)
    }, {
        position: MovableSeventh.D1(7)
    }, {
        position: MovableSeventh.A3(12)
    }]
};

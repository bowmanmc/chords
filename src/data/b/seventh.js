import MovableSeventh from '../movable/seventh';


export default {
    name: 'B Seventh (B7)',
    root: 'B',
    quality: 'seventh',
    chords: [{
        position: {
            tabs: ['x', '2', '1', '2', '0', '2'],
            fingering: ['x', '2', '1', '3', '0', '4']
        }
    }, {
        position: MovableSeventh.A1(2)
    }, {
        position: MovableSeventh.A2(2)
    }, {
        position: MovableSeventh.E1(7)
    }, {
        position: MovableSeventh.E2(7)
    }, {
        position: MovableSeventh.D1(9)
    }]
};

import MovableSeventh from '../movable/seventh';


export default {
    name: 'E Seventh',
    shortName: 'E7',
    root: 'E',
    quality: 'seventh',
    chords: [{
        position: {
            tabs: ['0', '2', '0', '1', '0', '0'],
            fingering: ['0', '2', '0', '1', '0', '0']
        }
    }, {
        position: MovableSeventh.D1(2)
    }, {
        position: MovableSeventh.A1(7)
    }, {
        position: MovableSeventh.A2(7)
    }, {
        position: MovableSeventh.A3(7)
    }, {
        position: MovableSeventh.E2(12)
    }]
};

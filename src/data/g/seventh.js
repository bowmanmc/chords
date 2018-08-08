import MovableSeventh from '../movable/seventh';


export default {
    name: 'G Seventh',
    shortName: 'G7',
    root: 'G',
    quality: 'seventh',
    chords: [{
        position: {
            tabs: ['3', '2', '0', '0', '0', '1'],
            fingering: ['3', '2', '0', '0', '0', '1']
        }
    }, {
        position: MovableSeventh.E1(3)
    }, {
        position: MovableSeventh.E2(3)
    }, {
        position: MovableSeventh.D1(5)
    }, {
        position: MovableSeventh.A1(10)
    }, {
        position: MovableSeventh.A2(10)
    }, {
        position: MovableSeventh.A3(10)
    }]
};

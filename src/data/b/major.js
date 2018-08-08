import MovableMajor from '../movable/major';


export default {
    name: 'B Major',
    shortName: 'B',
    root: 'B',
    quality: 'major',
    chords: [{
        position: MovableMajor.A1(2)
    }, {
        position: MovableMajor.E1(7)
    }, {
        position: MovableMajor.E2(7)
    }, {
        position: MovableMajor.D1(9)
    }, {
        position: MovableMajor.A2(14)
    }]
};

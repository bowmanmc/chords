import MovableMajor from '../movable/major';


export default {
    name: 'F Major (F)',
    shortName: 'F',
    root: 'F',
    quality: 'major',
    chords: [{
        position: MovableMajor.E1(1)
    }, {
        position: MovableMajor.D1(3)
    }, {
        position: MovableMajor.A1(8)
    }, {
        position: MovableMajor.A2(8)
    }, {
        position: MovableMajor.E2(13)
    }]
};

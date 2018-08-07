import MovableMajor from '../movable/major';


export default {
    name: 'C♯ / D♭ Major',
    shortName: 'C♯ / D♭',
    root: 'C♯ / D♭',
    quality: 'major',
    chords: [{
        position: MovableMajor.A1(4)
    }, {
        position: MovableMajor.A2(4)
    }, {
        position: MovableMajor.E1(9)
    }, {
        position: MovableMajor.E2(9)
    }, {
        position: MovableMajor.D1(11)
    }]
};

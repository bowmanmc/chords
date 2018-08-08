import MovableMajor from '../movable/major';


export default {
    name: 'D♯ / E♭ Major',
    shortName: 'D♯ / E♭',
    root: 'D♯ / E♭',
    quality: 'major',
    chords: [{
        position: MovableMajor.D1(1)
    }, {
        position: MovableMajor.A1(6)
    }, {
        position: MovableMajor.A2(6)
    }, {
        position: MovableMajor.E1(11)
    }, {
        position: MovableMajor.E2(11)
    }]
};

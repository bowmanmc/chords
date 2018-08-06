import MovableMajor from '../movable/major';


export default {
    name: 'F♯ / G♭ Major (F♯ / G♭)',
    shortName: 'F♯ / G♭',
    root: 'F♯ / G♭',
    quality: 'major',
    chords: [{
        position: MovableMajor.E1(2)
    }, {
        position: MovableMajor.D1(4)
    }, {
        position: MovableMajor.A1(9)
    }, {
        position: MovableMajor.A2(9)
    }, {
        position: MovableMajor.E2(14)
    }]
};

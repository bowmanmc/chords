import MovableMajor from '../movable/major';


export default {
    name: 'A♯ / B♭ Major',
    shortName: 'A♯ / B♭',
    root: 'A♯ / B♭',
    quality: 'major',
    chords: [{
        position: MovableMajor.A1(1)
    }, {
        position: MovableMajor.E1(6)
    }, {
        position: MovableMajor.E2(6)
    }, {
        position: MovableMajor.D1(8)
    }, {
        position: MovableMajor.A2(13)
    }]
};

import MovableMajor7 from '../movable/major7';


export default {
    name: 'G♯ / A♭ Major Seventh (G♯maj7 / A♭maj7)',
    shortName: 'G♯maj7 / A♭maj7',
    root: 'G♯ / A♭',
    quality: 'maj7',
    chords: [{
        position: MovableMajor7.E1(4)
    }, {
        position: MovableMajor7.E2(4)
    }, {
        position: MovableMajor7.D1(6)
    }, {
        position: MovableMajor7.D2(6)
    }, {
        position: MovableMajor7.A1(11)
    }, {
        position: MovableMajor7.A2(11)
    }]
};

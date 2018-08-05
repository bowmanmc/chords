import MovableMajor7 from '../movable/major7';


export default {
    name: 'A♯ / B♭ Major Seventh (A♯maj7 / B♭maj7)',
    root: 'A♯ / B♭',
    quality: 'maj7',
    chords: [{
        position: MovableMajor7.A1(1)
    }, {
        position: MovableMajor7.E1(6)
    }, {
        position: MovableMajor7.E2(6)
    }, {
        position: MovableMajor7.D1(8)
    }, {
        position: MovableMajor7.D2(8)
    }, {
        position: MovableMajor7.A2(13)
    }]
};

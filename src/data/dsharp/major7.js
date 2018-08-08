import MovableMajor7 from '../movable/major7';


export default {
    name: 'D♯ / E♭ Major Seventh',
    shotName: 'D♯maj7 / E♭maj7',
    root: 'D♯ / E♭',
    quality: 'maj7',
    chords: [{
        position: MovableMajor7.D2(1)
    }, {
        position: MovableMajor7.A1(6)
    }, {
        position: MovableMajor7.A2(6)
    }, {
        position: MovableMajor7.E1(11)
    }, {
        position: MovableMajor7.E2(11)
    }, {
        position: MovableMajor7.D1(13)
    }]
};

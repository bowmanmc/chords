import MovableMajor7 from '../movable/major7';


export default {
    name: 'C♯ / D♭ Major Seventh (C♯maj7 / D♭maj7)',
    root: 'C♯ / D♭',
    quality: 'maj7',
    chords: [{
        position: MovableMajor7.A1(4)
    }, {
        position: MovableMajor7.A2(4)
    }, {
        position: MovableMajor7.E1(9)
    }, {
        position: MovableMajor7.E2(9)
    }, {
        position: MovableMajor7.D1(11)
    }, {
        position: MovableMajor7.D2(11)
    }]
};

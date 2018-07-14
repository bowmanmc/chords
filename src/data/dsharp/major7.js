import MovableMajor7 from '../movable/major7';


export default {
    name: 'D♯ / E♭ Major Seventh',
    shortName: 'D♯maj7 / E♭maj7',
    root: 'D♯ / E♭',
    quality: 'maj7',
    positions: [
        MovableMajor7.D2(1),
        MovableMajor7.A1(6),
        MovableMajor7.A2(6),
        MovableMajor7.E1(11),
        MovableMajor7.E2(11),
        MovableMajor7.D1(13)
    ]
};

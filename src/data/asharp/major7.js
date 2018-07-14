import MovableMajor7 from '../movable/major7';


export default {
    name: 'A♯ / B♭ Major Seventh',
    shortName: 'A♯maj7 / B♭maj7',
    root: 'A♯ / B♭',
    quality: 'maj7',
    positions: [
        MovableMajor7.A1(1),
        MovableMajor7.E1(6),
        MovableMajor7.E2(6),
        MovableMajor7.D1(8),
        MovableMajor7.D2(8),
        MovableMajor7.A2(13)
    ]
};

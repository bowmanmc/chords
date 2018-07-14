import MovableMajor7 from '../movable/major7';


export default {
    name: 'B Major Seventh',
    shortName: 'Bmaj7',
    root: 'B',
    quality: 'maj7',
    positions: [
        MovableMajor7.A1(2),
        MovableMajor7.E1(7),
        MovableMajor7.E2(7),
        MovableMajor7.D1(9),
        MovableMajor7.D2(9),
        MovableMajor7.A2(14)
    ]
};

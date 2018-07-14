import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'C Major Seventh',
    shortName: 'Cmaj7',
    root: 'C',
    quality: 'maj7',
    positions: [
        OpenMajor7.C,
        MovableMajor7.A1(3),
        MovableMajor7.E1(8),
        MovableMajor7.E2(8),
        MovableMajor7.D1(10),
        MovableMajor7.D2(10)
    ]
};

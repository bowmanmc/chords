import MovableMajor7 from '../movable/major7';
import OpenMajor7 from '../open/major7';


export default {
    name: 'D Major Seventh',
    shortName: 'Dmaj7',
    root: 'D',
    quality: 'maj7',
    positions: [
        OpenMajor7.D,
        MovableMajor7.A1(5),
        MovableMajor7.A2(5),
        MovableMajor7.E1(10),
        MovableMajor7.E2(10),
        MovableMajor7.D2(12)
    ]
};
